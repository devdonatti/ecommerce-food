import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { FaShoppingCart } from 'react-icons/fa'; // O MdShoppingCart

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className='flex items-center'>
            <Link to="/carrito" className='flex items-center text-white'>
                <FaShoppingCart className='text-white text-2xl' />
                {cantidadEnCarrito() > 0 && (
                    <span className='ml-2 bg-yellow-600 text-white text-xs rounded-full px-2 py-1'>
                        {cantidadEnCarrito()}
                    </span>
                )}
            </Link>
        </div>
    )
}

export default CartWidget;
