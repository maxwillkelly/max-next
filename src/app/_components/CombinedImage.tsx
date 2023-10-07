import { Image, ImageProps } from "@nextui-org/image";
import NextImage from "next/image";

const CombinedImage = (props: ImageProps) => {
  return <Image as={NextImage} alt="" {...props} />;
};

export default CombinedImage;
