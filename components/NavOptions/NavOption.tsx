import React from "react";
import styles from "./NavOption.module.css";
import { Link } from "react-scroll";
import ScrollLink from "../ScrollLink";

const data = [
  {
    id: "creator",
    title: "Creator",
  },
  {
    id: "brands",
    title: "Brands",
  },
  {
    id: "carrers",
    title: "Carrers",
  },
];

const NavOption: React.FC<{ getSection: (id: string) => void }> = ({
  getSection,
}) => {
  
  return (
    <div className={`${styles.container}  `}>
      <div className={styles.text_container}>
        {data.map((cur) => {
          return (
            // <ScrollLink href={`#${cur.id}`} >
            // <p
            //   id={cur.id}
            //   className={styles.option}
            //   // onClick={() => {
            //   //   scrollToPage(cur.id);
            //   // }}
            //   // href={`#${cur.id}`}
            //   key={cur.id}
            // >
            <div key={cur.id} className={styles.option} >
              <Link to={cur.id} smooth={true} duration={1000}>

              {cur.title}
              </Link>
</div>           
 // </ScrollLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavOption;
