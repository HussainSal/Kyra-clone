import React from "react";
import styles from "./NavOption.module.css";
import Link from "next/link";

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
  const scrollToPage = (id: string) => {
    getSection(id);
    console.log(id, "IDDD");

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    // ctx.setScroll(id)
  };

  return (
    <div className={`${styles.container}  `}>
      <div className={styles.text_container}>
        {data.map((cur) => {
          return (
            <p
              id={cur.id}
              className={styles.option}
              onClick={() => {
                scrollToPage(cur.id);
              }}
              key={cur.id}
            >
              {cur.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavOption;
