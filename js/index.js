document.addEventListener("DOMContentLoaded", (e) => {
  let boton = document.getElementById("buttonText");
  boton.addEventListener("click", (e) => {
    let input = document.getElementById("inputText");
    let valorAGuardar = input.value
    localStorage.setItem("valor", valorAGuardar);
  });
});