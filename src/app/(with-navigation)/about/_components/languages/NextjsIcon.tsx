"use client";

import { Skeleton } from "@nextui-org/react";
import { NextjsOriginal } from "devicons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const NextJSLangaugeCard = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="size-16 rounded-full" />;

  return (
    <NextjsOriginal
      fill={resolvedTheme === "dark" ? "white" : undefined}
      className="text-white"
      size={64}
    />
  );
};

export default NextJSLangaugeCard;
