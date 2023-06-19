export default async function DeleteUser(e){
    const row = e.target.closest(".person-row");
    const id = row.querySelector("h4").textContent;

    try {
      const response = await fetch(
        `https://6476838d9233e82dd53a12de.mockapi.io/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Usuario eliminado exitosamente");
        location.reload();
      }
    } catch (error) {
      console.log("Error al eliminar el usuario:", error);
    }
}