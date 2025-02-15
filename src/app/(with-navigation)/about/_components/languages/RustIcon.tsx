"use client";

import { Skeleton } from "@heroui/react";
import { RustOriginal } from "devicons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const RustIcon = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="size-16 rounded-full" />;

  if (resolvedTheme === "dark") {
    return <Image src="/rust-dark.svg" alt="Rust" width={64} height={64} />;
  }

  return <RustOriginal size={64} />;
};

export default RustIcon;
