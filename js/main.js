const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')

// traigo cada boton 
buttons.forEach(boton => {
    // cuando clickee un boton
    boton.addEventListener('click', () => {
        // almacenamos en una variable el contenido del boton (numero)
        const btnClicked = boton.textContent

        if(boton.id === 'clear'){
            display.textContent = ''
            return;
        }

        if(boton.id === 'undo'){
            // si tenemos un solo caracter en la pantalla vuelve a vaciarse el display
            if( display.textContent.length === 1 || display.textContent === "Error!"){
                display.textContent = ''
            } else{
                // agarro todos los numeros desde la posicion cero, y arrancando desde atras
                display.textContent = display.textContent.slice(0, -1)
            }
            return
        }

        // boton igual
        if( boton.id === "equal" ){

            try {// evaluo un conjunto de strings que tenga op matematicas en un string
                display.textContent = eval(display.textContent)
            } catch {
                display.textContent  = "Error!"
            }
            return
        }
        

        // si el contenido del display es igual a 0..
        if( display.textContent === "" ){
            display.textContent = btnClicked // reemplazo su contenido por el del btn clickeado
        } else{ // caso contrario segui sumandole numeros , concatenandolos
            display.textContent += btnClicked
        }
    })
});



/* function sumar(a,b){
    var a = a.value
    var b = b.value
    var resultado = parseInt(a) + parseInt(b)
    console.log(resultado)
}

sumar(nine, one)


one.addEventListener("click", function() {
    console.log('xd')
}) */