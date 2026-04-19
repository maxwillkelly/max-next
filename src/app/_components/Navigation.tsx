"use client";

import CombinedLink, { type LinkAttributes } from "./CombinedLink";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button, Link, Skeleton, Tooltip } from "@heroui/react";
import { DownloadCloud, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DarkModeDropdown = dynamic(() => import("./navigation/DarkModeDropdown"), {
  ssr: false,
  loading: () => <Skeleton className="size-10 rounded-xl" />,
});

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
        <NavbarBrand>
          <Link className="font-bold text-inherit" color="foreground" href="/">
            Max Kelly
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <NavbarBrand>
          <Link className="font-bold text-inherit" color="foreground" href="/">
            Max Kelly
          </Link>
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
            as="a"
            href="/cv-october-2023.pdf"
            isIconOnly
            size="sm"
            variant="light"
            aria-label="Download CV"
            rel="noopener noreferrer"
            target="_blank"
          >
            <DownloadCloud />
          </Button>
        </Tooltip>
        <Tooltip content="Email me" placement="bottom">
          <Button
            as="a"
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
            as="a"
            href="https://github.com/maxwillkelly"
            isIconOnly
            size="sm"
            variant="light"
            aria-label="Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github />
          </Button>
        </Tooltip>
        <Tooltip content="LinkedIn" placement="bottom">
          <Button
            as="a"
            isIconOnly
            size="sm"
            variant="light"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/maxwillkelly/"
            rel="noopener noreferrer"
            target="_blank"
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
