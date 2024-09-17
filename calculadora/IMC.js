function calculadora() {
    let altura=document.getElementById("altura").value / 100;
    let peso=document.getElementById("peso").value;

    let imc= peso / altura ** 2;
    if (imc <18.5) {
        window.alert("Voce esta magro!")
    } else if (imc <24.8) {
        window.alert("Voce esta normal")
    } else if (imc <29.9) {
        window.alert("Voce esta com sobrepeso")
    } else if  (imc <39.9) {
        window.alert("Voce está obeso")
    } else if (imc >39.9) [
        window.alert("Voce esta com obesidade morbida")
    ]

    
}


