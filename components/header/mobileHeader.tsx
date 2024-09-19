import React from 'react'
import HeaderItem from './headerItem'

interface Link {
    path: string;
    title: string;
}

interface MobileMenuprops {
    links: Link[];
}

const MobileHeader = ({links}:MobileMenuprops) => {
  return (
   <ul className='flex flex-col py-5 items-center z-10 bg-mycolor-200 md:hidden'>
    {links.map((link, index)=>(
        <li key={index}>
              <HeaderItem href={link.path} title={link.title} />


        </li>
    ))}


   </ul>
  )
}

export default MobileHeader