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
