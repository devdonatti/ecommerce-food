import React from 'react';
import { useForm } from 'react-hook-form';

const Contacto = () => {
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    };

    return (
        <div className='max-w-3xl mx-auto p-6 mt-6 bg-white  rounded-lg'>
            <h2 className='text-2xl font-semibold mb-4 text-yellow-700 text-center'>Contacto</h2>
            <form className='space-y-4' onSubmit={handleSubmit(enviar)}>
                <div>
                    <label className='block text-gray-700 text-sm font-medium mb-1'>Nombre</label>
                    <input 
                        className='w-full border border-gray-300 bg-slate-100 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text" 
                        placeholder='Ingresa tu nombre' 
                        {...register("nombre")} 
                    />
                </div>

                <div>
                    <label className='block text-gray-700 text-sm font-medium mb-1'>Email</label>
                    <input 
                        className='w-full border border-gray-300 bg-slate-100 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="email" 
                        placeholder='Ingresa tu email' 
                        {...register("email")} 
                    />
                </div>

                <div>
                    <label className='block text-gray-700 text-sm font-medium mb-1'>Teléfono</label>
                    <input 
                        className='w-full border border-gray-300 bg-slate-100 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="tel" 
                        placeholder='Ingresa tu teléfono' 
                        {...register("telefono")} 
                    />
                </div>

                <button 
                    className='w-full bg-yellow-500 text-white p-3 rounded-lg shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    type='submit'
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contacto;
