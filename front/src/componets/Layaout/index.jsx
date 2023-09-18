import { Outlet } from 'react-router-dom'
import React from 'react'
import NavbarCustom from '../Navbar/Navbar'
export default function Layout() {
    return (
        <>
            <NavbarCustom />            
            <div className='max-w-screen overflow-x-hidden h-full ' >
                <Outlet />
            </div>
        </>
    )
}
