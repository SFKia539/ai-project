"use client";

import Image from "next/image";

export default function myGallery() {
  return (
    <div>
      <h1 className="bg-black text-cyan-400 text-center text-3xl m-5 ">
        Welcome To My Personal My Gallery
      </h1>
      <div>
        <Image />
      </div>
    </div>
  );
}
