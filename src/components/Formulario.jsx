import { Formik, Form, Field } from "formik"

const Formulario = () => {
    return (
        <div className="bg-white mt-10 px-5 py-10 rounded-xl shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar cliente</h1>

            <Formik
                initialValues={{
                    nombre:'',
                    empresa:'',
                    email: '',
                    telefono: '',
                    notas: ''
                }}
            >
                {() => (
                    <Form className="mt-10">
                        <div className="mb-4">
                            <label 
                                htmlFor="nombre"
                                className="text-gray-800"
                            >Nombre:</label>
                            <Field 
                                id='nombre'
                                type='text'
                                className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder='Nombre del Cliente'
                                name='nombre'
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="empresa"
                                className="text-gray-800"
                            >Empresa:</label>
                            <Field 
                                id='empresa'
                                type='text'
                                className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder='Empresa del Cliente'
                                name='empresa'
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="email"
                                className="text-gray-800"
                            >Email:</label>
                            <Field 
                                id='email'
                                type='email'
                                className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder='Email del Cliente'
                                name='email'
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="telefono"
                                className="text-gray-800"
                            >Telefono:</label>
                            <Field 
                                id='telefono'
                                type='tel'
                                className='mt-2 block w-full p-3 bg-gray-100 rounded-md'
                                placeholder='Telefono del Cliente'
                                name='telefono'
                            />
                        </div>

                        <div className="mb-4">
                            <label 
                                htmlFor="notas"
                                className="text-gray-800"
                            >Notas:</label>
                            <Field 
                                as='textarea'
                                id='notas'
                                type='text'
                                className='mt-2 block w-full p-3 bg-gray-100 rounded-md h-40'
                                placeholder='Notas del Cliente'
                                name='notas'
                            />
                        </div>

                        <input 
                            type="submit" 
                            value="Agregar cliente" 
                            className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg rounded-md" />
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default Formulario