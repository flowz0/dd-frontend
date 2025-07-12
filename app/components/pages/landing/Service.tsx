import Image, { StaticImageData } from "next/image";

interface ServiceProps {
  img: StaticImageData;
  title: string;
  desc: string;
}

export default function Service({ img, title, desc }: ServiceProps) {
  return (
    <div className="bg-[hsl(0,0%,100%)] py-12 px-8 max-w-sm rounded-lg flex flex-col items-center shadow shadow-[hsl(0,0%,80%)]">
      <Image
        src={img}
        alt={title + "image"}
        className="rounded-lg h-20 w-auto"
        draggable={false}
      />
      <h3 className="mt-8 text-xl font-semibold text-center sm:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-center">
        {desc}
      </p>
    </div>
  );
}