import React from 'react'
import { sec1img, fila, puma, columbia, kappa, demix, outventure } from '../Images'

import "./Section1.scss"

const Section1 = () => {
    return (
        <section className='section1'>
            <img src={sec1img} alt="sec1img" style={{ width: "100%" }} />
            <div className="bottom">
                <img src={fila} alt="fila" />
                <img src={puma} alt="puma" />
                <img src={columbia} alt="columbia" />
                <img src={kappa} alt="kappa" />
                <img src={demix} alt="demix" />
                <img src={outventure} alt="outventure" />
                <div className="brend">
                    <span>+60</span>
                    <p>բրենդներ
                        <br />
                        50+ մարզաձևերի համար</p>
                </div>
            </div>
        </section>
    )
}

export default Section1
