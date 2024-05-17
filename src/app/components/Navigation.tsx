import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

const Navigation = () => {
  return (
    <>
     <Navbar className='flex justify-between' height="5rem">
        <NavbarBrand >
          <Link href='\' className='text-3xl font-bold'>HopeHub</Link>
        </NavbarBrand>
        <NavbarContent className='hidden gap-20 sm:flex' justify='end'>
          <NavbarItem>
            <Link href='\'>Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='\about'>About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='\contact'>Contact Us</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='\donate'>Donate</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='\resources'>Article and Resources</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default Navigation