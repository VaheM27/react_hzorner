import React from 'react'

import { boots, sportiHagust, turizm, vazq } from '../Images'
import "./Section2.scss"

const Section2 = () => {
    return (
        <section className='section2'>
            <h1>Սեզոնի նորույթներ</h1>
            <h2>Արդեն Սպորտմաստեր խանութում</h2>
            <div className="top2">
                <div className="sportiHagust">
                    <img src={sportiHagust} alt="sportiHagust" />
                    <span>Հագուստ սպորտի և ակտիվ հանգստի համար</span>
                </div>
                <div className="top2right">
                    <div className="turizm-sport">
                        <img src={turizm} alt="turizm" />
                        <span>Տուրիզմ</span>
                    </div>
                    <div className="turizm-sport">
                        <img src={boots} alt="koshikner" />
                        <span>Սպորտային կոշիկներ</span>
                    </div>
                    <div className="vazq">
                        <img src={vazq} alt="vazq" />
                        <span>Վազելու համար</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2
