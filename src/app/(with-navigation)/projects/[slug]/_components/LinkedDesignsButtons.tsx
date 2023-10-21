"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { Figma } from "lucide-react";
import NextLink from "next/link";

type LinkedDesign = {
  name: string | null;
  url: string | null;
};

interface Props {
  linkedDesigns: LinkedDesign[] | null;
}

const LinkedDesignsButtons = ({ linkedDesigns }: Props) => {
  if (!linkedDesigns) return null;

  if (linkedDesigns.length === 1) {
    return (
      <Tooltip content="Figma" placement="bottom">
        <Button
          isExternal
          isIconOnly
          as={Link}
          color="danger"
          variant="shadow"
          href={linkedDesigns[0].url || ""}
        >
          <Figma className="p-0.5" />
        </Button>
      </Tooltip>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly color="danger" variant="shadow">
          <Figma className="p-0.5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Figma designs">
        {linkedDesigns.map((design) => (
          <DropdownItem
            key={design.name || ""}
            as={NextLink}
            target="_blank"
            rel="noopener noreferrer"
            {...({
              href: design.url || "",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any)}
          >
            {design.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LinkedDesignsButtons;
