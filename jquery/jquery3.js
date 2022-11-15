/* Tercer ejercicio: Mostrar u ocultar párrafos con efectos e identificadores */

$(function () {
    /* Forma más corta de escribir el ready */
   $("#btn-mostrar").click(function (e) { 
    e.preventDefault();
    $("#parrafo2").fadeIn(5000);
   });
   $("#btn-ocultar").click(function (e) { 
    e.preventDefault();
    $("#parrafo2").fadeOut(5000);
   });
});