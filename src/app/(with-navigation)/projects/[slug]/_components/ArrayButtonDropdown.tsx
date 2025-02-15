"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Tooltip,
} from "@heroui/react";
import NextLink from "next/link";

type Item = {
  name: string | null;
  url: string | null;
};

type Props = {
  items: Item[] | null;
  dropdownAriaLabel: string;
  buttonTooltipTitle: string;
  children: React.ReactNode;
};

const ArrayButtonDropdown = ({
  items,
  dropdownAriaLabel,
  buttonTooltipTitle,
  children,
}: Props) => {
  if (!items) return null;

  if (items.length === 1) {
    const { url } = items[0];

    return (
      <Tooltip content={buttonTooltipTitle} placement="bottom">
        <Button
          aria-label={buttonTooltipTitle}
          isExternal
          isIconOnly
          as={Link}
          color="danger"
          variant="shadow"
          href={url ?? ""}
        >
          {children}
        </Button>
      </Tooltip>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          aria-label={buttonTooltipTitle}
          isIconOnly
          color="danger"
          variant="shadow"
        >
          {children}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label={dropdownAriaLabel}>
        {items.map(({ name, url }) => (
          <DropdownItem
            key={name ?? ""}
            as={NextLink}
            target="_blank"
            rel="noopener noreferrer"
            {...({
              href: url ?? "",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any)}
          >
            {name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ArrayButtonDropdown;
