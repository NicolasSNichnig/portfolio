'use client'

import { useState } from 'react';
import MenuIcon from "../public/hamburguerIcon.jsx"

const HamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    }

    return(
        <div className="fixed top-5 left-5 z-50">
            <button onClick={handleClick}>
                <MenuIcon size={40} className="text-gray-600 hover:text-black" />
            </button>
            
            {isOpen && (
                <div className='bg-[#514F59] flex flex-col p-2 absolute top-12 left-0 min-w-[150px] rounded-lg shadow-lg'>
                    <button onClick={() => scrollToSection("home")} className='text-left p-2 hover:bg-[#6B6872] rounded transition-colors'>
                        Home
                    </button>
                    <button onClick={() => scrollToSection("sobre")} className='text-left p-2 hover:bg-[#6B6872] rounded transition-colors'>
                        Sobre Mim
                    </button>
                    <button onClick={() => scrollToSection("habilidades")} className='text-left p-2 hover:bg-[#6B6872] rounded transition-colors'>
                        Habilidades
                    </button>
                    <button onClick={() => scrollToSection("contato")} className='text-left p-2 hover:bg-[#6B6872] rounded transition-colors'>
                        Contato
                    </button>
                </div>
            )}
        </div>
    )
}

export default HamburguerMenu