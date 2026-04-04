// Mapa de modelos: cada nombre de modelo apunta a su archivo GLB
const modelos = {
    'cubo': 'modelos/cuerpo1.glb',
    'cubo_perforado': 'modelos/cuerpo2.glb'
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