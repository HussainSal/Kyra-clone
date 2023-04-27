import React from 'react'
import styles from "./ActiveBanner.module.css"
import Image, { StaticImageData } from 'next/image'

const ActiveBanner: React.FC<{img:StaticImageData}> = ({img}) => {
  return (
    <div className={styles.container}   >
        <Image src={img} width={420} height={480} alt='img'  />
        
    </div>
  )
}

export default ActiveBanner