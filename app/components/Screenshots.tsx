import React from 'react'
import { screenshots as data } from '../data';
import IconButton from './IconButton';
import Image from 'next/image';

const {firstButtonText,secondButtonText,items} = data
const Screenshots = () => {
  return (
    <section className=' bg-white  flex flex-col items-center'>
        <IconButton text={firstButtonText}/>

        <div className='py-8  w-full flex-wrap gap-10 flex justify-center'>
            {items.map((img)=>(
                <Image className='shadow-xl rounded-lg w-full lg:w-[500px]'
                    width={500}
                    height={500}
                    alt={img.alt}
                    src={img.src}
                />
            ))}
        </div>

        <IconButton text={secondButtonText}/>
    </section>
  )
}

export default Screenshots