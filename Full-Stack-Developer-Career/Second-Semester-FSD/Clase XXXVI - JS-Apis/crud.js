const container = document.getElementById("container");

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function hacerRequest() {
  const url = "https://6476838d9233e82dd53a12de.mockapi.io/users";
  const data = await fetchData(url);

  if (data) {
    data.forEach((user) => {
      renderData(user);
    });
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
  } else if (editButton) {
    const rowEdit = editButton.closest(".person-row");
    editUser(rowEdit);
  } else if (deleteButton) {
    const rowDelete = deleteButton.closest(".person-row");
    const id = rowDelete.dataset.id;
    deleteUser(id);
  }
}

function renderData(user) {
  const template = `
    <div class="container-fluid person-row" data-id=${user.id}>
      <div class="row no-gutters mb-1">
        <div class="col-md-1">
          <img src="${user.avatar}" alt="avatar" class="avatar">
        </div>
        <div class="col-md-2">
          <span class="name">${user.name}</span>
        </div>
        <div class="col-md-2">
          <span class="last-name">${user.lastName}</span>
        </div>
        <div class="col-md-3">
          <span class="email">${user.email}</span>
        </div>
        <div class="col-md-1">
          <button class="btn btn-primary btn-sm">
            <i class="fas fa-edit"></i>
          </button>
        </div>
        <div class="col-md-1">
          <button class="btn btn-danger btn-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>`;

  container.insertAdjacentHTML("beforeend", template);
}

function createUser() {
  const avatar = prompt("Ingrese la URL del avatar del usuario:");
  const name = prompt("Ingrese el nombre del usuario:");
  const lastName = prompt("Ingrese el apellido del usuario:");
  const email = prompt("Ingrese el correo electrónico del usuario:");

  const newUser = {
    avatar: avatar,
    name: name,
    lastName: lastName,
    email: email,
  };

  // Realizar una solicitud POST para crear el usuario en el servidor
  fetch("https://6476838d9233e82dd53a12de.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      // Renderizar los datos del nuevo usuario en la interfaz
      renderData(data);
      console.log("Usuario creado exitosamente:", data);
    })
    .catch((error) => {
      console.log("Error al crear el usuario:", error);
    });
  console.log("Create");
}

function editUser(row) {
  // Lógica para editar un usuario existente
  console.log("Edit");
}

function deleteUser(id) {
  // Lógica para eliminar un usuario existente
  console.log(`Delete user with id: ${id}`);
}
