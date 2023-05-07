import React, { useState } from "react";
import styles from "./Project.module.css";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import img1 from "@/assets/images/project-img-1.jpg";
import img2 from "@/assets/images/Clorpop.jpeg";
import img3 from "@/assets/images/Linkedin.jpeg";
import img4 from "@/assets/images/Lancome.jpeg";

const projectData = [
  {
    title: "ebay",
    btn: "ebay",
    text: "#stepandflex",
    img: img1,
    description: "sneakerhead challenge kicked off by macro creator",
  },
  {
    title: `Linked<span class="${styles.linkedin}" >in</span>`,
    location: "PARIS",
    btn: "linkedin",
    text: "#lancomeskincare",
    img: img2,
    description:
      "skin care regimes are becoming more and more important to gen z. this creator campaign put lancome right at hte center of the conversation on tiktok",
  },
  {
    title: "COLOURPOP",
    btn: "colourpop",
    text: "#thisiseverything",
    img: img3,
    description:
      "the first campaign delivered exclusively througn the kyra platform and it smashed all expectations. celebrating colourpop's launch in the in target, kyra creators were tasked to create noise on tiktok drive footfall",
  },
  {
    title: "VITA <br /> COCO",
    btn: "vita coca",
    text: "igniting vita coco's tiktok channel ",
    img: img4,
    description:
      "growing vita coco's follower base by 1000%+ in just 3 months creating original content in line with trends on the platform.",
  },
];

const Project = () => {
  const scrollToProject = (id: string) => {
    console.log("id", id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    // window.scrollTo({ behavior: "smooth" });
  };

  return (
    <section id="carrer" className={styles.projectSection}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <h4>
            unlock your creative marketing protential:
            <br /> connect with creators and drive impactful results.
          </h4>

          <div className={styles.btnsContainer}>
            {projectData.map((item) => (
              <ButtonPrimary
                onClick={() => scrollToProject(item.btn)}
                buttonType="primary-small"
                key={item.btn}
              >
                {item.btn}
              </ButtonPrimary>
            ))}
          </div>
        </div>

        <div className={styles.projectContainer}>
          {projectData.map((item, i) => (
            <div
              id={item.btn}
              key={i}
              className={`${styles.project} ${
                (i + 1) % 2 === 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.imgContainer}>
                <Image className={styles.img} src={item.img} alt={item.title} />
              </div>
              <div className={styles.projectTextContainer}>
                <h2
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h2>
                <h6 className={styles.text}>{item.text}</h6>
                <p className={styles.description}>{item.description}</p>

                <ButtonPrimary className={styles.btn}>
                  sign up today
                </ButtonPrimary>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
