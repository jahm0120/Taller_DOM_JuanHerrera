function sumar() {
    let varn1 = parseInt(document.getElementById("num1").value);
    let varn2 = parseInt(document.getElementById("num2").value);
    let suma = varn1 + varn2;
    document.getElementById("resultado1").value = suma;
}

function restar() {
    let varn1 = parseInt(document.getElementById("num1").value);
    let varn2 = parseInt(document.getElementById("num2").value);
    
    document.getElementById("resultado1").value = varn1 - varn2;

}

function multi() {
    let varn1 =  parseInt(document.getElementById("num1").value);
    let varn2 =  parseInt(document.getElementById("num2").value);
    
    document.getElementById("resultado1").value = ` ${varn1 * varn2} `;
}

function divi() {
    let varn1 =  parseInt(document.getElementById("num1").value);
    let varn2 =  parseInt(document.getElementById("num2").value);

    if(varn2===0) {
        alert("No se puede dividir entre 0.");
        return; // Finaloiza el código para no mostrar el resultado de la división
    }
    
    document.getElementById("resultado1").value = ` ${varn1 / varn2} `;     
}



