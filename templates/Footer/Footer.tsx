import React, { useEffect } from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'

const Footer = () => {


  return (
    <footer id='footer' className={styles.container}>
        {/* <div className={styles.innerContainer}> */}
        <div className={styles.text_container} >
        <div className={styles.text_container_inner} >
        <p className={styles.footer_options}  >
          privacy policy  
        </p>   
         <p className={styles.footer_options}>
          terms and conditions  
        </p>   
         <p className={styles.footer_options}>
          press  
        </p>   
         <p className={styles.footer_options}>
          support  
        </p>    
          </div>

          <p style={{fontSize:"2rem"}}>
           {`© ${new Date().getFullYear()} Kyra. All rights reserved.`}
          </p>

          </div>


          <div className={styles.imageContainer} >
        <Image src={"https://kyra.com/KyraVector.svg"} width={500} height={500} alt='logo'  />
          </div>
        {/* </div> */}
    </footer>
  )
}

export default Footer