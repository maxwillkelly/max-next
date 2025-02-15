"use client";

import { Skeleton } from "@heroui/react";
import { ExpressOriginal } from "devicons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ExpressIcon = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="size-16 rounded-full" />;

  return (
    <ExpressOriginal
      size={64}
      fill={resolvedTheme === "dark" ? "white" : undefined}
    />
  );
};

export default ExpressIcon;
