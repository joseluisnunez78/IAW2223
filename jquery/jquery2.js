/* Segundo ejercicio: Mostrar u ocultar párrafos */

$(function () {
    /* Forma más corta de escribir el ready */
   $("#btn-mostrar").click(function (e) { 
    e.preventDefault();
    $("p").show();
   });
   $("#btn-ocultar").click(function (e) { 
    e.preventDefault();
    $("p").hide();
   });
});