"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Skeleton } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DarkModeDropdown = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="h-10 w-10 rounded-xl" />;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light">
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
          setTheme(newTheme.values().next().value);
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
