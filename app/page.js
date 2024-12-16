"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./compoents/Navbar";
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-center py-20">
        <div className="container mx-auto">
          <h2 className="  text-cyan-400 text-4xl font-bold mb-4">
            Hi my is name is, Ethan Major
          </h2>
          <p className="  text-cyan-400 text-lg mb-8">
            Things I’ve learned while taking while taking this course. I thought
            it would be very easy i was very wrong. but have enjoyed learning
            React, Nextjs, Tailwind, CSS, WordPress and Elementor. I enjoyed
            learning and working with everyone and i have learned a lot during
            this course.
          </p>
          <link href="/images/gallery" />
          <a className="bg-black text-cyan-400 px-6 py-2 rounded hover:bg-blue-600">
            To view my gallery
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className=" text-cyan-400 text-3xl font-bold mb-4">About Me</h2>
          <p className=" text-cyan-400 text-lg max-w-2xl mx-auto">
            A little about me: I’m a junior web developer with a background in
            mechanics, which I studied for four years. I also have a passion for
            sharks, marine life, and photography. As a web developer, I’ve
            gained experience working with technologies such as WordPress,
            Elementor, Next.js, React, CSS, and Tailwind.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="text-black bg-cyan-400 py-20">
        <div className="container mx-auto text-center">
          <h2 className=" text-cyan-400 text-3xl font-bold mb-8"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Portfolio Items */}
            <div className="bg-black shadow-lg rounded-lg overflow-hidden">
              <img
                src="/images/IMG_0662.png"
                alt="foggy day in norris point"
                width="{400}"
                height="{300}"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl text-cyan-400">
                  Pictures I took while in Newfoundland
                </h3>
                <p className=" text-cyan-400">
                  I took this while i was in Newfoundland if you would to see
                  more please go to my gallery.
                </p>
              </div>
            </div>
            <div className="bg-black text-cyan-400 shadow-lg rounded-lg overflow-hidden">
              <img
                src="/images/IMG_0499.png"
                alt="day out on the water"
                width="{400}"
                height="{300}"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl">
                  The fog setting in Norris point Newfoundland
                </h3>
                <p className=" text-cyan-400">
                  If you would like to see more please go to my gallery to view
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact me section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4  text-cyan-400">
            Get In Touch
          </h2>
          <p className="text-lg mb-8  text-cyan-400">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <a
            href="ethanmajor117@gmail.com"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
