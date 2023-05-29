//variables globales

const btnBotones = document.querySelector('#btnBotones');
const btn = document.querySelector('#btn');
const fondo = document.querySelector('#fondo');

//IIFE (Inmediatly Invoked Function Expression)

(()=>{

    btnBotones.addEventListener('click', agregarBotones);
    btn.addEventListener('click', delegacion);

})();

(()=>{
    const color = localStorage.getItem('colorFondo');
    if (color === null) {
        fondo.className = 'bg-dark';
    }else{
        fondo.className = color;
    }
})();

function delegacion(e){
    e.preventDefault();
    //console.log(e.target.classList[1]);
    const colorBoton =  e.target.classList[1];

    switch(colorBoton){
        case ('btn-primary'):
            //console.log('diste click en primary');
            fondo.className = 'bg-primary'
            localStorage.setItem('colorFondo', "bg-primary");
            break;
            case ('btn-secondary'):
                //console.log('diste click en primary');
                fondo.className = 'bg-secondary'
                localStorage.setItem('colorFondo', "bg-secondary");
                break;
            case ('btn-danger'):
                //console.log('diste click en primary');
                fondo.className = 'bg-danger'
                localStorage.setItem('colorFondo', "bg-danger");
                break;    
            case ('btn-success'):
                //console.log('diste click en primary');
                fondo.className = 'bg-success'
                localStorage.setItem('colorFondo', "bg-success");
                break;   
            case ('btn-warning'):
                //console.log('diste click en primary');
                fondo.className = 'bg-warning'
                localStorage.setItem('colorFondo', "bg-warning");
                break;    
        }
    }
                    
                    function agregarBotones(e){
    e.preventDefault();
    //console.log('diste click en el boton negro');
    btn.innerHTML = `<button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>`;
}

//LocalStorage: guarda cadenas de texto clave => valor
//SET => Guardando
//GET => Obtener

//const nombre = 'Nico';
//localStorage.setItem('nombreUsuario', nombre);

// const nombreLocalStorage = localStorage.getItem('nombreUsuario');
// console.log(nombreLocalStorage);
// localStorage.removeItem('nombreUsuario');