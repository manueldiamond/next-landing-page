import React from 'react'
import { bonus2Card as data } from '../data'
import Image from 'next/image'
import { title } from 'process'

const {heading, items}=data

const totalActualValue=items.reduce((prev,next)=>({...prev,value:prev.value+next.value})).value
const flooredValue=Math.floor(totalActualValue/1000)*1000

const Bonus2 = () => {
  return (
    <section className='2-bonus-stuff mt-10 py-8 rounded-xl bg-blue-100'>
   
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 blue mx-auto">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
        
        <h2 className='mx-auto text-center text-green-600 text-4xl font-bold underline py-8'>{heading}</h2>
        
        <div className='lg:px-20 '>
            {items.map((item,index)=>(
                <div className=' mb-5 gap-10 lg:gap-20 bg-white text-center items-center p-2 py-4 rounded-lg flex justify-between px-8' key={item.value}>
                    <Image className='flex max-w-[30%]' src={item.image} alt={`${title} icon`} width={200} height={200}/>
                    <div className='flex flex-col flex-1 items-center justify-center gap-3'>
                        <p className='font-semibold uppercase text-lg'>Bonus #{index+1}</p>
                        <p className='uppercase font-bold text-2xl'>{item.title}</p>
                        <p className='text-xl'>{item.desc}</p>
                        <p className='text-green-600 font-bold text-2xl'>({item.value} SEK VARDE)</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex gap-4 flex-col items-center justify-center'>
            <p className='px-8 py-1 mx-auto rounded-full w-maxsssssss text-red-500 bg-red-50'>Normal Kostnad: {flooredValue} SEK+</p>
            <h3 className='text-green-600 font-bold text-2xl mx'>Bara 499 SEK</h3>
            <h3 className='text-black font-bold text-2xl'>(Not even sure what is here)</h3> 
        </div>
    </section>
  )
}

export default Bonus2