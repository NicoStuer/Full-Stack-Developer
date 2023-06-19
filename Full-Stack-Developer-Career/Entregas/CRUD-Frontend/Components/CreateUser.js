export default function CreateUser() {
  const createUserContainer = document.getElementById("first-div");
  createUserContainer.innerHTML = "";
  container.innerHTML = `
    <div class="no-gutters mb-1 person-row">
    <h3 class="text-center">Create New User</h3>
    
    <div class="column-content text-center">
        <i class="fas fa-user fa-4x mb-3"></i>
    </div>
  
    <div class="row mb-2">
        <div class="col-md-6 offset-md-3">
            <div class="form-floating">
                <input class="form-control" id="inputAvatar" type="text" placeholder="URL Image">
                <label for="inputAvatar">URL Image:</label>
            </div>
        </div>
    </div>
  
    <div class="row mb-2">
        <div class="col-md-6 offset-md-3">
            <div class="form-floating">
                <input class="form-control" id="inputName" type="text" placeholder="Name">
                <label for="inputName">Name:</label>
            </div>
        </div>
    </div>
  
    <div class="row mb-2">
        <div class="col-md-6 offset-md-3">
            <div class="form-floating">
                <input class="form-control" id="inputAddress" type="text" placeholder="Address">
                <label for="inputAddress">Address:</label>
            </div>
        </div>
    </div>
  
    <div class="row mb-2">
        <div class="col-md-6 offset-md-3">
            <div class="form-floating">
                <input class="form-control" id="inputMail" type="text" placeholder="Email">
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

  const discardButton = document.querySelector(".discard-btn");
  discardButton.addEventListener("click", () => {
    location.reload();
  });

  const checkedButton = document
    .getElementById("buttons")
    .querySelector(".check-btn");
  checkedButton.addEventListener("click", async () => {
    const inputAvatar = document.getElementById("inputAvatar").value;
    const inputName = document.getElementById("inputName").value;
    const inputAddress = document.getElementById("inputAddress").value;
    const inputMail = document.getElementById("inputMail").value;

    const newUser = {
      avatar: inputAvatar,
      name: inputName,
      address: inputAddress,
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
        location.reload();
      }
    } catch (error) {
      console.log("Error al guardar el usuario:", error);
    }
  });
}
