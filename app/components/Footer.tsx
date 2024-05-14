import React from 'react'
import IconButton from './IconButton'
import { footer as data, mainLogoUrl, header } from '../data';
import Image from 'next/image';

const {firstParagraph,finalParagraph,footerButtonText} = data
const Footer = () => {
  return (
    <footer className=' items-center px-10 py-12 my-container text-center flex-col flex justify-center py-10s'>
        <IconButton className='mx-auto mb-5' text={footerButtonText}/>
        <Image 
            className='py-7'
            src={mainLogoUrl}
            width={200}
            height={100}
            alt={"main logo"}
        />
        <p className='text-base'>{firstParagraph}</p>
        <p className='text-base'>{finalParagraph}</p>

    </footer>
  )
} 

export default Footer