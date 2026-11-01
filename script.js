// Mapa de modelos: cada nombre de modelo apunta a su archivo GLB
const modelos = {
    'cuerpo_1_prueba': 'modelos/cuerpo_1_prueba/modelo.glb',
    'cubo': 'modelos/cubo1.glb',
    'prisma_base_cuadrada': 'modelos/prisma_baseCuadrada1.glb',
    'prisma_extruido': 'modelos/cuerpo3.glb',
    'prisma_prueba': 'modelos/prisma_baseCuadrada1_pintado/modelo.glb'
};

// Obtener el modelo desde la URL 
function obtenerModeloDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    const modelo = params.get('modelo');
    return (modelo && modelos[modelo]) ? modelo : 'cubo';
}

function cargarModelo() {
    const visor = document.getElementById('visor3d');
    if(visor){
	     visor.setAttribute('src', modelos[obtenerModeloDesdeURL()]);	
    }
}

document.addEventListener('DOMContentLoaded', cargarModelo);