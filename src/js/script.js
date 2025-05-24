var notas = []

function salvarNota() {
    var textarea = document.getElementById("nota");
    var textareaValue = textarea.value;
    if (textareaValue) {
        notas.push(textareaValue);
        carregarNotas();
        textarea.value = null;
    }
}

function carregarNotas() {
    const lista = document.getElementById('listaNotas');
    lista.innerHTML = "";
    notas.forEach((nota) => {
    const li = document.createElement('li');
    li.textContent = nota;
    lista.appendChild(li);
    });
}