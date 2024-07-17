// para que funcione solo como ejemplo

let rec;
    if (!("webkitSpeechRecognition" in window)) {
    	alert("disculpas, no puedes usar la API");
    } else {
    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-AR";
    	rec.continuous = true;
    	rec.interim = true;
    	rec.addEventListener("result",iniciar);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
         document.getElementById('texto').innerHTML = event.results[i][0].transcript;
	}
}


rec.start();
// ESTO ES PARA PHP

// let rec;
// if (!("webkitSpeechRecognition" in window)) {
//   alert("disculpas, no puedes usar la API");
// } else {
//   rec = new webkitSpeechRecognition();
//   rec.lang = "es-PE";
//   rec.continuous = true;
//   rec.interim = true;
//   rec.addEventListener("result", iniciar);
// }
// function iniciar(event) {
//   for (let i = event.resultIndex; i < event.results.length; i++) {
// 	const campoBuscar = event.results[i][0].transcript;
// 	$.ajax({
// 		type: "POST",
// 		url: "http://localhost/archivo/model/listadonotarios.model.php",
// 		data: {"campo":campoBuscar},
// 		success: function (response) {
// 			console.log("llego los datos correctamente")
// 		}
// 	});
//     console.log(event.results[i][0].transcript);
//     document.getElementById("texto").innerHTML = event.results[i][0].transcript;
//   }
// }

// rec.start();
