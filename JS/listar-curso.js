function openDropdown(dropdownId) {
  const allDropdowns = document.getElementsByClassName("conteudo-dropdown");

  for (let dropdown of allDropdowns) {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.remove("show");
    }
  }
  document.getElementById(dropdownId).classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".btn-do-dropdown") && !event.target.matches(".fas")) {
    const dropdowns = document.getElementsByClassName("conteudo-dropdown");

    for (let openDropdown of dropdowns) {
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".conteudo-dropdown");

  dropdowns.forEach(function (dropdown) {
    const links = dropdown.querySelectorAll("a");

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        console.log(link.textContent);
      });
    });
  });
});

function filtrarCursos() {
  const filtro = document.getElementById("lista-de-tipos-de-cursos").value;
  const linhas = document.querySelectorAll(".gestao-de-cursos-tabela-campus tbody tr");

  linhas.forEach(row => {
    if (filtro === "todos-os-cursos") {
      row.style.display = "";
      return;
    }

    const colunaCurso = row.querySelector("td:nth-child(3)");
    if (colunaCurso && colunaCurso.textContent.trim() === filtro) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
