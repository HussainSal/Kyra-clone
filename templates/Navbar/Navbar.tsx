import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import svg from "@/assets/images/kyra-logo.svg";
import NavOption from "@/components/NavOptions/NavOption";
import NavOptionResponsive from "@/components/NavOptions/NavOptionResponsive";
import { useAppContext } from "@/context/context";

const options = [
  {
    id: "1",
    text: "brands",
  },
  {
    id: "2",
    text: "creator",
  },
  {
    id: "3",
    text: "carrer",
  },
];

const Navbar: React.FC<{ getSection: (id: string) => void }> = ({
  getSection,
}) => {
  const ctx = useAppContext();

  console.log(ctx.enableMenu, "MENUUUU");

  return (
    <nav
      className={`${styles.container} ${
        ctx.enableMenu ? styles.overlay : styles.notOverLay
      }`}
    >
      <div className={styles.imageContainer}>
        <Image src={svg} width={100} height={100} alt="logo" />
      </div>

      <div className={styles.nav_options}>
        <NavOption getSection={getSection} />
      </div>
      <div
        className={`${styles.nav_options_responsive} ${
          ctx.enableMenu ? styles.resTop : ""
        } `}
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
        {options.map((cur) => {
          return (
            <p
              onClick={() => {
                ctx.setActiveTab(cur.text);
                ctx.setEnableMenu(false);
              }}
              id={cur.id}
              className={styles.responsive_options}
            >
              {cur.text}
            </p>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
