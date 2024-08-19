import { Image, type ImageProps } from "@nextui-org/image";
import NextImage, { type ImageProps as NextImageProps } from "next/image";

type Props = ImageProps & NextImageProps;

const CombinedImage = (props: Props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image as={NextImage} {...props} />;
};

export default CombinedImage;
