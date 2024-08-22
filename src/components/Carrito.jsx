import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    };

    return (
        <div className='max-w-4xl mx-auto p-6'>
            <h1 className='text-3xl font-bold text-center text-green-600 mb-6'>Carrito de Compras</h1>

            {carrito.length > 0 ? (
                <div className='space-y-6'>
                    {carrito.map((prod) => (
                        <div className='bg-white shadow-md rounded-lg p-4 flex justify-between items-center' key={prod.id}>
                            <div className='flex flex-col w-1/2'>
                                <h3 className='text-xl font-semibold'>{prod.titulo}</h3>
                                <p className='text-gray-600'>Cantidad: {prod.cantidad}</p>
                                <p className='text-gray-600'>Precio Unitario: ${prod.precio.toFixed(2)}</p>
                                <p className='text-gray-600'>Precio Total: ${ (prod.precio * prod.cantidad).toFixed(2) }</p>
                            </div>
                            <img 
                                src={prod.imagen || 'https://via.placeholder.com/100'} 
                                alt={prod.titulo} 
                                className='w-24 h-24 object-cover rounded-lg ml-4'
                            />
                        </div>
                    ))}
                    <div className='flex justify-between items-center bg-gray-100 p-4 rounded-lg'>
                        <h2 className='text-2xl font-bold'>Precio Total: ${precioTotal().toFixed(2)}</h2>
                        <div className='flex gap-4'>
                            <button 
                                className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition'
                                onClick={handleVaciar}
                            >
                                Vaciar Carrito
                            </button>
                            <Link 
                                to="/checkout" 
                                className='bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition'
                            >
                                Finalizar Compra
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='text-center'>
                    <h2 className='text-xl font-semibold text-gray-600'>El carrito está vacío :(</h2>
                </div>
            )}
        </div>
    );
}

export default Carrito;
