import { NavLink } from "react-router-dom"
import navItems from "../../constants/navItems"

import './navbar.scss'

const Navbar = () => {
    return (
        <nav>
            <ul>
              {navItems.map((item, index) =>{
                return  (
                    <li key={index}>
                        <NavLink to={item.path}>{item.navName}</NavLink>
                    </li>
                )
              } )}
            </ul>
        </nav>
    )
}

export default Navbar