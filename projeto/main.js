
const formulario = document.getElementById("calcForm");
const listaItens = document.getElementById("listaItens");
const subtotalElemento = document.getElementById("subtotal");
const descontoElemento = document.getElementById("valorDesconto");
const resultadoElemento = document.getElementById("resultado");
const botaoDesconto = document.getElementById("calcularDesconto");

let subtotal = 0;

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const produto = document.getElementById("produto").value;
    const quantidade = Number(document.getElementById("quantidade").value);
    const preco = Number(document.getElementById("preco").value);

    const totalItem = quantidade * preco;

    subtotal = subtotal + totalItem;

    const item = document.createElement("li");

    item.textContent = produto + " - " +
        quantidade + " x R$ " +
        preco.toFixed(2) + " = R$ " +
        totalItem.toFixed(2);

    listaItens.appendChild(item);

    subtotalElemento.textContent = subtotal.toFixed(2);
    resultadoElemento.textContent = subtotal.toFixed(2);

    formulario.reset();
});

botaoDesconto.addEventListener("click", function() {
    const desconto = Number(document.getElementById("desconto").value);

    const valorDesconto = subtotal * (desconto / 100);
    const totalFinal = subtotal - valorDesconto;

    descontoElemento.textContent = valorDesconto.toFixed(2);
    resultadoElemento.textContent = totalFinal.toFixed(2);
});
