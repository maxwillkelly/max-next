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
import { FileDown } from "lucide-react";
import NextLink from "next/link";

type LinkedDocument = {
  name: string | null;
  url: string | null;
};

interface Props {
  linkedDocuments: LinkedDocument[] | null;
}

const LinkedDocumentsButtons = ({ linkedDocuments }: Props) => {
  if (!linkedDocuments) return null;

  if (linkedDocuments.length === 1) {
    const document = linkedDocuments[0];
    return (
      <Tooltip content={document.name} placement="bottom">
        <Button
          isExternal
          isIconOnly
          as={Link}
          color="danger"
          variant="shadow"
          href={document.url || ""}
        >
          <FileDown className="p-0.5" />
        </Button>
      </Tooltip>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly color="danger" variant="shadow">
          <FileDown className="p-0.5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Documents">
        {linkedDocuments.map((document) => (
          <DropdownItem
            key={document.name || ""}
            as={NextLink}
            target="_blank"
            rel="noopener noreferrer"
            {...({
              href: document.url || "",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any)}
          >
            {document.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LinkedDocumentsButtons;
