// PAGINACION CON JQUERY->> PARA DATOS PEQUENOS
$(document).ready(function(){
    // Datos de ejemplo (pueden ser datos dinámicos de una API, base de datos, etc.)
    var datos = [
        { nombre: 'Juan', edad: 25 },
        { nombre: 'María', edad: 30 },
        { nombre: 'Pedro', edad: 28 },
        { nombre: 'Ana', edad: 35 },
        { nombre: 'Luis', edad: 40 },
        // Agrega más datos según sea necesario
    ];

    // Configuración de paginación
    var registrosPorPagina = 2;
    var paginaActual = 1;

    // Función para mostrar los datos en la tabla
    function mostrarDatos() {
        var inicio = (paginaActual - 1) * registrosPorPagina;
        var fin = inicio + registrosPorPagina;
        var datosPagina = datos.slice(inicio, fin);

        $('#tabla-body').empty();
        $.each(datosPagina, function(index, dato) {
            $('#tabla-body').append('<tr><td>' + dato.nombre + '</td><td>' + dato.edad + '</td></tr>');
        });
    }

    // Función para crear controles de paginación
    function crearControlesPaginacion() {
        var totalPaginas = Math.ceil(datos.length / registrosPorPagina);
        $('#paginacion').empty();
        for (var i = 1; i <= totalPaginas; i++) {
            $('#paginacion').append('<button class="pagina" data-pagina="' + i + '">' + i + '</button>');
        }
    }

    // Mostrar datos iniciales y controles de paginación
    mostrarDatos();
    crearControlesPaginacion();

    // Cambiar de página al hacer clic en un botón de paginación
    $(document).on('click', '.pagina', function() {
        paginaActual = $(this).data('pagina');
        mostrarDatos();
    });
});
