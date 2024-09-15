import React from 'react'

import { ArmeniaFlag, Logo } from '../Images'

import "./NavBar.scss"

const NavBar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="left">
                    <p>
                        Հայերեն
                        <i class="bi bi-chevron-down"></i>
                    </p>
                    <div></div>
                    <p>
                        <img src={ArmeniaFlag} alt="ArmeniaFlag" />
                        Հայաստան
                        <i class="bi bi-chevron-down"></i>
                    </p>
                    <span>Երևան</span>

                </div>
                <img src={Logo} alt="logo" className='logo' />
                <div className="right">
                    <p>
                        <i class="bi bi-geo-alt"></i>
                        Մեր խանութները
                    </p>
                    <button>Ստուգել հաշվեկշիռը</button>
                </div>
            </div>
        </nav>

    )
}

export default NavBar
