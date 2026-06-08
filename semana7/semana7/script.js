let incidencias = [
    {
        tipo: "Iluminación pública",
        descripcion: "La comunidad reporta que una lámpara del parque no funciona desde hace varios días."
    },
    {
        tipo: "Manejo de residuos",
        descripcion: "Acumulación de basura en la esquina principal debido al incumplimiento de horarios de recolección."
    }
];

// 2. Captura de elementos del DOM
const formulario = document.getElementById('formulario-incidencia');
const contenedor = document.getElementById('contenedor-reportes');

// 3. Función para renderizar las incidencias en la interfaz usando forEach
function mostrarIncidencias() {
    // Limpiar el contenedor para evitar duplicados
    contenedor.innerHTML = "";

    // Recorrer el arreglo e inyectar el HTML de cada elemento
    incidencias.forEach((incidencia) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('reporte-item');
        
        tarjeta.innerHTML = `
            <h3>${incidencia.tipo}</h3>
            <p>${incidencia.descripcion}</p>
        `;
        
        contenedor.appendChild(tarjeta);
    });
}

// 4. Manejar el evento de envío del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores de los inputs
    const tipoValor = document.getElementById('tipo').value;
    const descripcionValor = document.getElementById('descripcion').value;

    // Crear el nuevo objeto estructurado
    const nuevaIncidencia = {
        tipo: tipoValor,
        descripcion: descripcionValor
    };

    // Agregar el nuevo objeto al arreglo de datos usando push
    incidencias.push(nuevaIncidencia);

    // Actualizar la interfaz gráfica
    mostrarIncidencias();

    // Limpiar el formulario para nuevos ingresos
    formulario.reset();
});

// 5. Renderizar los datos iniciales al cargar la página
mostrarIncidencias();