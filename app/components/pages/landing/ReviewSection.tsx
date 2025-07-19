import { bottomRowReviews, topRowReviews } from "@/data/reviews";
import ReviewRow from "./ReviewRow";

export default function ReviewSection() {
  return (
    <section className="py-20 mx-auto relative sm:py-32">
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        What Our <span className="text-[#0080DB] font-bold">Customers</span> Are Saying
      </h2>
      <div className="[mask-image:_linear-gradient(to_right,_transparent_0,_#e6e6e6_96px,#e6e6e6_calc(100%-96px),_transparent_100%)] mt-8 flex flex-col gap-2 relative sm:mt-12 sm:[mask-image:_linear-gradient(to_right,_transparent_0,_#e6e6e6_256px,#e6e6e6_calc(100%-256px),_transparent_100%)]">
        <ReviewRow reviews={topRowReviews} direction="right" />
        <ReviewRow reviews={bottomRowReviews} direction="left" />
      </div>
    </section>
  );
}