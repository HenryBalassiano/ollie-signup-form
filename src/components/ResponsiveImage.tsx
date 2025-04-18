"use client";
import Image from "next/image";

export default function ResponsiveImage() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-0">
      <Image
        src="https://placehold.co/600x400.png"
        alt="Pet signup visual"
        fill
        className="object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
        priority
      />
    </div>
  );
}
