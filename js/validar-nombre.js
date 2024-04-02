window.onload = function() {
    document.getElementById("nombre").addEventListener("input", function() {
        var nombreInput = document.getElementById("nombre").value; //TOMA EL VALOR DEL INPUT
        var regex = /^[A-Za-z\s]+$/; //EXPRESIÓN REGULAR
        if (!regex.test(nombreInput)) { //COMPARA LA EXPRESION CON EL VALOR DEL INPUT
            alert("El nombre no puede contener Números ni Caracteres Especiales");
            document.getElementById("nombre").value = "";//LIMPIA EL INPUT
        }
    });
}