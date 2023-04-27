import React, { useState } from 'react'
import styles from "./Creator.module.css"
import ActiveBanner from '@/components/ActiveBanner/ActiveBanner'
import BannerSelect from '@/components/BannerSelect/BannerSelect'
import banner1 from "@/assets/images/Creator3.jpeg"
import banner2 from "@/assets/images/Campaign2.jpeg"
import banner3 from "@/assets/images/bannerimage3.jpeg"
import banner4 from "@/assets/images/Optimize2.png"
import banner5 from "@/assets/images/Dashboard.png"

import { StaticImageData } from 'next/image'
import ButtonPrimary from '@/components/partials/ButtonPrimary/ButtonPrimary'



const content = [
    {
        id:1,
        title:"worlds best creators",
        img:banner1
    },
     {
        id:2,
        title:"faster campaign execution",
                img:banner2

    },
     {
        id:3,
        title:"flexibility on deliverables",
                img:banner3

    },
     {
        id:4,
        title:"optimise live",
                img:banner4

    },
    {
        id:5,
        title:"real-time dashboards",
        img:banner5

    }
]

const contentImages = [
    {
        id:1,
        title:banner1
    },
     {
        id:2,
        title:banner2
    },
     {
        id:3,
        title:banner3
    },
     {
        id:4,
        title:banner4
    },
    {
        id:5,
        title:banner3
    }
]


const Creator = () => {
    const [banner, setbanner] =  useState<{id:number,img:StaticImageData}>({id:1,img:banner1})

const hoverBannerHanlder = (id:number ,img:StaticImageData) =>{
setbanner({id:id,img:img});

}

console.log(banner,"bannerbanner")

  return (
    <section className={styles.container} >
 {/* Heading  */}
    <h2 className={styles.impact_text} >
        our new creator platform
    </h2>
 
 {/* container for left and right side  */}
        <div className={styles.main_container}>
                {/* Left side */}
                <div  >
                    <p className={styles.solvingIssues_text} >solving your creator marketing issues all at once</p>
                    <div className={styles.left_container}>

                    {content.map((cur) =>{
                        return <div key={cur.id} onMouseOver={() => hoverBannerHanlder(cur.id , cur.img)} > <BannerSelect text={cur.title} /> </div>
                    })}
                    </div>

                    <div className={styles.buttonContainer} >

                    <ButtonPrimary buttonType={"secondary-big"} onClick={() => {}} children='request a demo' />
                    </div>
                </div>
                {/* Right side */}
                <div>
                     <ActiveBanner img={banner.img} />
                </div>
        </div>
    </section>
  )
}

export default Creator