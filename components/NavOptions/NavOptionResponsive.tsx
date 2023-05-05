import React, { useEffect, useState } from "react";
import styles from "./NavOption.module.css";
import menu from "@/assets/icons/menu.svg";
import Image from "next/image";
import { useAppContext } from "@/context/context";

const NavOptionResponsive: React.FC<{}> = ({}) => {
  const ctx = useAppContext();

  const activeMenu = () => {
    ctx.setEnableMenu((prv: boolean) => !prv);
  };

  return (
    <div
      onClick={activeMenu}
      className={`${styles.container} ${styles.container_responsive}  `}
    >
      <Image src={menu} width={20} height={20} alt="trial" />
    </div>
  );
};

export default NavOptionResponsive;
