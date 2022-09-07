//Common Js
document.querySelectorAll('.watch-control, .controls a').forEach(control => control.addEventListener('click', e => {
    e.preventDefault();
}))
//END COMMON JS

//Cube
let x = 0;
let y = 20; //INICIAMOS LOS GRADOS EN 0
let z = 0;
let bool = true
let interval;

const cube = document.querySelector('.cube') //SELECCIONAMOS EL ELEMENTO QUE QUEREMOS QUE SE MUEVA
//EN UNA VARIABLE ALMECANOMOS EL TIEMPO QUE VA A ESTAR GIRANDO NUESTRO OBJETOS
const playPause = () => {
    //ESTO NOS VA A AYUDAR A QUE CUANDO HAGAMOS HOVER SOBRE EL BOTON, EL MOVIMIENTO DE LA CAJA SE DETENGA
    if(bool){
      interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)` //NUESTRO ELEMENTO VA A IR INCREMENTANDO SU GIRO EN EL EJE Y, INCREMENTANDO EN +1 GRADOS CADA 100 MILISEGUNDOS
         },100)
    }else{
        clearInterval(interval)
    }
    
}

playPause()

document.querySelector('.controls').addEventListener('mouseover', () =>{
    bool = false;
    playPause()
})

document.querySelector('.controls').addEventListener('mouseout', () =>{
    bool = true;
    playPause()
})
//END CUBE




//SELECCIONAMOS EL ICONO QUE QUEREMOS QUE SE MUEVA HACIA LA DIRECCION QUE QUEREMOS
//Y LE AGREGAMOS EL EVNTO CLICK, ESTO HARA QUE CADA VEZ QUE SE LE CLICK AL BOTON QUE QUEREMOS..
document.querySelector('.top-x-control').addEventListener('click', () => {
    //..SE VAYA ROTANDO LA FIGURA  INCREMENTANDO O DEJANDO EN 0 CIERTOS EJES
    cube.style.transform = `rotateX(${x+=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})


document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x-=20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y-=20}deg) rotateZ(${z}deg)`
})

document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y+=20}deg) rotateZ(${z}deg)`
})

document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20}deg)`
})

document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20}deg)`
})



const slideShow = document.querySelector('.slideshow');
//SlideShow

//NECESITAMOS CREAR ELEMNTOS DIV QUE VAN A CONTENER CADA UNA DE LAS BACKGROUND IMAGES
const slideshowDivs = () =>{

    for(let i = 1; i<=5; i++ ){//TENEMOS QUE CREAR UN CICLO FOR PARA PODER CREAR LOS 5 DIVS QUE VAMOS A NECSITAR
        //CREARA 5 DIVS DE ACUERDO A NUESTRO CICLO FOR
        const div = document.createElement('div')
        //CADA VES QUE SE VAYA EJECUTANDO EL CICLO FOR VA A CREAR UN DIV Y ESTE CONTENDRA
        //UNA IMAGEN, ESA IMAGEN SERA CORRESPONDIENTE AL NUMERO DE DIV QUE SE ESTE CREANDO
        div.style.backgroundImage = `
        url(img/section-1-bg-${i}.jpg)
        `
       i === 1 && div.classList.add('change') //TENEMOS QUE DECIRLE QUE SI LA i se encuentra en la posiciion 1 (que es la imagen), entonces
       //al primer div agregale la clase 'change'
       
        slideShow.appendChild(div);//SE VAN A ALMACENAR TODOS ESTOS DIVS DENTRO DEL PADRE, '.SLIDESHOW'
       // document.querySelector('slideshow').appendChild(div)
    }
}

slideshowDivs()
//END SLIDESHOW

//QUEREMOS AGREGAR UN INTERVALO DE TIEMPO PARA QUE LA CLASE '.change' se vaya quitando y agregando a cada imagen despues de cierto tiempo
//PRIMERO SELECCIONAMOS LOS DIV QUE CONTIENEN LAS IMAGENES
const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    //EN ESTE INTERVALO DE TIEMPO LO QUE VA A HACER ES...
    setInterval(() => {
        a++
        //SELECCIONAR EL ELEMENTO QUE TENGA LA CLASE '.change'
        const div = document.querySelector('.slideshow .change')
      //UNA VEZ QUE SE UBIQUE AL ELEMENTO QUE TENGA LA CLASE CHANGE ESTA SE LE VA A REMOVER DESPUES DE 1 SEGUNDO
       div.classList.remove('change')
      //DESPUES DE QUE SE LE REMOVIO LA CLASE '.change' al siguiente elemento se le va a agregar la clase '.change'
       if(a < divs.length){
        div.nextElementSibling.classList.add('change')
       }else{
           divs[0].classList.add('change')
           a = 1
       }
      //TODO ESTO SE VA A REPETIR DESPUES DE CADA 1segundo
       
    }, 10000)
}

slideshow()

//SECTION3
//tenemos que hacer que la section 3 tenga un efeto de carga
const section3 = document.querySelector('.section-3-content');
//CON EL EVENTO SCROLL 
window.addEventListener('scroll', () => {
    //HACEMOS QUE SE EJECUTE SOLO SI EL WIDTH DE TODA LA PAGINA + EL HAIGHT DE TODA LA PAGINA ES MAYOR O IGUAL
    //A LA ALTURA QUE TOMA LA SECTION3 + EL WIDTH DE LA SECTION 3
    //SI ES ASI ENTONCES CADDA VEZ QUE LLEGUEMOS A LA ALTURA DE LA SECTION3 SE HARA LO QUE QUERAMOS
    if(window.pageYOffset + window.innerHeight >= section3.offsetTop + section3.offsetHeight / 2){
     // console.log('Scrolle')
     section3.classList.add('change')
    }
})
//END SECTION3

//Section 4
//DARLE FUNCIONALIDAD A LOS BOTONES PARA QUE LOS RELOJS COINCIDAN CON SU CORREA
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0; //DIRECCION DE LOS OBJETOS O IMAGENES EN ELEJE VERTICAL 
let axisX = 0; //DIRECCION DE LOS OBJETOS O IMAGENES EN ELEJE VERTICAL

//NECECITAMOS SABER CUANDO LA IMAGEN APARECE LA ULTIMA IMAGEN PARA QUE EL USUSARIO YA NO PUEDA SEGUIR DANDO CLICK EN ESA DIRECCION
const hideControl = () =>{
    //SI LA ULTIMA IMAGEN LLEGA A -280PX
    if(axisY === -280){
        //ENTONCES AL BOTON DONDE SE ESTE DANDO CLICK SE LE AGRGARA LA CLASE 'hideControl' Y LO QUE HARA ES DESAPARECER PARA QUE YA NO SE LE PUEDA DAR CLICK
        watchTopControl.classList.add('hideControl')
        //SI NO A LLEGADO A ESA POSICION ENTONCES LA CLASE NO APARECERA EN EL BOTON, POR LO QUE EL USUSARIO PODRA SEGUIR DANDO CLICK
    }else{
        watchTopControl.classList.remove('hideControl')
    }

    if(axisY === 280){
        //ENTONCES AL BOTON DONDE SE ESTE DANDO CLICK SE LE AGRGARA LA CLASE 'hideControl' Y LO QUE HARA ES DESAPARECER PARA QUE YA NO SE LE PUEDA DAR CLICK
        watchBottomControl.classList.add('hideControl')
        //SI NO A LLEGADO A ESA POSICION ENTONCES LA CLASE NO APARECERA EN EL BOTON, POR LO QUE EL USUSARIO PODRA SEGUIR DANDO CLICK
    }else{
        watchBottomControl.classList.remove('hideControl')
    }

    if(axisX === 280){
        //ENTONCES AL BOTON DONDE SE ESTE DANDO CLICK SE LE AGRGARA LA CLASE 'hideControl' Y LO QUE HARA ES DESAPARECER PARA QUE YA NO SE LE PUEDA DAR CLICK
        watchRightControl.classList.add('hideControl')
        //SI NO A LLEGADO A ESA POSICION ENTONCES LA CLASE NO APARECERA EN EL BOTON, POR LO QUE EL USUSARIO PODRA SEGUIR DANDO CLICK
    }else{
        watchRightControl.classList.remove('hideControl')
    }

    if(axisX === -280){
        //ENTONCES AL BOTON DONDE SE ESTE DANDO CLICK SE LE AGRGARA LA CLASE 'hideControl' Y LO QUE HARA ES DESAPARECER PARA QUE YA NO SE LE PUEDA DAR CLICK
        watchLeftControl.classList.add('hideControl')
        //SI NO A LLEGADO A ESA POSICION ENTONCES LA CLASE NO APARECERA EN EL BOTON, POR LO QUE EL USUSARIO PODRA SEGUIR DANDO CLICK
    }else{
        watchLeftControl.classList.remove('hideControl')
    }
}



watchTopControl.addEventListener('click', () => {
    //AL DAR CLICK EN EL BOTON DE ARRIBA EL MARGIN TOP DE watchCases tomara el valor de -70rem e VA a ir incrementando en -70 cada vez que se de click
   watchCases.style.marginTop = `${axisY = axisY - 70}rem` 
   hideControl()
})

watchBottomControl.addEventListener('click', () => {
     //AL DAR CLICK EN EL BOTON DE ABAJO EL MARGIN TOP DE watchCases tomara el valor de +70rem e VA a ir incrementando en +70 cada vez que se de click
    watchCases.style.marginTop = `${axisY = axisY + 70}rem` 
    hideControl()
 })

 watchRightControl.addEventListener('click', () => {
      //AL DAR CLICK EN EL BOTON DE ARRIBA EL MARGIN Right DE watchBandds tomara el valor de 70rem e VA a ir incrementando en +70 cada vez que se de click
    watchBands.style.marginRight = `${axisX = axisX + 70}rem` 
    hideControl()
 }) 

 watchLeftControl.addEventListener('click', () => {
      //AL DAR CLICK EN EL BOTON DE ARRIBA EL MARGIN Right DE watchCases tomara el valor de -70rem e VA a ir incrementando en -70 cada vez que se de click
    watchBands.style.marginRight = `${axisX = axisX - 70}rem` 
    hideControl()
 }) 
//End Section 4