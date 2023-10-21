// Captura o valor selecionado do select Lista de Cursos
const listaDeCursos = document.getElementById("lista-de-cursos");
// Verifica se o select foi selecionado corretamente
if (listaDeCursos) {
  listaDeCursos.addEventListener("change", function () {
    const valorSelecionado = this.value;

    console.log("Opção selecionada:", valorSelecionado);

    // Pega todas as linhas da tabela
    const rows = document.querySelectorAll(".cursos tbody tr");

    rows.forEach(row => {
      // Se a opção "Todos os tipos de cursos" for selecionada, mostra todas as linhas da tabela
      if (valorSelecionado === "todos-os-cursos") {
        row.style.display = "";
      }
      // Verifica se a linha tem o valor selecionado
      else if (row.getAttribute("data-course-type") === valorSelecionado) {
        row.style.display = ""; // mostra a linha correspondente ao que foi selecionado no select
      } else {
        row.style.display = "none"; // Esconde as outras linhas da tabela
      };
    });
  });
};

// Captura o valor botão de Criar Curso
const btnCriarCurso = document.querySelector(".gestao-de-cursos-criar-curso");
// Verifica se o botão foi selecionado corretamente
if (btnCriarCurso) {
  btnCriarCurso.addEventListener("click", function () {
    console.log("BTN Criar Curso - Deverá abrir uma modal");
  });
};

// Funcionalidade do dropdown
function openDropdown(dropdownId) {
  // Primeiro, fecha todos os dropdowns abertos
  const allDropdowns = document.getElementsByClassName("conteudo-dropdown");
  for (let dropdown of allDropdowns) {
    if (dropdown.id !== dropdownId) {
      dropdown.classList.remove("show");
    }
  }

  // Abre e fecha o dropdown que é clicado
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
};

// Captura os valores de cada link dentro do dropdown
document.addEventListener("DOMContentLoaded", function () {
  // Pega todos os dropdowns dentro do html
  const dropdowns = document.querySelectorAll(".conteudo-dropdown");

  // Itera sobre cada dropdown
  dropdowns.forEach(function (dropdown) {
    // Pega os links dentro de um dropdown
    const links = dropdown.querySelectorAll("a");

    // Itera sobre cada link
    links.forEach(function (link) {
      // Adiciona um evento de clique para cada link
      link.addEventListener("click", function (event) {
        // Impede o comportamento padrão do link
        event.preventDefault();

        // Texto do link
        console.log(link.textContent);
      });
    });
  });
});


function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}