import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner";

const VerCliente = () => {

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

        cargando ? <Spinner /> : 
        Object.keys(cliente).length === 0 ? 
        <h1 className="font-black text-4xl text-blue-900">No hay resultados</h1>: 
        (

            <div>
                <h1 className="font-black text-4xl text-blue-900">Ver Cliente: {cliente.nombre}</h1>
                <p className="mt-3">Información del cliente</p>


                <p className="text-2xl mt-10 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Cliente: </span>
                    {cliente.nombre}
                </p>

                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Email: </span>
                    {cliente.email}
                </p>

                {cliente.telefono && (<p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Telefono: </span>
                    {cliente.telefono}
                </p>)}

                <p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Empresa: </span>
                    {cliente.empresa}
                </p>

                
                {cliente.notas && (<p className="text-2xl mt-4 text-gray-600">
                    <span className="text-gray-800 uppercase font-bold">Notas: </span>
                    {cliente.notas}
                </p>)}
            </div>
        )
    )
}

export default VerCliente