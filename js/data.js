document.addEventListener("DOMContentLoaded", (e) => {
  let elementoData = document.getElementById("data");
  elementoData.innerText = localStorage.getItem("valor")
});