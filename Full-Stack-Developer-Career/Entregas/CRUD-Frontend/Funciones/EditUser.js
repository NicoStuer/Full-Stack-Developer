export default function EditUser(userId, data) {
    const createUserContainer = document.getElementById("first-div");
    createUserContainer.innerHTML = "";
    
    const user = getUserById(data, userId);
  
    if (!user) {
      console.error(`No se encontró el usuario con el ID: ${userId}`);
      return;
    }
  
    const { avatar, name, address, email } = user;
  
    container.innerHTML = `
      <div class="no-gutters mb-1 person-row">
        <h3 class="text-center">Edit User</h3>
  
        <div class="person-image-container mb-2">
          <div class="person-image">
            <img src="${avatar}" alt="Avatar">
          </div>
        </div>
  
        <div class="row mb-2">
          <div class="col-md-6 offset-md-3">
            <div class="form-floating">
              <input class="form-control" id="inputAvatar" type="text" placeholder="URL Image" value="${avatar}">
              <label for="inputAvatar">URL Image:</label>
            </div>
          </div>
        </div>
  
        <div class="row mb-2">
          <div class="col-md-6 offset-md-3">
            <div class="form-floating">
              <input class="form-control" id="inputName" type="text" placeholder="Name" value="${name}">
              <label for="inputName">Name:</label>
            </div>
          </div>
        </div>
  
        <div class="row mb-2">
          <div class="col-md-6 offset-md-3">
            <div class="form-floating">
              <input class="form-control" id="inputAddress" type="text" placeholder="Address" value="${address}">
              <label for="inputAddress">Address:</label>
            </div>
          </div>
        </div>
  
        <div class="row mb-2">
          <div class="col-md-6 offset-md-3">
            <div class="form-floating">
              <input class="form-control" id="inputMail" type="text" placeholder="Email" value="${email}">
              <label for="inputMail">Email:</label>
            </div>
          </div>
        </div>
  
        <div id="buttons" class="buttons mt-5">
          <div class="d-flex justify-content-center">
            <div class="column-content text-center mx-3">
              <div class="button-container centered-button">
                <button class="btn btn-success check-btn">
                  <i class="fas fa-check"></i> Checked
                </button>
              </div>
            </div>
  
            <div class="column-content text-center mx-3">
              <div class="button-container centered-button">
                <button class="btn btn-danger discard-btn">
                  <i class="fas fa-trash"></i> Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  
    const checkButton = document.querySelector(".check-btn");
    const discardButton = document.querySelector(".discard-btn");
    checkButton.addEventListener("click", async () => {
        const editedAvatarUrl = document.getElementById("inputAvatar").value;
        const editedName = document.getElementById("inputName").value;
        const editedAddress = document.getElementById("inputAddress").value;
        const editedEmail = document.getElementById("inputMail").value;
      
        const updatedUserData = {
          avatar: editedAvatarUrl,
          name: editedName,
          address: editedAddress,
          email: editedEmail,
        };
      
        try {
          const url = `https://6476838d9233e82dd53a12de.mockapi.io/users/${userId}`;
          const response = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUserData),
          });
      
          if (!response.ok) {
            throw new Error("Error al actualizar los datos del usuario.");
          }
      
          console.log("¡Datos del usuario actualizados correctamente!");
          location.reload();
        } catch (error) {
          console.error("Error al actualizar los datos del usuario:", error);
        }
      });

    discardButton.addEventListener("click", () => {
        location.reload();
    })
  }
  
  function getUserById(data, userId) {
    return data.find((user) => user.id === userId);
  }