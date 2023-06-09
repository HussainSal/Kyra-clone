import React, { useState } from "react";
import styles from "./Creator.module.css";
import ActiveBanner from "@/components/ActiveBanner/ActiveBanner";
import BannerSelect from "@/components/BannerSelect/BannerSelect";
import banner1 from "@/assets/images/Creator3.jpeg";
import banner2 from "@/assets/images/Campaign2.jpeg";
import banner3 from "@/assets/images/bannerimage3.jpeg";
import banner4 from "@/assets/images/Optimize2.png";
import banner5 from "@/assets/images/Dashboard.png";

import { StaticImageData } from "next/image";
import ButtonPrimary from "@/components/partials/ButtonPrimary/ButtonPrimary";

const content = [
  {
    id: 1,
    title: "best creators",
    img: banner1,
  },
  {
    id: 2,
    title: "faster campaign ",
    img: banner2,
  },
  {
    id: 3,
    title: "flexibile deliverables",
    img: banner3,
  },
  {
    id: 4,
    title: "optimise live",
    img: banner4,
  },
  {
    id: 5,
    title: "real-time dashboards",
    img: banner5,
  },
];



const Creator = () => {
  const [banner, setbanner] = useState<{ id: number; img: StaticImageData }>({
    id: 1,
    img: banner1,
  });

  const hoverBannerHanlder = (id: number, img: StaticImageData) => {
    setbanner({ id: id, img: img });
  };

  console.log(banner, "bannerbanner");

  return (
    <section id="creator" className={styles.container}>
      {/* Heading  */}
      <h2 className={`${styles.impact_text} ${styles.impact_text_responsive} `}>
        our new creator platform
      </h2>
      <p className={styles.solvingIssues_text_responsive}>
        solving your creator marketing issues all at once
      </p>

      {/* container for left and right side  */}
      <div className={styles.main_container}>
        {/* Left side */}
        <div className={styles.main_left_side}>
          <p className={styles.solvingIssues_text}>
            solving your creator marketing issues all at once
          </p>
          <div className={styles.left_container}>
            {content.map((cur) => {
              return (
                <div
                  key={cur.id}
                  onMouseOver={() => hoverBannerHanlder(cur.id, cur.img)}
                >
                  <BannerSelect text={cur.title} />{" "}
                </div>
              );
            })}
          </div>

          <div className={styles.buttonContainer}>
            <ButtonPrimary
              buttonType={"secondary-big"}
              onClick={() => {}}
              children="request a demo"
            />
          </div>
        </div>
        {/* Right side */}
        <div className={styles.bannerImg_responsive}>
          <ActiveBanner img={banner.img} />
        </div>
      </div>
    </section>
  );
};

export default Creator;
