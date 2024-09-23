"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import Tabbutton from "./info";

const mert = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJs</li>
        <li>Redux</li>
        <li>NextJs</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Balıkesir Üniversitesi</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>EZKA Yazılım(Flutter)</li>
        <li>Fnss Savunma Sistemleri-(Staj)-(ReactJs) </li>
        <li>Cats Yazılım(Flutter)</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");

  const [isPending, startTransition] = useTransition();

  const handleChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <div className="text-white" id="about">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center
     py-8 px-4"
      >
        <Image
          alt=""
          src="/2.jpeg"
          width={500}
          height={500}
          className="rounded-full"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Below, you can find a brief résumé detailing the areas I’ve worked
            in and the companies I’ve worked for. I recommend taking a look.{" "}
          </p>

          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              Education
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </Tabbutton>
          </div>

          <div className="mt-8">{mert.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
