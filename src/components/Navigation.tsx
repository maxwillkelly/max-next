"use client";

import CombinedLink, { LinkAttributes } from "./CombinedLink";
import DarkModeDropdown from "./navigation/DarkModeDropdown";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Github, Linkedin, Menu, X } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={(isOpen) => (isOpen ? <X /> : <Menu />)}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand as={NextLink} href="/">
          <p className="font-bold text-inherit">Max Kelly</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand as={NextLink} href="/">
          <p className="font-bold text-inherit">Max Kelly</p>
        </NavbarBrand>
        {items.map((link) => (
          <NavbarItem key={link.name} isActive={link.href === pathname}>
            <CombinedLink link={link} color="foreground" />
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
          isExternal
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
          isExternal
          isIconOnly
          size="sm"
          variant="light"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/maxwillkelly/"
        >
          <Linkedin />
        </Button>
        <DarkModeDropdown />
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
