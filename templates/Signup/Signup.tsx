import React from 'react'
import styles from "../Footer/Footer.module.css"
import ButtonPrimary from '@/components/partials/ButtonPrimary/ButtonPrimary'

const Signup = () => {
  return (
    <div id='carrers' className={`${styles.container} ${styles.signup_container}`} >
        <div className={styles.text_container}>
            <h3 className={`${styles.impact_text} ${styles.margin} `} >
                Want to start making an impact ?
            </h3>

             <p className={`${styles.footer_options} ${styles.footer_options_container}`} >
                The world's best brands trust Kyra. Whether it's activiating your next big launch, creating authentic content to fuel your performance marketing, or reacting to latest brand relevant tren, Kyra for Brands makes it possible
            </p>
        </div>
         <div className={styles.buttonContainer} >

                    <ButtonPrimary buttonType={"primary-big"} onClick={() => {}} children='sign up today' />
                    </div>
    </div>
  )
}

export default Signup