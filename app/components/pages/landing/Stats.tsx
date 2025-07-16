import Stat from "./Stat";

export default function Stats() {
  return (
    <section className="bg-[#16385B] text-[#ffffff] py-20 px-6 flex flex-col items-center justify-center sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center flex-col gap-24 md:flex-row">
          <Stat
            stat="3,000+"
            title="Vents Cleaned"
            desc="We&apos;ve worked in everything from apartments to big custom homes."
          />
          <Stat
            stat="100%"
            title="Flat-Rate Pricing"
            desc="What we quote is what you pay. No surprises, no pressure."
          />
          <Stat
            stat="5-Star"
            title="Rated Across KC"
            desc="Trusted in over 25 cities across Missouri and Kansas."
          />
        </div>
      </div>
    </section>
  );
}