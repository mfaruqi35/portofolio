"use client";

import { useState } from "react";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Works", href: "#works" },
    { name: "About Me", href: "#about-me" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-faruqi/",
      type: "link",
    },
    { icon: "Instagram", href: "", type: "link" },
    { icon: "Email", type: "link" },
  ];
}
