import React, { useState } from 'react'
import styles from "./BannerSelect.module.css"
import Image from 'next/image'
import plus from "@/assets/icons/plus.svg"
import minus from "@/assets/icons/minus.svg"


interface Props {
    text:string,

}

const BannerSelect:React.FC<Props> = ({text}) => {

   const [ active, setActive] =  useState<boolean>(false);

   console.log(active,"activeActive")

  return (
    <div className={styles.container} onClick={() => setActive((prvstate) => !prvstate)} >
        <div className={styles.text_container} >
        <p className={ active ? styles.text : ""} >{text}</p>
        <div className={!active ? styles.details : styles.active_details} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo excepturi numquam expedita accusamus architecto beatae similique porro maiores tempore pariatur tempora in incidunt, nihil sapiente. Quos sed doloribus tempora?
        </div>

        </div>
        <span className={`${styles.expand_container} ${active ? styles.active : styles.active_remove}`}  >
       { <Image src={!active ?  plus : minus} width={20} height={20} alt='' /> }
        </span>
    </div>
  )
}

export default BannerSelect