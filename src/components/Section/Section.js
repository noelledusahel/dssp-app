import * as React from 'react'
import styles from './Section.module.css'

function Section(props) {

    const { sectionName, order } = props
    return ( order === 'right' ? 
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.sectionContent}>
                    <img
                        className={styles.sectionIcon}
                        src={sectionName.icon}
                         alt="sectionicon"
                        />
                    <h2 className={styles.sectionTitle}>{sectionName.header}</h2>
                    <p>{sectionName.text}</p>
                    <button
                        className={styles.button}
                    >{sectionName.button.text}</button>
                </div>
            </div>
            <img 
                className={styles.sectionImage}
                src={sectionName.image} alt="sectionimg"/>
        </div>
    : 
        <div className={styles.section}>
            <img 
                className={styles.sectionImage}
                src={sectionName.image} alt="sectionimg"/>
            <div className={styles.container}>
                <div className={styles.sectionContent}>
                <img
                        className={styles.sectionIcon}
                        src={sectionName.icon}
                         alt="sectionicon"
                        />
                    <h2 className={styles.sectionTitle}>{sectionName.header}</h2>
                    <p>{sectionName.text}</p>
                    <button
                        className={styles.button}
                        >{sectionName.button.text}</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Section