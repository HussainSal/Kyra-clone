import React from "react";
import HomeText from "./HomeText";
import Marquee from "react-fast-marquee";
import styles from "./custom.module.css";

const imagesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const HomePage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 100,
  };

  return (
    <section className={styles.container}>
      <div className={styles.main_text}>
        <HomeText />
      </div>

      <div className={styles.video_container}>
        <video muted autoPlay={true} loop playsInline className={styles.video}>
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.scroll}>
        <Marquee speed={100}>
          {imagesData.map((item) => (
            <div className={styles.img} key={item}>
              <h3 style={{ marginLeft: 10 }}>Scroll</h3>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default HomePage;
