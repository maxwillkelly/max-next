import { Link, type LinkProps } from "@heroui/react";
import NextLink from "next/link";

export type LinkAttributes = {
  name: string;
  href: string;
};

interface Props extends LinkProps {
  link: LinkAttributes;
}

const CombinedLink = ({ link: { name, href }, ...other }: Props) => {
  return (
    <Link href={href} as={NextLink} {...other}>
      {name}
    </Link>
  );
};

export default CombinedLink;
