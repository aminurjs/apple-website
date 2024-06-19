import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// eslint-disable-next-line no-unused-vars
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleVideoSet = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSet);

    return () => {
      window.removeEventListener("resize", handleVideoSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
      y: 0,
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="w-full h-5/6 flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12">
          <video
            className="pointer-events-none "
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col  items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="text-xl font-normal">From $199/month or $999/year</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
