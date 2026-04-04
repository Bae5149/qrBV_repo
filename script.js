// Mapa de modelos: cada nombre de modelo apunta a su archivo GLB
const modelos = {
    'cubo': 'modelos/cuerpo1.glb'
};

// Obtener el modelo desde la URL 
function obtenerModeloDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    const modelo = params.get('modelo');
    
    // Si el modelo existe en el mapa, lo devuelve. Si no, devuelve 'cubo' por defecto
    if (modelo && modelos[modelo]) {
        return modelo;
    }
    return 'cubo'; // modelo por defecto
}

// Cargar el modelo en el visor
function cargarModelo() {
    const modeloId = obtenerModeloDesdeURL();
    const rutaGLB = modelos[modeloId];
    const visor = document.getElementById('visor3d');
    
    if (visor && rutaGLB) {
        visor.setAttribute('src', rutaGLB);
        console.log(Cargando modelo: ${modeloId} -> ${rutaGLB});
    } else {
        console.error('Error: No se pudo cargar el modelo');
    }
}

// ========== INICIALIZACIÓN ==========
// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Configurar el visor con el modelo correcto
    cargarModelo();
    
    // Agregar el evento de progreso (tu código original)
    const visor = document.querySelector('model-viewer');
    if (visor) {
        visor.addEventListener('progress', onProgress);
    }
});