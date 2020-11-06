import Navbar from './Navbar/index.js';
import NavbarTop from './NavbarTop.tsx';
import { useState } from 'react'

export default function Layout({ children }) {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <>
            <NavbarTop onMobileNavOpen={() => setMobileNavOpen(true)} />
            <Navbar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            ></Navbar>
            <div>{children}</div>
        </>
    )
}
