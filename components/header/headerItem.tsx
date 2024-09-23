import Link from "next/link";
import React from "react";

interface HeaderItemProps {
  href: string;
  title: string;
}

const HeaderItem = ({ href, title }: HeaderItemProps) => {
  return (
    <Link href={href} style={{ color: "#FFD700" }} className='block py-2 pl-3
    text-xl hover:text-white/80'>
  {title}
  </Link>
  );
};

export default HeaderItem;
