function mostrarResultados(texto, estilo) {
    $('#mostrarResultado').val(texto);
}

function usuario(nombre, fecha) {
    this.nombre = nombre;
    this.fecha = fecha;

    // Metodo Privado
    function calcularEdad() {
        fecha_hoy = new Date();
        dia = this.fecha.split('-')[0];
        mes = this.fecha.split('-')[1];
        ano = this.fecha.split('-')[2];
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