import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import svg from "@/assets/images/kyra-logo.svg";
import NavOption from "@/components/NavOptions/NavOption";
import NavOptionResponsive from "@/components/NavOptions/NavOptionResponsive";
import { useAppContext } from "@/context/context";
import { Link } from "react-scroll";


const data = [
  {
    id: "creator",
    title: "creator",
  },
  {
    id: "brands",
    title: "brands",
  },
  {
    id: "carrers",
    title: "carrers",
  },
];

const Navbar: React.FC<{ getSection: (id: string) => void }> = ({
  getSection,
}) => {
  const ctx = useAppContext();

  console.log(ctx.enableMenu, "MENUUUU");

  return (
    <nav
      className={`${styles.container}`}
    >
      <div className={ctx.enableMenu ? styles.overlay : styles.notOverLay
} />
      <div className={styles.imageContainer}>
        <Image src={svg} width={100} height={100} alt="logo" />
      </div>

      <div className={styles.nav_options}>
        <NavOption getSection={getSection} />
      </div>
      <div
        className={`${styles.nav_options_responsive}
        
        `}
      >
        {/* <NavOption getSection={getSection} /> */}
        <NavOptionResponsive
        // activefn={activeHandler}
        />
      </div>

      <div
        className={`${
          ctx.enableMenu
            ? styles.responsive_options_container 
            : styles.responsive_options_hide
        }`}
      >
        {data.map((cur) => {
          return (
           
              <Link to={cur.id} smooth={true} duration={1000}>
                <div onClick={() => { console.log("clickedNvvv"); ctx.setEnableMenu(false)}} key={cur.id} className={styles.option} >

              {cur.title}
              </div>
              </Link>
              
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
