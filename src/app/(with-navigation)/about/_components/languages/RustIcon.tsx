"use client";

import { RustOriginal } from "devicons-react";
import Image from "next/image";

const RustIcon = () => {
  return (
    <>
      <RustOriginal className="dark:hidden" size={64} />
      <Image
        src="/rust-dark.svg"
        alt="Rust"
        className="hidden dark:block"
        width={64}
        height={64}
      />
    </>
  );
};

export default RustIcon;
