"use client";

import Image from "next/image";

const GrpcIcon = () => {
  return (
    <>
      <Image
        src="/grpc-light.png"
        alt="gRPC logo"
        className="size-16 rounded-full dark:hidden"
        width={64}
        height={64}
      />
      <Image
        src="/grpc-dark.svg"
        alt="gRPC logo"
        className="hidden size-16 rounded-full dark:block"
        width={64}
        height={64}
      />
    </>
  );
};

export default GrpcIcon;
