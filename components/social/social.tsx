import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // GitHub ve LinkedIn simgeleri
import { HiOutlineMail } from "react-icons/hi"; // Gmail simgesi

const SocialMedia = () => {
  return (
    <div className="flex space-x-6 justify-between items-center mt-4 h-[400px]" id="contact">
      {/* GitHub */}
      <a
        href="https://github.com/mertayhan123" // GitHub profil URL'ni ekle
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFD700] transition-colors duration-300"
      >
        <FaGithub size={300} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/mert-ayhan-0bb469233/" // LinkedIn profil URL'ni ekle
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFD700]  transition-colors duration-300"
      >
        <FaLinkedin size={300} />
      </a>

      {/* Gmail */}
      <a
        href="mailto:mertayhandev@gmail.com" // Mail adresini ekle
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#FFD700]  transition-colors duration-300"
      >
        <HiOutlineMail size={300} />
      </a>
    </div>
  );
};

export default SocialMedia;
