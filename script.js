function generate(type){

let loading=document.getElementById("loading");

loading.style.display="block";


if(type==="model"){
loading.innerHTML="🤖 Analizando descripción... Generando modelo...";
}

if(type==="texture"){
loading.innerHTML="🎨 Creando textura pixel art...";
}

if(type==="pixel"){
loading.innerHTML="🖌️ Creando pixel art...";
}

if(type==="image"){
loading.innerHTML="🧠 Analizando imagen y creando modelo...";
}


setTimeout(()=>{

loading.innerHTML=
"✅ Creación terminada. Archivo preparado para descargar.";

},3000);

}


function downloadFake(){

alert(
"🚀 Descarga simulada.\n\nLa API de IA será conectada próximamente."
);

}


function start3DViewer(){

const container = document.getElementById("viewer3d");

if(!container) return;


// Escena
const scene = new THREE.Scene();


// Cámara
const camera = new THREE.PerspectiveCamera(
45,
container.clientWidth / container.clientHeight,
0.1,
1000
);


// Render
const renderer = new THREE.WebGLRenderer({
antialias:true
});


renderer.setSize(
container.clientWidth,
container.clientHeight
);


container.innerHTML="";

container.appendChild(renderer.domElement);


// Luz

const light = new THREE.DirectionalLight(
0xffffff,
2
);

light.position.set(5,5,5);

scene.add(light);


// Modelo temporal cubo Minecraft

const geometry =
new THREE.BoxGeometry(2,2,2);


const material =
new THREE.MeshStandardMaterial({
color:0x00ff88
});


const cube =
new THREE.Mesh(
geometry,
material
);


scene.add(cube);



camera.position.z=5;



function animate(){

requestAnimationFrame(animate);

cube.rotation.y+=0.01;

renderer.render(
scene,
camera
);

}


animate();

}


window.onload=start3DViewer;
