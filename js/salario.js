function calcular () {
    let horas1 = parseFloat(document.getElementById("horas").value);
    let valor1 = parseFloat(document.getElementById("valor").value);
    let salario = horas1 * valor1;

    if (horas1 <= 0) {
        alert("Ingrese un número mayor que cero.");
        return;

    }

    if (valor1 <= 0) {
        alert("Ingrese un número mayor que cero.");
        return;
    }

    document.getElementById("resultado").value = salario.toLocaleString("es-CO");
    

}