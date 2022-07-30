import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

/* add functionality to the hamburger bar */

export const Navbar = () => {

    const [barActive, setBarActive] = useState(false)

    const handleActiveBar = () => {
        let nav = document.querySelector("#navId")
        let logo = document.querySelector("#navLogoId")
        let navItems = document.querySelector("#navItemsId")
        if(!barActive) {
            nav?.classList.add("ca-nav-active")
            logo?.classList.add("ca-logo-active")
            navItems?.classList.add("ca-nav-items-active")
        }
        else {
            nav?.classList.remove("ca-nav-active")
            logo?.classList.remove("ca-logo-active")
            navItems?.classList.remove("ca-nav-items-active")
        }
        setBarActive((prev) => !prev)
    }

    return <>
    <span className="header-hamburger" onClick={handleActiveBar}><MenuIcon color={barActive ? 'action' : 'inherit'} style={{fontSize: "2rem"}}/></span>
    <nav className="ca-nav" id="navId">
        <img className="ca-logo" id="navLogoId" src={barActive ? "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527f303715879bc5767fc61_hipsterlogogenerator_1428681411802.png"
         : "https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527f403715879bc5767fce1_hipster-white.png"} alt="logo"></img>
        <ul className="ca-nav-items" id="navItemsId">
            <li className="ca-nav-item">
                <a href="ca-clone">HOME</a>
            </li>
            <li className="ca-nav-item">
                <a href="ca-clone">ABOUT</a>
            </li>
            <li className="ca-nav-item">
                <a href="ca-clone">SERVICES</a>
            </li>
            <li className="ca-nav-item">
                <a href="ca-clone">PORTFOLIO</a>
            </li>
            <li className="ca-nav-item">
                <a href="ca-clone">CONTACT</a>
            </li>
        </ul>
    </nav>
     </>
}