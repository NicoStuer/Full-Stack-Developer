import {useState} from 'react'

const Conversor = () => {

    const [conversor, setConversor] = useState(0)

    const convertir = (e) => {
        let monto = e.target.value
        let cotizar = monto * 487
        setConversor(cotizar)
    }

  return (
    <div>
      <input type='text' onChange={convertir} placeholder='Ingrese pesos'/>
      <h1>Su Monto en pesos {conversor}</h1>
    </div>
  )
}

export default Conversor
