import React from 'react'
import styles from "./NavOption.module.css"
import Link from 'next/link'

const data = [
    {
        id:"creator",
        title:"Creator",

    }, {
        id:"brands",
        title:"Brands",
    }, {
        id:"carrers",
        title:"Carrers",
    }
]

const NavOption:React.FC<{getSection:(id:string) => void}> = ({getSection}) => {

    const scrollToPage = (id:string) =>{
        getSection(id)
        // ctx.setScroll(id)
    }



  return (
    <div className={styles.container}>
        <div className={styles.text_container} >
            {/* <p className={styles.option} >Creators</p>
            <p className={styles.option} >Brands</p>
            <p className={styles.option} >Carrers</p> */}
            {data.map(cur =>{
                return  <p  id={cur.id} className={styles.option} onClick={
                    () => {scrollToPage(cur.id)}
                    } key={cur.id} >
                    {cur.title}
                    
                    </p>
            })}
        </div>

    </div>
  )
}

export default NavOption