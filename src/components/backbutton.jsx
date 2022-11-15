import React from 'react'
import { Link } from 'react-scroll';
import { HiArrowNarrowUp } from 'react-icons/hi';

const BackButton = () => {

  
  return (
      <Link to='home' smooth={true} duration={500}>
        <HiArrowNarrowUp/>
      </Link>
  )
}

export default BackButton