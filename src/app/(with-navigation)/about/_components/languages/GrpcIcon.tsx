"use client";

import { Skeleton } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GrpcIcon = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="size-16 rounded-full" />;

  return (
    <Image
      src={resolvedTheme === "dark" ? "/grpc-dark.svg" : "/grpc-light.png" }
      alt="gRPC logo"
      className="size-16 rounded-full"
      width={64}
      height={64}
    />
  );
};

export default GrpcIcon;
