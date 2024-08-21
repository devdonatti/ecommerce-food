import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
   <nav className='bg-slate-500 flex justify-between  p-4 w-full'>
    <a href="#"><h1 className='text-white'>LogoFood</h1></a>
    <ul className='flex gap-4'>
        <li><Link className='' to="/productos">Productos</Link></li>
        <li><Link className='' to="/productos/burgers">Burgers</Link></li>
        <li><Link className='' to="/productos/papas">Papas</Link></li>
        <li><Link className='' to="/productos/bebidas">Bebidas</Link></li>
        <li><Link className='' to="/nosotros">Nosotros</Link></li>
        <li><Link className='' to="/contacto">Contacto</Link></li>
        <li><CartWidget/></li>
    </ul>

   </nav>
  )
}

export default Navbar