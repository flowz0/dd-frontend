import CTA from "@/app/components/CTA";
import AllBlogs from "@/app/components/pages/blog/AllBlogs";
import FeaturedBlogs from "@/app/components/pages/blog/FeaturedBlogs";
import Header from "@/app/components/Header";
import FAQs from "@/app/components/pages/landing/FAQs";

export default function Blog() {
  return (
    <>
      <article>
        <div>
          <Header subtitle="Explore expert tips, seasonal advice, and must-know facts about air quality, duct maintenance, and home comfort straight from Kansas City's duct cleaning professionals." gradientBg>
            Fresh Insights for a Cleaner Home
          </Header>
          <div className="bg-[#ffffff] px-6">
            <div className="pt-8 pb-20 flex flex-col gap-y-16 max-w-7xl mx-auto sm:pt-12">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Featured blogs</h2>
                <FeaturedBlogs />
              </div>
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">All blogs</h2>
                <AllBlogs />
              </div>
            </div>
          </div>
        </div>
      </article>
      <FAQs />
      <CTA />
    </>
  );
}