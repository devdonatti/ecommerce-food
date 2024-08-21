import React from 'react'
import { useForm } from 'react-hook-form'

const Contacto = () => {
    const {register,handleSubmit}= useForm()

    const enviar = (data) => {
        console.log (data)
    }


  return (
   <div className='flex justify-center m-2'>
   
    <form className='flex flex-col w-1/2 justify-center'onSubmit={handleSubmit(enviar)}>
        <label>nombre</label>
        <input className='border bg-slate-200 p-2  border-gray-300 rounded'type="text" placeholder='ingresa tu nombre' {...register("nombre")} />
        <label>email</label>
        <input className='border bg-slate-200 p-2  border-gray-300 rounded'type="email" placeholder='ingresa tu email'{...register("email")} />
        <label>telefono</label>
        <input className='border bg-slate-200 p-2  border-gray-300 rounded'type="phone" placeholder='ingresa tu telefono'{...register("telefono")} />

        <button className='bg-slate-300 p-4 mt-2' type='submit'>Enviar</button>
    </form>
   </div>
  )
}

export default Contacto