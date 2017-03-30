function mostrarResultados(texto, estilo) {
    $('#mostrarResultado').val(texto);
}

function usuario(nombre, fecha) {
    this.nombre = nombre;
    this.fecha = fecha;
    
    this.presentarse=function(){
        $('#mostrarResultado').val("Hola, mi nombre es "+this.nombre+" y tengo "+calcularEdad()+" años.");
    };
    // Metodo Privado
    function calcularEdad() {
        fecha_hoy = new Date();
        dia = fecha.split('/')[0];
        mes = fecha.split('/')[1];
        ano = fecha.split('/')[2];
        ahora_ano = fecha_hoy.getYear();
        ahora_mes = fecha_hoy.getMonth();
        ahora_dia = fecha_hoy.getDate();
        edad = (ahora_ano + 1900) - ano;

        if (ahora_mes < (mes - 1)) {
            edad--;
        }
        if (((mes - 1) == ahora_mes) && (ahora_dia < dia)) {
            edad--;
        }
        if (edad > 1900) {
            edad -= 1900;
        }
        return edad;
    }
}

