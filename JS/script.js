//DOMContentLoaded garante que o script seja executado depois que a página for completamente carregada.

// Captura o valor selecionado do select Lista de Cursos
const listaDeCursos = document.getElementById("lista-de-cursos");

if (listaDeCursos) {
  listaDeCursos.addEventListener("change", function () {
    const valorSelecionado = this.value;
    console.log("Opção selecionada:", valorSelecionado);

    const rows = document.querySelectorAll(".cursos tbody tr");

    rows.forEach(row => {
      if (valorSelecionado === "todos-os-cursos") {
        row.style.display = "";
      }
      else if (row.getAttribute("data-course-type") === valorSelecionado) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

// Funcionalidade do dropdown que fecha e depois abre o dropdown
function openDropdown(dropdownId) {
  const allDropdowns = document.getElementsByClassName("conteudo-dropdown");
  for (let dropdown of allDropdowns) {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.remove("show");
    }
  }
  document.getElementById(dropdownId).classList.toggle("show");
}

// Funcionalidade para identificar se existe algum dropdown selecionado
// Caso exista algum dropdown selecionado, ele fecha todos os outros
window.onclick = function (event) {
  if (!event.target.matches(".btn-do-dropdown") && !event.target.matches(".fas")) {
    const dropdowns = document.getElementsByClassName("conteudo-dropdown");
    for (let openDropdown of dropdowns) {
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }

  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Captura os valores de cada link dentro do dropdown
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

let modal = document.getElementById("modal-exclusao");
let cursoParaExcluir = document.getElementById("curso-para-excluir");
let modalClose = document.getElementsByClassName("modal-close")[0];
let cancelarExclusao = document.getElementById("cancelar-exclusao");
let confirmarExclusao = document.getElementById("confirmar-exclusao");

// Abre a modal quando clicar em Excluir
document.querySelectorAll('.conteudo-dropdown a[href="#excluir"]').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    cursoParaExcluir.textContent = e.target.closest('tr').querySelector('.lista-de-cursos-nome-do-curso').textContent;
    modal.style.display = "block";
  });
});

if (modalClose) {
  modalClose.onclick = function () {
    modal.style.display = "none";
  }
}

if (cancelarExclusao) {
  cancelarExclusao.onclick = function () {
    modal.style.display = "none";
  }
}

if (confirmarExclusao) {
  confirmarExclusao.onclick = function () {
    modal.style.display = "none";
  }
}