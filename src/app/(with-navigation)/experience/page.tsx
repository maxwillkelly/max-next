import ExperienceTabs, {
  type ExperienceTabOptions,
} from "./_components/ExperienceTabs";

const ExperiencePage = async (props: {
  searchParams: Promise<{ tab: ExperienceTabOptions | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const { tab } = searchParams;

  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex min-w-full flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Experience
        </h1>
        <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">
          Here are some of the companies I have worked for, where I went to
          school and what I have been up to in my spare time.
        </p>
        <div className="pt-2">
          <ExperienceTabs tab={tab} />
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
