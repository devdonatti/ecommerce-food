import React, { useContext, useState } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
    const { carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito)
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
     cantidad > 1 && setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1);
    };

   

    return (
        <div className='border border-gray-300 rounded-lg shadow-lg p-4 m-4 w-60 flex flex-col'>
            <div className='flex justify-center mb-4'>
                <img
                    src={item.imagen}
                    alt={item.titulo}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='flex flex-col flex-grow'>
                <h4 className='text-lg font-semibold mb-2'>{item.titulo}</h4>
                <p className='text-gray-600 mb-1'>${item.precio}</p>
                <p className='text-gray-600 mb-1'>{item.descripcion}</p>
                <ItemCount 
                    cantidad={cantidad} 
                    handleRestar={handleRestar} 
                    handleSumar={handleSumar} 
                    handleAgregar={() => {agregarAlCarrito(item,cantidad)}} 
                />
            </div>
        </div>
    );
};

export default ItemDetail;
