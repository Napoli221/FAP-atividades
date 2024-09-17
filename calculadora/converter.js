function converter () {
    let reais = parseFloat(document.getElementById("reais").value);
    let dolar = parseFloat(document.getElementById("dolar").value);

    let conversao = dolar * reais;

    window.alert(`O valor da conversão é: R$${conversao.toFixed(2)}`)
}