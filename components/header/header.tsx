"use client";

import React, { useState } from "react";
import HeaderItem from "./headerItem";
import { Button } from "../ui/button";
import { HiMiniBars3BottomRight, HiMiniBars4 } from "react-icons/hi2";
import MobileHeader from "./mobileHeader";

const navLinks = [
  { title: `About`, path: `#about` },
  { title: `Contact`, path: `#contact` },
  { title: `Blog`, path: `#blog` },
];
const Header = () => {
  const [navbaropen, setnavbaropen] = useState(false);

  return (
    <>
      {/* Header kısmını sabit (fixed) yapmak için eklenen sınıflar */}
      <nav className="fixed top-0 left-0 right-0 z-50 opacity-70">
        <div className="flex gap-5 bg-mycolor-200 justify-between items-center font-bold p-4 text-3xl px-10 font-playpen">
          <div style={{ color: "#FFD700" }}>MERT</div>
          <div className="absolute right-7 md:hidden">
            {navbaropen ? (
              <Button onClick={() => setnavbaropen(!navbaropen)}>
                <HiMiniBars4 className="h-5 w-5" />
              </Button>
            ) : (
              <Button onClick={() => setnavbaropen(!navbaropen)}>
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
              <li>
                <a
                  href="https://github.com/mertayhan123" // Mail adresini ekle
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mycolor-300 hover:text-[#FFD700] transition-colors duration-300"
                >
                  Project
                </a>{" "}
                
              </li>
            </ul>
          </nav>
        </div>
        {/* Mobil menü açıldığında */}
        {navbaropen ? <MobileHeader links={navLinks} /> : null}
      </nav>

      {/* Header'a sabit pozisyon verdiğimiz için, içeriğe üstten boşluk ekleyelim */}
      <div className="pt-[80px]">
        {" "}
        {/* Header'ın yüksekliğine göre padding-top ayarlandı */}
        {/* Sayfanın geri kalanı */}
      </div>
    </>
  );
};

export default Header;
