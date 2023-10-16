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
import { Tooltip } from "@nextui-org/tooltip";
import { DownloadCloud, Github, Linkedin, Mail, Menu, X } from "lucide-react";
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
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          icon={(isOpen) => (isOpen ? <X /> : <Menu />)}
        />
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="center">
        <NavbarBrand as={NextLink} href="/">
          <p className="font-bold text-inherit">Max Kelly</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
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
                color="foreground"
                link={link}
                size="lg"
                onClick={() => setIsMenuOpen(false)}
              />
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent className="hidden xs:flex" justify="end">
        <Tooltip content="Download CV" placement="bottom">
          <Button
            as={Link}
            href="/cv-feburary-2022.pdf"
            isExternal
            isIconOnly
            size="sm"
            variant="light"
            aria-label="Download CV"
          >
            <DownloadCloud />
          </Button>
        </Tooltip>
        <Tooltip content="Email me" placement="bottom">
          <Button
            as={Link}
            isExternal
            href="mailto:maxwill.kelly@gmail.com"
            isIconOnly
            size="sm"
            variant="light"
            aria-label="Email me"
          >
            <Mail />
          </Button>
        </Tooltip>
        <Tooltip content="Github" placement="bottom">
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
        </Tooltip>
        <Tooltip content="LinkedIn" placement="bottom">
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
        </Tooltip>
        <DarkModeDropdown />
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;
