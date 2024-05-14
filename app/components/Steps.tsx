import React from 'react'
import { stepsSection as data } from '../data'
import Image from 'next/image'
import IconButton from './IconButton'

const {heading,subtext,items,buttonText} = data

const Steps = () => {
  return (
    <section className='extends steps mt-24 px-1'>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 blue mx-auto">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
        
        <h2 className='mx-auto text-center text-4xl font-bold underline py-8'>{heading}</h2>
        <p className='mx-auto text-center text-gray-900 text-lg '>{subtext}</p>
        
        <div className="flex my-6 w-full flex-wrap mx-auto justify-center max-w-[1000px] gap-8 ">
            {items.map((item,index)=>(
                <div className="h-full w-full bg-white group md:max-w-[400px] rounded-3xl even:bg-blue-600 even:text-white shadow-md p-7 ">
                    <div className='border-white border bg-blue-200 rounded-full w-[40%] mx-auto p-4 mb-4 aspect-square flex items-center justify-center'>
                        <Image
                         src={item.image}
                         width={200}
                         height={200}
                         alt={`Step ${index+1} icon`}
                        />
                    </div>
                    <div className='bg-blue py-3 rounded-full text-white text-center group-even:bg-white  group-even:text-blue-600'>
                        Step {index+1}
                    </div>
                    <p className='text-lg mt-8 text-center'>
                        {item.text}
                    </p>
                </div>
            ))}
    
        </div>
        <IconButton text={buttonText} className='mx-auto my-10'/>
    </section>
  )
}

export default Steps