import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Formulario from "../components/Formulario"

const EditarCliente = () => {

  const [cliente, setCliente] = useState({})
    const {id} = useParams()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const obtenerCliente = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado);
              } catch (error) {
                console.log(error);
              }
            setCargando(!cargando)
        }
        obtenerCliente()
    }, [])

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">Utiliza este formulario para editar los datos del cliente</p>
     
     {cliente?.nombre ? (
        <Formulario 
          cliente={cliente}
          cargando={cargando}
        /> 
        ) : <p>Cliente ID no encontrado</p>
      } 
    </>
  )
}

export default EditarCliente