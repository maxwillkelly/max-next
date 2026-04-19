"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { type SetStateAction } from "react";

const DarkModeDropdown = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button aria-label="Change colour scheme" isIconOnly variant="light">
          {resolvedTheme === "light" ? <Sun /> : <Moon />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Toggle themes"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={theme ? [theme] : []}
        onSelectionChange={(newTheme) => {
          if (newTheme === "all") return;
          setTheme(newTheme.values().next().value as SetStateAction<string>);
        }}
      >
        <DropdownItem key="light">Light</DropdownItem>
        <DropdownItem key="dark">Dark</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DarkModeDropdown;
