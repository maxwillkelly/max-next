import React from "react";

const AboutHero = () => (
  <div className="grid grid-cols-3 place-items-center pt-16 text-center md:px-32">
    <div className="grid place-items-center">
      <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
        2+
      </h2>
      <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
        Years experience
      </p>
    </div>
    <div className="grid place-items-center">
      <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
        8+
      </h2>
      <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
        Languages
      </p>
    </div>
    <div className="grid place-items-center">
      <h2 className="text-5xl leading-normal text-zinc-900 dark:text-zinc-100">
        20+
      </h2>
      <p className="text-sm leading-normal text-zinc-600 dark:text-zinc-300">
        Tools
      </p>
    </div>
  </div>
);

export default AboutHero;
