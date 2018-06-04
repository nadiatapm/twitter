window.onload = function() {
    document.getElementById("boton").addEventListener("click", agregar);
}
function agregar(){

    let tareas = document.getElementById('tarea').value;
    document.getElementById('tarea').value ="";
    console.log("agregar");

    let cont = document.getElementById('contenedor');
    //se crean nuevos nodos
    const nuevasTareas = document.createElement('div');
    let textoNuevaTarea = document.createTextNode(tareas);
    let elementoContenedor = document.createElement('span');

    elementoContenedor.appendChild(textoNuevaTarea);
    nuevasTareas.appendChild(elementoContenedor);
    cont.appendChild(nuevasTareas);

    const chck = document.createElement('input');
    chck.type ='checkbox';
    chck.setAttribute('class' , 'check');
    const basura = document.createElement('span');
    basura.classList.add('fas','fa-trash-alt');
    const cora = document.createElement('span');
    cora.classList.add('fas','fa-heart');
    
    nuevasTareas.appendChild(chck);
    nuevasTareas.appendChild(basura);
    nuevasTareas.appendChild(cora);

    chck.addEventListener('click' , function(){
        elementoContenedor.classList.toggle('tachado');
    })
    basura.addEventListener('click' , function(){
        cont.removeChild(nuevasTareas);
    })
    cora.addEventListener('click', function(){
        cora.classList.toggle('red');
    })
    if(tareas == null || tareas.length == 0){
        alert('!Error! Debe ingresar tarea');
    }
   
}







