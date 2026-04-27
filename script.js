document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
    
    const formulario = document.getElementById("formulario");
    formulario.reset();
});