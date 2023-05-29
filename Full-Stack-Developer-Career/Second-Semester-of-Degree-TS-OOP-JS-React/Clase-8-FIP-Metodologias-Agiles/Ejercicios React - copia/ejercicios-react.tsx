// Ejercicios - En Clase
// Ejercicio 1: Exporta el componente
// • Este ejemplo interactivo no funciona porque el componente raíz no está exportado: (Intenta arreglarlo)

export default function Profile() {
    return (
        <img
        src="http://i.imgur.com/LICfvbD.jpg"
        alt="Aklilu Lemma"
        />
    )
}

// Ejercicios - En Clase
// • Ejercicio 2: Arregla la sentencia de retorno
// • Este return no se ve muy bien, lo podes arreglar?

export default function Profile2() {
    return (
        <img
        src="http://i.imgur.com/jA8hHMpm.jpg"
        alt="Katsuko Saruhashi"
        />
    )
}

// Ejercicios - En Clase
// Ejercicio 3: Detectar el
// error

function Profile2() {
    return (
        <img
        src="http://i.imgur.com/jA8hHMpm.jpg"
        alt="Katsuko Saruhashi"
        />
    )
}
//let app=
export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile2/>
            <Profile2/>
            <Profile2/>
        </section>
    )
}

// Ejercicios - En Clase
// Ejercicio 4: Crear tu propio componente
// Escribe un componente desde cero. Podes darle cualquier nombre valido y retornar cualquier marcado

function Card() {
    return(
        <div>
            <img>
            src="http://imagen"
            alt="imagen random"
            </img>
            <h1>Nombre</h1>
            <p>Descripcion</p>
        </div>
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Imgenes</h1>
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}