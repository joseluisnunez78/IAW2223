/* Mi primer ejercicio con JQuery */
$(document).ready(function () {
    /* Lo que sucede aquí dentro ocurre cuando el documento ha terminado de cargar */
   $("button").click(function(){
        $("h1").css({"background-color":"red", "font-size":"500%", "color":"white", "text-align":"center"});
   });
});