import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CheckOut = () => {

    const [pedidoId,setPedidoId] = useState("")

    const { carrito,precioTotal,vaciarCarrito } = useContext(CartContext);

    const {register,handleSubmit}= useForm()

    const comprar = (data) => {
        const pedido = {
        cliente:data ,
        productos: carrito,
        total:precioTotal()
    }
    console.log(pedido)

    const pedidosRef = collection(db,"pedidos");

    addDoc(pedidosRef,pedido)
    .then ((doc) => {
        setPedidoId(doc.id)
        vaciarCarrito()
    })
}
if (pedidoId) {
    return (
        <div>
            <h1>Muchas gracias por tu compra</h1>
            <p>Tu numero de pedido es: {pedidoId}</p>
        </div>
    )
}

    return (
        <div className='flex justify-center m-2'>
            <h1>finalizar compra</h1>
        
         <form className='flex flex-col w-1/2 justify-center'onSubmit={handleSubmit(comprar)}>
             <label>nombre</label>
             <input className='border bg-slate-200 p-2  border-gray-300 rounded'type="text" placeholder='ingresa tu nombre' {...register("nombre")} />
             <label>email</label>
             <input className='border bg-slate-200 p-2  border-gray-300 rounded'type="email" placeholder='ingresa tu email'{...register("email")} />
             <label>telefono</label>
             <input className='border bg-slate-200 p-2  border-gray-300 rounded'type="phone" placeholder='ingresa tu telefono'{...register("telefono")} />
     
             <button className='bg-slate-300 p-4 mt-2' type='submit'>Comprar</button>
         </form>
        </div>
       )
}

export default CheckOut