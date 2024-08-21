import React from 'react'
export const ItemCount = ({cantidad,handleRestar,handleSumar,handleAgregar}) => {
    

  return (
    <div className='flex flex-col items-center'>
        <div className='flex items-center'>
        <button onClick={handleRestar} className='bg-slate-300 px-3 py-1 rounded '>-</button>
        <p className='px-3 py-1 mt-0 text-center '>{cantidad}</p>
        <button onClick={handleSumar} className='bg-slate-300 px-3 py-1 rounded'>+</button>
        </div>
            <button onClick={handleAgregar} className='bg-slate-400 px-3 py-1 mt-4 rounded'>Agregar al carrito</button>
        
    </div>
  )
}
