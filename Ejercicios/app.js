function tieneVocal(event){

    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    var textoInput = document.getElementById("texto").value;
    var boton = document.getElementById("boton");
    var regex = /[aeiouAEIOU]/;
    var regexNumero = /\d/;

    var tieneNumero = regexNumero.test(textoInput);
    var tieneVocal = regex.test(textoInput);

    if(tieneVocal && tieneNumero){
        alert("OK!");
        boton.textContent = "Correcto";
    }else{
        boton.textContent = "Incorrecto";
    }
}

/*window.onload = function() {
    document.getElementById("texto").addEventListener("input", function() {
        var textoInput = document.getElementById("texto").value;
        var regex = /[aeiouAEIOU]/;
        var tieneVocal = regex.test(textoInput);

        if(tieneVocal){
            alert("OK!")
        }
    });
}*/