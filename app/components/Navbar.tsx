"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { header as data, mainLogoUrl } from '../data'
import { usePathname } from 'next/navigation'

// const buttonText=""
const {navLinks:links, buttonText}=data

const MobileMenu=()=>(

    <div className="flex h-min px-8 pb-8 flex-col gap-5 overflow-clip">
    <hr/>
    <div id="mobile-menu-dropdown" className="flex h-full pb-4 flex-col gap-5  overflow-scroll mobile-menu-dropdown">
        <ul className='flex-col flex gap-5'>
            {links.map(link=>(
                <li key={link}>
                    <Link 
                        className='text-black hover:text-blue-600 border-b-blue-600' 
                        href={`#${link}`}
                    >{link}</Link>
                </li>
            ))}
            </ul>
        </div>
    </div>
)

const Navbar = () => {
  
    const [mobileMenuOpen,setMobileMenuOpen]=useState(false)
    const [scrolledDown,setScrolledDown] = useState(false)
    
    const maxScroll=5

    const toggleMobileMenu=()=>{
        setMobileMenuOpen(prevOpen=>!prevOpen)
    }
    const pathname=usePathname()
    const isCurrentPath=(path:string)=>(
        pathname&&(pathname===path||pathname.includes(path)&&path!=="/")
    )


    useEffect(()=>{
        const handleScroll = (event:Event) => {
            setScrolledDown(window.scrollY >= maxScroll);
            
            if (event.target!==document.getElementById("mobile-menu-dropdown"))
                setMobileMenuOpen(false)
          };
        window.addEventListener('scroll', handleScroll);
        
        const resizeFunc=()=>{
            setMobileMenuOpen(false)
        }
        addEventListener("resize",resizeFunc)

        return () => {
            window.removeEventListener('scroll', handleScroll);
            removeEventListener('resize',resizeFunc)
        };
    }, []);

  return (
    <nav className={`${scrolledDown&&"border-b border-b-blue-600 shadow-sm shadow-blue-500"} fixed z-50 w-full items-center flex flex-col gap-4 p-4 lg:px-8 lg:py-9 top-0 bg-white`}>
       <div className='container items-center flex justify-between'>
            <Link href={"/"} className='blue flex gap-2'>
                <Image src={mainLogoUrl} 
                    width={200}
                    height={100}
                    alt='main logo'
                    className='blue'
                />
                

            </Link>
            {/* Desktop Nav items */}
                <ul className='hidden md:flex gap-8'>
                    {links.map(link=>(
                        <li key={link}>
                            <Link 
                                className='text-black hover:text-blue-600 border-b-blue-600' 
                                href={`#${link}`}
                            >{link}</Link>
                        </li>
                    ))}
                </ul>
                <button className='hidden md:flex'>{buttonText}</button>
                
                {/* Mobile Nav items */}
                <button className='block md:hidden' onClick={toggleMobileMenu} >
                   {mobileMenuOpen?(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    )
                 }
                </button>
        </div>
        <div className='container'>
            {mobileMenuOpen&&innerWidth<786&&<MobileMenu/>}
        </div>
    </nav>
  )
}


export default Navbar