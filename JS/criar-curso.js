document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-criar-curso");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!this.checkValidity()) {
        alert('Esse campo é obrigatório.');

        return;
      }

      const inputs = this.elements;

      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        if (input.type === "checkbox") {
          console.log(input.name, input.checked);
        } else if (input.type !== "submit") {
          console.log(input.name, input.value);
        };
      };
    });
  };
});