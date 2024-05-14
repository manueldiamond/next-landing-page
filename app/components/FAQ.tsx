import React from 'react'
import { questions } from '../data';


const {heading,items}=questions
const FAQ = () => {
  return (
    <section className='steps extends bg-blue-100 w-full'>
      <div className='my-container'>
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32 blue mx-auto">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>

        <h2 className='mx-auto text-center text-4xl font-bold underline py-8'>{heading}</h2>
        <div className='py-8 gap-4 flex flex-col'>
          {items.map(item=>(
            <article className='bg-white rounded-xl shadow-lg p-6'>
              <h5 className='font-bold mb-4'>{item.question}</h5>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ