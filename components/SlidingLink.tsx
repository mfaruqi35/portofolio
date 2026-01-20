"use client";
import Link from "next/link";
import React from "react";

interface SlidingLinkProps {
  text: string;
  hoverText?: string;
  href: string;
  newTab?: boolean;
}

const SlidingLink: React.FC<SlidingLinkProps> = ({
  text,
  hoverText,
  href,
  newTab,
}) => {
  return (
    <Link href={href} target={newTab ? "_blank" : "_self"}>
      <div className="transition-transform duration-500 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-full">
        {text}
      </div>
      <div className="absolute top-0 left-0 transition-transform duration-500 ease-[0.76, 0, 0.24, 1] translate-y-full group-hover:translate-y-0 text-blue-500">
        <span className="block">{hoverText || text}</span>
      </div>
    </Link>
  );
};

export default SlidingLink;
