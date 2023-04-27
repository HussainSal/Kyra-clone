import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import svg from "@/assets/images/kyra-logo.svg"
import NavOption from '@/components/NavOptions/NavOption'

const Navbar:React.FC<{getSection:(id:string) => void}> = ({getSection}) => {
  return (
    <nav className={styles.container} > 
        <div className={styles.imageContainer} >
        <Image src={svg} width={100} height={100} alt='logo'  />
        </div>

        <div className={styles.nav_options} >
            <NavOption getSection={getSection} />
        </div>
    </nav>
  )
}

export default Navbar