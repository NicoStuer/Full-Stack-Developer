//CRUD
//Traer todos los datos(get), Borrar datos(delete), Editar datos (put/patch), Crear (post)

const container = document.getElementById("container");

async function hacerRequest() {
  try {
    const url = "https://6476838d9233e82dd53a12de.mockapi.io/users";

    const response = await fetch(url);
    const data = await response.json();
    data.forEach((user) => {
      renderData(user);
      console.log(user)
    });
  } catch (error) {
    console.log(error);
  }
}

hacerRequest();

container.addEventListener("click", (e) => {
  targetButtons(e);
});

async function targetButtons(e) {
  if (!e.target) return; // Verificar si e.target es nulo

  const editButton = e.target.closest(".btn-primary");
  const deleteButton = e.target.closest(".btn-danger");

  if (e.target.classList.contains("fa-plus")) {
    createUser();
    console.log("Add");
  } else if (editButton !== null) {
    const rowEdit = editButton.closest(".person-row");
    editUser(rowEdit);
  } else if (deleteButton !== null) {
    const rowDelete = deleteButton.closest(".person-row");
    const id = rowDelete.dataset.userId;

    try {
      const response = await fetch(
        `https://6476838d9233e82dd53a12de.mockapi.io/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Usuario eliminado exitosamente");
        reloadPage();
      }
    } catch (error) {
      console.log("Error al eliminar el usuario:", error);
    }
  }
}

function reloadPage() {
  location.reload();
}

function renderData(user) {
  const row = document.createElement("div");
  row.classList.add("row", "no-gutters", "mb-1", "person-row");
  row.dataset.userId = user.id;

  row.innerHTML = `
    <div class="col-md-2">
      <div class="person-image-container">
        <div class="person-image">
          <img src="${user.avatar}" alt="Avatar">
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="column-content text-center">
        <h4>${user.name}</h4>
      </div>
    </div>
    <div class="col-md-3">
      <div class="column-content text-center">
        <h4>${user.address}</h4>
      </div>
    </div>
    <div class="col-md-4">
      <div class="column-content text-center">
        <p>${user.email}</p>
      </div>
    </div>
  `;

  container.appendChild(row);
}

function createUser() {
  const newRow = document.createElement("div");
  newRow.classList.add("row", "no-gutters", "mb-1", "person-row");

  newRow.innerHTML = `
    <div class="col-md-1">
      <div class="person-image-container">
        <div class="person-image">
          <input id="inputAvatar" type="text">
        </div>
      </div>
    </div>
    <div class="col-md-2">
      <div class="column-content text-center">
        <input id="inputName" type="text">
      </div>
    </div>
    <div class="col-md-2">
      <div class="column-content text-center">
        <input id="inputLastName" type="text">
      </div>
    </div>
    <div class="col-md-3">
      <div class="column-content text-center">
        <input id="inputMail" type="text">
      </div>
    </div>
    <div class="col-md-1">
      <div class="column-content text-center">
        <div class="button-container centered-button">
          <button class="btn btn-success check-btn">
            <i class="fas fa-check"></i> Checked
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-1">
      <div class="column-content text-center mb-2">
        <div class="button-container centered-button">
          <button class="btn btn-danger discard-btn">
            <i class="fas fa-trash"></i> Descartar
          </button>
        </div>
      </div>
    </div>
  `;

  const addIcon = container.querySelector(".add-icon");
  const addButton = addIcon.querySelector(".fa-plus");

  if (!container.querySelector(".person-row")) {
    container.insertBefore(newRow, addIcon);
    addIcon.style.display = "none";
  } else {
    container.insertBefore(newRow, container.firstChild);
    addButton.style.display = "none";
  }

  const discardButton = newRow.querySelector(".discard-btn");
  discardButton.addEventListener("click", () => {
    newRow.remove();

    if (!container.querySelector(".person-row")) {
      addIcon.style.display = "block";
    } else {
      addButton.style.display = "block";
    }
  });

  const checkedButton = newRow.querySelector(".check-btn");
  checkedButton.addEventListener("click", async () => {
    const inputAvatar = newRow.querySelector("#inputAvatar").value;
    const inputName = newRow.querySelector("#inputName").value;
    const inputLastName = newRow.querySelector("#inputLastName").value;
    const inputMail = newRow.querySelector("#inputMail").value;

    const newUser = {
      avatar: inputAvatar,
      name: inputName,
      lastName: inputLastName,
      email: inputMail,
    };

    try {
      const response = await fetch(
        `https://6476838d9233e82dd53a12de.mockapi.io/users/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );
      if (response.ok) {
        console.log("Usuario guardado exitosamente");
        reloadPage();
      }
    } catch (error) {
      console.log("Error al guardar el usuario:", error);
    }
  });
}

function editUser(row) {
    const nameElement = row.querySelector(".column-content:nth-child(2) h4");
    const lastNameElement = row.querySelector(".column-content:nth-child(3) h4");
    const emailElement = row.querySelector(".column-content:nth-child(4) p");
  
    if (nameElement && lastNameElement && emailElement) {
      const nameValue = nameElement.textContent;
      const lastNameValue = lastNameElement.textContent;
      const emailValue = emailElement.textContent;
  
      nameElement.innerHTML = `<input type="text" class="edit-input" value="${nameValue}">`;
      lastNameElement.innerHTML = `<input type="text" class="edit-input" value="${lastNameValue}">`;
      emailElement.innerHTML = `<input type="text" class="edit-input" value="${emailValue}">`;
  
      const editButton = row.querySelector(".btn-primary"); // Corregir la selección del botón de edición
      const saveButton = document.createElement("button");
      saveButton.classList.add("btn", "btn-primary", "save-btn");
      saveButton.innerHTML = `<i class="fas fa-save"></i> Guardar`;
      editButton.replaceWith(saveButton);
  
      const discardButton = row.querySelector(".btn-danger");
      discardButton.disabled = true;
  
      saveButton.addEventListener("click", () => {
        saveUser(row);
      });
    }
  }
   

async function saveUser(row) {
  const id = row.dataset.userId;
  const nameInput = row.querySelector(".column-content:nth-child(2) .edit-input");
  const lastNameInput = row.querySelector(".column-content:nth-child(3) .edit-input");
  const emailInput = row.querySelector(".column-content:nth-child(4) .edit-input");

  const newName = nameInput.value;
  const newLastName = lastNameInput.value;
  const newEmail = emailInput.value;

  const updatedUser = {
    name: newName,
    lastName: newLastName,
    email: newEmail,
  };

  try {
    const response = await fetch(
      `https://6476838d9233e82dd53a12de.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      }
    );
    if (response.ok) {
      console.log("Usuario actualizado exitosamente");
      reloadPage();
    }
  } catch (error) {
    console.log("Error al actualizar el usuario:", error);
  }
}
  
//POST
// const newUser = {
//   createdAt: "2023-05-30T14:45:51.262Z",
//   name: "Malcolm Murazik",
//   avatar:
//     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/78.jpg",
//   email: "Ulices.Luettgen40@gmail.com",
//   address: "Berkshire",
//   id: "1",
// };

// fetch(`https://6476838d9233e82dd53a12de.mockapi.io/users/`, {
//   method: "POST",
//   headers: { "Content-Type": "aplication/json" },
//   body: JSON.stringify(newUser),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// //PUT

// const upDateUser = {
//   createdAt: "2023-05-30T14:45:51.262Z",
//   name: "Malcolm Murazik",
//   avatar:
//     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/78.jpg",
//   email: "Ulices.Luettgen40@gmail.com",
//   address: "Berkshire",
//   id: "1",
// };

// fetch(`https://6476838d9233e82dd53a12de.mockapi.io/users/`, {
//   method: "PUT",
//   headers: { "Content-Type": "aplication/json" },
//   body: JSON.stringify(upDateUser),
// });
