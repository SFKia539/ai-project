"use client";

import Image from "next/image";

export default function myGallery() {
  return (
    <div>
      <h1 className="bg-black text-cyan-400 text-center text-3xl m-5 ">
        Welcome To My Personal My Gallery
      </h1>
      <div>
        <p className="text-cyan-400 text-center text-lg ">
          These are all pictures from a trip i went on
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8 m-8 ">
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0276.png"
          alt="Fishery rd turning night"
        />
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0286.png"
          alt="Fishery rd night time"
        />
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0283.png"
          alt="Fishery rd night time"
        />
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0547.png"
          alt="Norris Point night time"
        />
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0414.png"
          alt="Norris Point day at the beach"
        />
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0352.png"
          alt="Out in the bay"
        />
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0316.png"
          alt="Rocky Harbour during lowtide"
        />
        <img
          className="border-4 border-gray-800"
          src="/images/IMG_0322.png"
          alt="Rocky Harbour during lowtide"
        />
      </div>
    </div>
  );
}
