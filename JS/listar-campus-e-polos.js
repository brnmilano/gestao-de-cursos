document.addEventListener("DOMContentLoaded", function () {
  let deleteButtons = document.querySelectorAll(".btn-excluir");

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      console.log("botão de excluir pressionado");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const atualizarBtn = document.getElementById("atualizar-btn");

  atualizarBtn.addEventListener("click", function () {
    let selectedCampus = getSelectedCheckboxes("campus-form");
    let selectedPolos = getSelectedCheckboxes("polos-form");

    console.log("Campus selecionados:", selectedCampus);
    console.log("Polos selecionados:", selectedPolos);
  });

  function getSelectedCheckboxes(formId) {
    const form = document.getElementById(formId);
    const checkboxes = form.querySelectorAll("input[type='checkbox']");
    let selectedValues = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedValues.push(checkbox.value);
      }
    });

    return selectedValues;
  };
});
