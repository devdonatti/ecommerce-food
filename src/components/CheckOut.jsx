import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = async (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        try {
            const pedidosRef = collection(db, "pedidos");
            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.error("Error al realizar la compra:", error);
        }
    };

    if (pedidoId) {
        return (
            <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6'>
                <h1 className='text-2xl font-semibold mb-4 text-green-600'>¡Muchas gracias por tu compra!</h1>
                <p className='text-lg'>Tu número de pedido es: <span className='font-bold'>{pedidoId}</span></p>
            </div>
        );
    }

    return (
        <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6'>
            <h1 className='text-2xl font-semibold mb-6 text-gray-800'>Finalizar Compra</h1>
            <form className='space-y-4' onSubmit={handleSubmit(comprar)}>
                <div>
                    <label className='block text-gray-700 text-sm font-medium mb-2'>Nombre</label>
                    <input 
                        className='w-full border border-gray-300 bg-slate-100 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text" 
                        placeholder='Ingresa tu nombre' 
                        {...register("nombre")} 
                    />
                </div>
                <div>
                    <label className='block text-gray-700 text-sm font-medium mb-2'>Email</label>
                    <input 
                        className='w-full border border-gray-300 bg-slate-100 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="email" 
                        placeholder='Ingresa tu email' 
                        {...register("email")} 
                    />
                </div>
                <div>
                    <label className='block text-gray-700 text-sm font-medium mb-2'>Teléfono</label>
                    <input 
                        className='w-full border border-gray-300 bg-slate-100 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="tel" 
                        placeholder='Ingresa tu teléfono' 
                        {...register("telefono")} 
                    />
                </div>
                <button 
                    className='w-full bg-blue-500 text-white p-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    type='submit'
                >
                    Comprar
                </button>
            </form>
        </div>
    );
};

export default CheckOut;
