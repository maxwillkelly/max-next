import { Link, type LinkProps } from "@heroui/react";

export type LinkAttributes = {
  name: string;
  href: string;
};

interface Props extends LinkProps {
  link: LinkAttributes;
}

const CombinedLink = ({ link: { name, href }, ...other }: Props) => {
  return (
    <Link href={href} {...other}>
      {name}
    </Link>
  );
};

export default CombinedLink;
