import * as React from 'react'
import styles from './Hero.module.css'

import fadeout from '../../img/hero-soil-fadeout.png'
import logo from '../../logo.svg';

function Hero() {
    return (
        
        <div className={styles.hero}>
             <img
                    src={logo}
                    className={styles.logo}
                    alt="Logo"/>
            <div className={styles.title}>
                <h1>HEALING OUR SOIL</h1>
                <h1>PRESERVING OUR STORIES</h1>
            </div>

                <img
                    src={fadeout}
                    className={styles.fadeout}
                    alt="Fadeout"/>
        </div>

    )
}

export default Hero;