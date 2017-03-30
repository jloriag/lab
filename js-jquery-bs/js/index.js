$("#btn_calcular_edad").click(function() {
 (new usuario($('#name').val(),$('#fecha_nacimiento').val())).presentarse();
});
