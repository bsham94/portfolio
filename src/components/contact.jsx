import React from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
const Contact = () => {
  return (
      <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Get In Touch</p>
          <p className='text-gray-300 py-8'>To contact me please send an email to benpshamas@gmail.com</p>
          <div className="flex justify-center space-x-4 text-gray-300"> 
            <a className="hover:text-pink-600" target='_blank' rel="noreferrer" href='https://www.github.com/bsham94'><FaGithub size={40}/></a>
            <a className="hover:text-pink-600"  target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/ben-shamas-2a613b114/'><FaLinkedin size={40}/></a>
            <a className="hover:text-pink-600"  target='_blank' href='mailto:benpshamas@gmail.com' rel="noreferrer"><HiOutlineMail size={40}/></a>
            <a className="hover:text-pink-600"  target='_blank' href='./ben_shamas_resume.pdf' rel="noreferrer"><BsFillPersonLinesFill size={40}/></a>
          </div>
        </div>
    </div>
  )
}

export default Contact