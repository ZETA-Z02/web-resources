$(document).ready(function(){
    // Datos de ejemplo (pueden ser datos dinámicos de una API, base de datos, etc.)
    var datos = [
        { nombre: 'Juan', edad: 25 },
        { nombre: 'María', edad: 30 },
        { nombre: 'Pedro', edad: 28 },        
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
    var paginasMostradas = 5; // Número de páginas mostradas en la paginación

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
        var inicio = Math.max(1, paginaActual - Math.floor(paginasMostradas / 2));
        var fin = Math.min(totalPaginas, inicio + paginasMostradas - 1);

        // Botón de página anterior
        if (paginaActual > 1) {
            $('#paginacion').append('<button class="pagina" data-pagina="' + (paginaActual - 1) + '">Anterior</button>');
        }

        // Botones de páginas
        for (var i = inicio; i <= fin; i++) {
            $('#paginacion').append('<button class="pagina ' + (i === paginaActual ? 'activo' : '') + '" data-pagina="' + i + '">' + i + '</button>');
        }

        // Botón de página siguiente
        if (paginaActual < totalPaginas) {
            $('#paginacion').append('<button class="pagina" data-pagina="' + (paginaActual + 1) + '">Siguiente</button>');
        }
    }

    // Mostrar datos iniciales y controles de paginación
    mostrarDatos();
    crearControlesPaginacion();

    // Cambiar de página al hacer clic en un botón de paginación
    $(document).on('click', '.pagina', function() {
        paginaActual = parseInt($(this).data('pagina'));
        mostrarDatos();
        crearControlesPaginacion();
    });
});