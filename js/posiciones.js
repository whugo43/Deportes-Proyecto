

/*
- Listener: Al terminar la carga de la página

Agregar la redirección el contenido a wikipedia: https://es.wikipedia.org/wiki/Asesinato_en_el_Orient_Express
al evento click del botón "Ver página de wikipedia"
*/

/*
- Listener: Al terminar la carga de la página

Agregar el contenido del archivo horarios.js
*/

/*
- Como atributo de una etiqueta

Al pasar el mouse sobre el contenido, 
mostrar la cantidad de puestos disponibles 
en el archivo puestos.xml

Cambiar la visibilidad de la tabla 
*/
var http_request = false;

function makeRequest(url) {


    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/plain');
             http_request.overrideMimeType('text/xml');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send(null);

}

function alertContents() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            /*Aquí deben procesar el JSON y mostrar la respuesta en el HTML*/
           
         LeerPosicionJSON();;
          
        } 
    }
}

window.onload = function() {
var link = document.getElementById('posicion');
link.onclick = function() {

    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            /*Aquí deben procesar el JSON y mostrar la respuesta en el HTML*/
           
         LeerPosicion1JSON();;
          
        } else {
            alert('Hubo problemas con la petición.');
        }
    
}

}
makeRequest('   ');
}

function LeerPosicion1JSON(){
    if (window.XMLHttpRequest){
        JSONhttp = new XMLHttpRequest();
    }
    else{
        JSONhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    JSONhttp.open('GET', "data/posicion.js");
    JSONhttp.responseType = 'json';
    JSONhttp.send();
    JSONhttp.onload = function() {
        var posicion = JSONhttp.response;
      
        console.log(posicion);
        
    }
}
function LeerPosicionJSON(){
    if (window.XMLHttpRequest){
        JSONhttp = new XMLHttpRequest();
    }
    else{
        JSONhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    JSONhttp.open('GET', "data/posicion.js");
    JSONhttp.responseType = 'json';
    JSONhttp.send();
    JSONhttp.onload = function() {
        var posicion = JSONhttp.response;
       imprimirPosicion(posicion);
        console.log(posicion);
        
    }
}
function imprimirPosicion(jsonObj){
    var cont = 1;
var tbody = document.getElementById("cuerpotabla-posiciones");
Object.keys(jsonObj).map(clave =>{

    var newTr = document.createElement("tr");
  
   
   

    var posicion=document.createElement("th");
     posicion.setAttribute("scope","row");
    posicion.appendChild(document.createTextNode(jsonObj[clave].posicion));

    var equipo = document.createElement("td");
    equipo.appendChild(document.createTextNode(jsonObj[clave].equipo));

    var punto = document.createElement("td");
    punto.appendChild(document.createTextNode(jsonObj[clave].punto));

    var partjugado = document.createElement("td");
    partjugado.appendChild(document.createTextNode(jsonObj[clave].partjugado));
    var ganado = document.createElement("td");
    ganado.appendChild(document.createTextNode(jsonObj[clave].ganado));

    var empatado = document.createElement("td");
    empatado.appendChild(document.createTextNode(jsonObj[clave].empatado));

    var perdido = document.createElement("td");
    perdido.appendChild(document.createTextNode(jsonObj[clave].perdido));

    var golfavor = document.createElement("td");
    golfavor.appendChild(document.createTextNode(jsonObj[clave].golfavor));

    var golcontra = document.createElement("td");
    golcontra.appendChild(document.createTextNode(jsonObj[clave].golcontra));

    var goldiferencia = document.createElement("td");
    goldiferencia.appendChild(document.createTextNode(jsonObj[clave].goldiferencia));
    
    newTr.appendChild(posicion);
    newTr.appendChild(equipo);
    newTr.appendChild(punto);
    newTr.appendChild(partjugado);
    newTr.appendChild(ganado);
    newTr.appendChild(empatado);
    newTr.appendChild(perdido);
    newTr.appendChild(golfavor);
    newTr.appendChild(golcontra);
    newTr.appendChild(goldiferencia);
    tbody.appendChild(newTr);
   
    cont = cont + 1 ;
})
}
