import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className='border border-gray-300 rounded-lg shadow-lg p-4 m-4 w-60 flex flex-col'>
            <div className='flex justify-center mb-4'>
                <img
                    src={producto.imagen} alt={producto.titulo}
                    className=' object-cover rounded-t-lg'
                />
            </div>
            <div className='flex flex-col flex-grow'>
                <h4 className='text-lg font-semibold mb-2'>{producto.titulo}</h4>
                <p className='text-gray-600 mb-1'>Precio: ${producto.precio}</p>
                <p className='text-gray-600 mb-1'>Categoría: {producto.categoria}</p>
               
            </div>
            <div className='mt-auto'>
                <Link className='block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors'to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    );
}

export default Item;

