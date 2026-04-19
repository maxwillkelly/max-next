"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@heroui/react";

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
          isIconOnly
          as="a"
          color="danger"
          variant="shadow"
          href={url ?? ""}
          rel="noopener noreferrer"
          target="_blank"
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
            href={url ?? ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ArrayButtonDropdown;
