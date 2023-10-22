document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-criar-campus");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dataInicioElement = document.getElementById('data-inicio');
    const dataTerminoElement = document.getElementById('data-termino');
    const dataInicioErrorElement = document.getElementById('data-inicio-error');
    const dataTerminoErrorElement = document.getElementById('data-termino-error');

    dataInicioErrorElement.textContent = '';
    dataTerminoErrorElement.textContent = '';

    const dataInicio = new Date(dataInicioElement.value);
    const dataTermino = new Date(dataTerminoElement.value);

    if (dataInicio > dataTermino) {
      dataTerminoErrorElement.textContent = 'A data de término não pode ser anterior à data de início';
      dataTerminoErrorElement.style.display = 'block';
      return;
    }

    const formData = new FormData(form);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log(formObject);

    fetch('www.google.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    })
      .then(response => response.json())
      .then(data => { })
      .catch(error => { });
  });
});
