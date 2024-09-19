"use client";

import React, { useState } from "react";
import HeaderItem from "./headerItem";
import { Button } from "../ui/button";
import { HiMiniBars3BottomRight, HiMiniBars4 } from "react-icons/hi2";
import MobileHeader from "./mobileHeader";

const navLinks = [
  { title: `About`, path: `/about` },
  { title: `Contact`, path: `/contact` },
  { title: `Blog`, path: `/blog` },
  { title: `Projects`, path: `/projects` },
];
const Header = () => {
  const [navbaropen, setnavbaropen] = useState(false);

  return (
    <nav>
        <div className="flex gap-5 bg-mycolor-200 justify-between items-center font-bold border p-4 text-3xl px-10 font-playpen">
      <div>MERT</div>
      <div className="absolute  right-7 md:hidden">
        {navbaropen ? (
          <Button onClick={() => setnavbaropen(!navbaropen)}>
            <HiMiniBars4 className="h-5 w-5" />
          </Button>
        ) : (
          <Button onClick={() => setnavbaropen(!navbaropen)}>
            {" "}
            <HiMiniBars3BottomRight className="h-5 w-5" />
          </Button>
        )}
      </div>
      <nav>
        <ul className="hidden md:flex gap-7 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <HeaderItem href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </nav>

    </div>
    {navbaropen ? <MobileHeader links={navLinks}/> :null}

    </nav>

  );
};

export default Header;
