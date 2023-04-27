import React, { useEffect, useState } from "react";
import styles from "./CompanyCustomers.module.css";
import Slider from "react-slick";
import { ScrollTrigger as GsapScrollTrigger } from "@/assets/gsap/src/ScrollTrigger";
import { gsap } from "gsap";
import logo1 from '@/assets/images/logo-1.svg';
import logo2 from '@/assets/images/logo-13.svg';
import logo3 from '@/assets/images/logo-3.svg';
import logo4 from '@/assets/images/logo-4.svg';
import logo5 from '@/assets/images/logo-5.svg';
import logo6 from '@/assets/images/logo-13.svg';
import logo7 from '@/assets/images/logo-11.svg';
import logo8 from '@/assets/images/logo-8.svg';
import Image from "next/image";

const imagesData = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const cardData = [
  {
    title: "ADWEEK",
    titleWeight: "700",
    text: "kyra Aims to Bring More Performance-based Models to TikTok's Creators",
  },
  {
    title: "The Information",
    titleWeight: "400",
    text: "Kyra has years of experience finding the right advertisers for creators to work with",
  },
  {
    title: "Business<br/> Insider",
    titleWeight: "500",
    text: "creator-economy startup kyra rises $15 million Series A Round",
  },
  {
    title: "ADWEEK",
    titleWeight: "700",
    text: "kyra Aims to Bring More Performance-based Models to TikTok's Creators",
  },
  {
    title: "The Information",
    titleWeight: "400",
    text: "Kyra has years of experience finding the right advertisers for creators to work with",
  },
  {
    title: "Business<br/> Insider",
    titleWeight: "500",
    text: "creator-economy startup kyra rises $15 million Series A Round",
  },
  {
    title: "The Information",
    titleWeight: "400",
    text: "Kyra has years of experience finding the right advertisers for creators to work with",
  },
  {
    title: "Business<br/> Insider",
    titleWeight: "500",
    text: "creator-economy startup kyra rises $15 million Series A Round",
  },
];

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 100,
  cssEase: "ease-in-out",
};

const CompanyCustomers = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // if (isMobile) return;
    let ctx = gsap.context(() => {
      gsap.registerPlugin(GsapScrollTrigger);
      const tl = gsap.timeline();
      const sections = gsap.utils.toArray(".card");

      tl.to(".wrapper", {
        duration: 10,
        xPercent: -100 * (sections.length - 1),
      });

      GsapScrollTrigger.create({
        animation: tl,
        trigger: ".wrapper",
        start: "top bottom",
        scrub: true,
        end: "+=50000",
      });
    });
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="brands" className={styles.section}>
      <div className={styles.inner_container}>
        <h2>
          trusted by world&#39;s
          <br />
          top brands
        </h2>

        <div className={styles.img_container}>
          <Slider {...settings} className={styles.slide}>
            {imagesData.map((item) => (
              <div className={styles.img} key={item}>
                <Image src={item} alt="logo" />
              </div>
            ))}
          </Slider>
        </div>

        <div className={`${styles.cardContainer} wrapper`}>
          {cardData.map((item, i) => (
            <div key={i} className={`${styles.card} card`}>
              <p>{`"${item.text}"`}</p>
              <h5
                dangerouslySetInnerHTML={{ __html: item.title }}
                style={{ fontWeight: item.titleWeight }}
              ></h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCustomers;
