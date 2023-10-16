import AboutHeroCard from "./hero/AboutHeroCard";

const AboutHero = () => (
  <div className="grid max-w-4xl place-items-center gap-12 py-6 md:grid-cols-3 md:px-32 lg:gap-24">
    <AboutHeroCard headerText="2+" bodyText="Years experience" />
    <AboutHeroCard headerText="8+" bodyText="Languages" />
    <AboutHeroCard headerText="20+" bodyText="Tools" />
  </div>
);

export default AboutHero;
