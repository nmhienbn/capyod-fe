import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white mt-20  p-5
     shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
      
        <div className="flex-none">
          <h1 className="text-3xl font-bold">
            <span className="text-[#39b75d] ">Capyod</span>
          </h1>
        </div>

        <div className='flex gap-6'>
        <a href="https://www.facebook.com/trungnotchung9704" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="text-gray-600 hover:text-[#39b75d]" />
          </a>
          <a href="https://www.linkedin.com/in/trungnotchung/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="text-gray-600 hover:text-[#39b75d]" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="text-gray-600 hover:text-[#39b75d]" />
          </a>
          <a href="https://github.com/trungnotchung" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="text-gray-600 hover:text-[#39b75d]" />
          </a>
          <a href="https://www.instagram.com/0xtrungnotchung/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="text-gray-600 hover:text-[#39b75d]" />
          </a>
        </div>

       
       
      </div>
    </div>
  )
}

export default Footer
