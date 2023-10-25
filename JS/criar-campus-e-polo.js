document.addEventListener('DOMContentLoaded', function () {
  const btnCriarCampus = document.querySelector('.criar-campus-conteudo .btn-criar-campus');
  const btnCriarPolo = document.querySelector('.criar-polo-conteudo .btn-criar-polo');

  const inputNomeCampus = document.getElementById('criar-campus-nome');
  const inputNomePolo = document.getElementById('criar-polo-nome');

  btnCriarCampus.addEventListener('click', function () {
    const valor = inputNomeCampus.value;

    console.log(`Nome do Câmpus: ${valor}`);
  });

  btnCriarPolo.addEventListener('click', function () {
    const valor = inputNomePolo.value;

    console.log(`Nome do Polo: ${valor}`);
  });
});