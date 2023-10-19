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
import { GithubIcon } from "lucide-react";
import NextLink from "next/link";

type GithubRepo = {
  name: string | null;
  url: string | null;
};

interface Props {
  githubRepos: GithubRepo[] | null;
}

const GithubRepoButtons = ({ githubRepos }: Props) => {
  if (!githubRepos) return null;

  if (githubRepos.length === 1) {
    return (
      <Tooltip content="Github repository" placement="bottom">
        <Button
          isExternal
          isIconOnly
          as={Link}
          color="danger"
          variant="shadow"
          href={githubRepos[0].url || ""}
        >
          <GithubIcon className="p-0.5" />
        </Button>
      </Tooltip>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly color="danger" variant="shadow">
          <GithubIcon className="p-0.5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Github repositories">
        {githubRepos.map((repo) => (
          <DropdownItem
            key={repo.name || ""}
            as={NextLink}
            target="_blank"
            rel="noopener noreferrer"
            {...({
              href: repo.url || "",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any)}
          >
            {repo.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default GithubRepoButtons;
