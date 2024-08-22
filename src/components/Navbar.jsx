import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import image from '/logo1.png'; // Ajusta la ruta según la ubicación real de tu imagen


const Navbar = () => {
  return (
    <nav className='bg-yellow-300 flex justify-between p-4 w-full items-center'>
      <a href="/">
        <img className='h-14 object-contain' src={image} alt="Logo" /> {/* Ajusta la clase y tamaño según lo necesario */}
      </a>
      <ul className='flex gap-4 items-center'>
        <li><Link className='text-white hover:underline' to="/productos">Productos</Link></li>
        <li><Link className='text-white hover:underline' to="/productos/burgers">Burgers</Link></li>
        <li><Link className='text-white hover:underline' to="/productos/papas">Papas</Link></li>
        <li><Link className='text-white hover:underline' to="/productos/bebidas">Bebidas</Link></li>
        <li><Link className='text-white hover:underline' to="/nosotros">Nosotros</Link></li>
        <li><Link className='text-white hover:underline' to="/contacto">Contacto</Link></li>
        <li><CartWidget/></li>
      </ul>
    </nav>
  )
}

export default Navbar
