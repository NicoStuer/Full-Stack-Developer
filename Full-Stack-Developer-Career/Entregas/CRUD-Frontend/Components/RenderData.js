import CreateUser from "./CreateUser.js";
import DeleteUser from "./DeleteUser.js";
import EditUser from "./EditUser.js";

export default function renderData(user, data) {
    const row = document.createElement("div");
    row.classList.add(
      "row",
      "row-users",
      "no-gutters",
      "mb-1",
      "person-row",
      "position-relative"
    );
    row.dataset.userId = user.id;
  
    row.innerHTML = `
      <div class="col-md-1">
        <div class="column-content text-center">
          <h4>${user.id}</h4>
        </div>
      </div>
      <div class="col-md-1">
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
  
      <div id="buttons" class="buttons buttons-user">
        <button class="btn btn-success create-btn">Crete New</button>
        <button class="btn btn-primary edit-btn ">Edit</button>
        <button class="btn btn-danger delete-btn">Delete</button>
      </div>
    `;

    container.addEventListener("click", (e) => {
      targetButtons(e);
    })

    function targetButtons(e) {
      if (!e.target) return;
    
      if (e.target.classList.contains("btn-success")) {
        CreateUser();
      } else if (e.target.classList.contains("btn-primary")) {
        const row = e.target.closest(".person-row");
        const userId = row.dataset.userId;
        EditUser(userId, data);
      } else if (e.target.classList.contains("delete-btn")) {
        DeleteUser(e);
      }
    }
  
    row.addEventListener("mouseenter", () => {
      const buttons = row.querySelector(".buttons-user");
      buttons.style.display = "flex";
    });
  
    row.addEventListener("mouseleave", () => {
      const buttons = row.querySelector(".buttons-user");
      buttons.style.display = "none";
    });
  
    container.appendChild(row);
  };

  