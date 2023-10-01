const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="container flex min-w-full flex-col items-center gap-4 text-center">
          <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Projects
          </h1>
          <p className="max-w-6xl sm:text-lg sm:leading-8 lg:px-48">
            Subtitle
          </p>
          <div className="pt-2">{children}</div>
        </div>
      </section>
    );
  };
  
  export default ProjectsLayout;
  