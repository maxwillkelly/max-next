"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import CombinedLink, { LinkAttributes } from "./CombinedLink";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";

const Navigation = () => {
  const items: LinkAttributes[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Experience",
      href: "/experience",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Max Kelly</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Max Kelly</p>
        </NavbarBrand>
        {items.map((link) => (
          <NavbarItem key={link.name} isActive={link.href === pathname}>
            <CombinedLink link={link} />
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenu>
          {items.map((link) => (
            <NavbarMenuItem key={link.name}>
              <CombinedLink
                className="w-full"
                link={link}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              />
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          target="_blank"
          href="https://github.com/maxwillkelly"
          isIconOnly
          size="sm"
          variant="light"
          aria-label="Github"
        >
          <Github />
        </Button>
        <Button
          as={Link}
          target="_blank"
          isIconOnly
          size="sm"
          variant="light"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/maxwillkelly/"
        >
          <Linkedin />
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
