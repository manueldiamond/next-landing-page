import React from 'react'
import { blueCard as data } from '../data'
import Image from 'next/image'

const {heading,image,items}=data

const BlueCard = () => {
  return (
    <section className='relative pt-5 px-5 lg:px-0 lg:py-24 w-full max- blue-card mt-14 bg-blue rounded-3xl'>
        <div className=' bg-blue-400  lg:w-[60%] pt-12 lg:-mt-2 lg:left-0  sbg-blue-400 py-6 lg:py-12 px-3 lg:px-20 rounded-2xl text-white'>
            <h1 className=' text-4xl font-bold pb-5'>{heading}</h1>
            <ul className=' text-xl flex flex-col gap-4'>
            {items.map(({heading,text})=>(
                <li key={heading}>
                    <p>
                        <span className='font-bold'>{heading} </span>
                        <span className=''>{text} </span>
                    </p>
                </li>
            ))}
            </ul>
    </div>
        <Image 
            className='z-10 text-green-400 absolute right-0 bottom-0 translate-x-5 w-[35%]  hidden lg:block object-contains'
            src={image.src}
            alt={image.alt} 
            width={300} 
            height={600} 
        />
    </section>
  )
}

export default BlueCard