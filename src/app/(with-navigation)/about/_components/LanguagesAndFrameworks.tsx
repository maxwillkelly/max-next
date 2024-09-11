import ExpoIcon from "./languages/ExpoIcon";
import ExpressIcon from "./languages/ExpressIcon";
import GraphQLIcon from "./languages/GraphQLIcon";
import GrpcIcon from "./languages/GrpcIcon";
import LanguageCard from "./languages/LanguageCard";
import RustIcon from "./languages/RustIcon";
import {
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  SvelteOriginal,
  VuejsOriginal,
  TailwindcssOriginal,
  NodejsOriginal,
  NestjsOriginal,
  DockerOriginal,
  CsharpOriginal,
  PostgresqlOriginal,
  MysqlOriginal,
  MongodbOriginal,
  ElectronOriginal,
  COriginal,
  CplusplusOriginal,
  JavaOriginal,
  PythonOriginal,
  ScalaOriginal,
  MaterialuiPlain,
  NextjsOriginal,
} from "devicons-react";
import Image from "next/image";
import React from "react";

const LanguagesAndFrameworks = () => (
  <div className="flex w-full flex-col items-center gap-4 pt-40 text-center">
    <h2 className="text-lg font-bold sm:text-2xl md:text-3xl lg:text-4xl">
      Languages and Frameworks
    </h2>
    <p className="p-4 sm:text-lg sm:leading-8 lg:px-48">
      I have experience in a wide range of languages and frameworks, from
      low-level languages like C, to mordern web frameworks like React and
      Next.js.
    </p>
    <h3 className="p-4">
      Built for the front-end and full-stack, my bread and butter
    </h3>
    <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
      <LanguageCard
        title="JavaScript"
        icon={<JavascriptOriginal size={64} />}
      />
      <LanguageCard
        title="TypeScript"
        icon={<TypescriptOriginal size={64} />}
      />
      <LanguageCard title="React" icon={<ReactOriginal size={64} />} />
      <LanguageCard title="Next.js" icon={<NextjsOriginal size={64} />} />
      <LanguageCard title="Svelte" icon={<SvelteOriginal size={64} />} />
      <LanguageCard title="Vue.js" icon={<VuejsOriginal size={64} />} />
      <LanguageCard title="Material UI" icon={<MaterialuiPlain size={64} />} />
      <LanguageCard
        title="Tailwind CSS"
        icon={<TailwindcssOriginal size={64} />}
      />
    </div>
    <h3 className="">Back-end tools and frameworks</h3>
    <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
      <LanguageCard title="Node.js" icon={<NodejsOriginal size={64} />} />
      <LanguageCard title="Express" icon={<ExpressIcon />} />
      <LanguageCard title="NestJS" icon={<NestjsOriginal size={64} />} />
      <LanguageCard title="GraphQL" icon={<GraphQLIcon />} />
      <LanguageCard title="gRPC" icon={<GrpcIcon />} />
      <LanguageCard title="Docker" icon={<DockerOriginal size={64} />} />
      <LanguageCard title="C#" icon={<CsharpOriginal size={64} />} />
      <LanguageCard
        title=".NET"
        icon={
          <Image src="/dotnet.svg" alt=".NET logo" width={64} height={64} />
        }
      />
    </div>
    <h3>Databases</h3>
    <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
      <LanguageCard
        title="PostgresSQL"
        icon={<PostgresqlOriginal size={64} />}
      />
      <LanguageCard title="MySQL" icon={<MysqlOriginal size={64} />} />
      <LanguageCard title="MongoDB" icon={<MongodbOriginal size={64} />} />
    </div>
    <h3>Mobile and native development</h3>
    <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
      <LanguageCard title="React Native" icon={<ReactOriginal size={64} />} />
      <LanguageCard title="Expo" icon={<ExpoIcon />} />
      <LanguageCard title="Electron" icon={<ElectronOriginal size={64} />} />
    </div>
    <h3 className="">Other languages I&apos;ve dabbled in</h3>
    <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3 p-8 sm:gap-6">
      <LanguageCard title="C" icon={<COriginal size={64} />} />
      <LanguageCard title="C++" icon={<CplusplusOriginal size={64} />} />
      <LanguageCard title="Java" icon={<JavaOriginal size={64} />} />
      <LanguageCard title="Python" icon={<PythonOriginal size={64} />} />
      <LanguageCard title="Scala" icon={<ScalaOriginal size={64} />} />
      <LanguageCard title="Rust" icon={<RustIcon />} />
    </div>
  </div>
);

export default LanguagesAndFrameworks;
