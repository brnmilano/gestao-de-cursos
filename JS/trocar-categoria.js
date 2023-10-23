const selectElement = document.getElementById("trocar-tipo-curso");
const salvarBtn = document.getElementById("salvar-troca");

if (selectElement) {
  salvarBtn.addEventListener("click", function () {
    const selectedValue = selectElement.value;

    if (selectedValue) {
      console.log(`O tipo de curso selecionado é: ${selectedValue}`);
    }
  });
}

