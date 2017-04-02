$("#btn_calcular_edad").click(function () {
    (new usuario($('#name').val(), $('#fecha_nacimiento').val())).presentarse();
});

$("#btn_D").click(function () {
    mostrarResultados($('#thing1').text(), 'azul');
});

$("#btn_E").click(function () {
    str = '';
    $(".special").each(function () {
        str += '[ '+this.innerHTML+'] ';
    });
    mostrarResultados(str,'rojo');
});


$("#btn_F").click(function () {
    str = '';
    $("ul li").each(function () {
        str += '[ '+this.innerHTML+'] ';
    });
    mostrarResultados(str,'verde');
});

$("#btn_G").click(function () {
    str = $('#thing1').text();
    $("#languages li").each(function () {
        this.innerHTML=str;
    });
    mostrarResultados(str,'amarillo');
});

$("#btn_H").click(function () {
    str = '';
    $("#languages > li").each(function () {
        str += '[ '+this.innerHTML+'] ';
    });
    mostrarResultados(str,'rosado');
});






