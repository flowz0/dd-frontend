import Carousel from "./Carousel";
import Img1 from "@/public/gallery/1.png";
import Img2 from "@/public/gallery/2.png";
import Img3 from "@/public/gallery/3.png";
import Img4 from "@/public/gallery/4.png";
import Img5 from "@/public/gallery/5.png";
import Img6 from "@/public/gallery/6.png";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
];

export default function BeforeAfterPics() {
  return (
    <section className="bg-[#ffffff]">
      <div className="py-20 px-6 max-w-7xl mx-auto sm:py-32">
        <h2 className="text-3xl font-semibold text-center sm:text-4xl">
          See The Duct Daddy
          <br className="hidden sm:inline-block" />
          {" "} Difference
        </h2>
        <p className="text-center max-w-xl mx-auto mt-4">
          Real photos from homes serviced in Oak Grove and all across Kansas City, MO.
        </p>
        <Carousel images={images} />
      </div>
    </section>
  );
}