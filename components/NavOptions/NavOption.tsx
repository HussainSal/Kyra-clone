import React from "react";
import styles from "./NavOption.module.css";
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

const NavOption: React.FC<{ getSection: (id: string) => void }> = ({
  getSection,
}) => {
  
  return (
    <div className={`${styles.container}  `}>
      <div className={styles.text_container}>
        {data.map((cur) => {
          return (
           
            <div key={cur.id} className={styles.option} >
              <Link to={cur.id} smooth={true} duration={1000}>

              {cur.title}
              </Link>
</div>           
          );
        })}
      </div>
    </div>
  );
};

export default NavOption;
