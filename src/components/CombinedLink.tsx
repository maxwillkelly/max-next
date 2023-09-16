import { Link, LinkProps } from "@nextui-org/link";
import NextLink from "next/link";
import React from "react";

export type Link = {
  name: string;
  href: string;
};

interface Props extends LinkProps {
  link: Link;
}

const CombinedLink = ({ link: { name, href }, ...other }: Props) => {
  return (
    <Link href={href} as={NextLink} {...other}>
      {name}
    </Link>
  );
};

export default CombinedLink;
