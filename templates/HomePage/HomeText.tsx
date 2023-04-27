import React from 'react'
import styles from "./custom.module.css"
import ButtonPrimary from '@/components/partials/ButtonPrimary/ButtonPrimary'

const HomeText = () => {
  return (
    <div className={styles.text_container}>
        <span className={styles.text} >authentically <span><h2 className={styles.heading} >connect</h2></span> with the next <span><h2 className={styles.heading} >generation</h2></span></span>
         <div className={styles.buttonContainer} >
           <ButtonPrimary buttonType={"primary-big"} onClick={() => {}} children='sign up today' />
         </div>
         
    </div>
  )
}

export default HomeText