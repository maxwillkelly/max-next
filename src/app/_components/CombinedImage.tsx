import { Image, ImageProps } from "@nextui-org/image";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type Props = ImageProps & NextImageProps;

const CombinedImage = (props: Props) => {
  return <Image as={NextImage} {...props} />;
};

export default CombinedImage;
