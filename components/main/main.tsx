"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mx-12 justify-items-center place-items-center md:place-items-start md:justify-items-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-9 text-center md:text-left justify-self-center md:justify-self-start"
      >
        <div>
          <div className="text-5xl font-roboto">
            <h1
              className="text-transparent bg-clip-text
                    bg-gradient-to-r from-mycolor-200 to-mycolor-100"
            >
              Hi, I&apos;m <span style={{ color: "#FFD700" }}>MERT</span> AYHAN
            </h1>
            <h2 className="text-mycolor-100">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  "Mobile Developer",
                  "Freelancer",
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </h2>
            <p className="text-mycolor-100 text-base mb-6 lg:text-lg">
              Hello, I&apos;m Mert Ayhan, a 4th-year Computer Engineering student at
              Balıkesir University. I&apos;ve always been someone who loves
              researching and learning new things. Following and analyzing
              developments in all areas of technology is probably my biggest
              hobby. In addition, I have a great interest in astronomy. Planets,
              stars, galaxies, nebulae, pulsars... Every night before I sleep, I
              can&apos;t stop thinking about this vast universe. (I think my love for
              physics and astronomy is also evident from my tattoos :) ) For the
              past two years, I&apos;ve been developing myself as a full-stack
              developer with ReactJS, ExpressJS, and NodeJS. I&apos;ve also developed
              some projects with Flutter. That&apos;s a quick summary of my life!
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full md:w-fit rounded-full bg-gradient-to-br
                    from-mycolor-200 to-mycolor-100 text-white text-center mr-4"
              >
                Hire
              </Link>

              <Link
                href="/cv.pdf" // Dosya yolu (public klasöründen)
                download
                className="px-1 inline-block py-1 w-full md:w-fit rounded-full
    bg-gradient-to-br from-mycolor-200 to-mycolor-100 text-mycolor-700 text-center mt-3"
              >
                <span className="block bg-mycolor-300 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className="col-span-3 bg-white rounded-full my-12 md:my-1  w-[250px] h-[250px]
                lg:w-[400px] lg:h-[400px]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt=""
            src="/foto1.jpeg"
            width={330}
            height={330}
            className="rounded-full w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
