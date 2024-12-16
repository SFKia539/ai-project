"use client";

import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <head>
        <title>About Me | Your Name</title>
        <meta className="description" content="Learn more about Your Name." />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-cyan-400 text-4xl font-bold mb-4">About Me</h2>
          <p className="text-cyan-400 text-lg max-w-3xl mx-auto mb-8">
            Welcome! Im Ethan Major.
          </p>

          <p className="text-cyan-400 text-lg max-w-3xl mx-auto mb-8">
            My journey started with brief background or origin story. Today, I
            am driven by key motivators and strive to mission or vision.
          </p>

          <p className="text-cyan-400 text-lg max-w-3xl mx-auto">
            When I m not working, you can find me hobbies or interests. I m
            always eager to connect, collaborate, and explore new opportunities.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Skills & Expertise</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <li className="bg-white shadow rounded p-4">Skill 1</li>
            <li className="bg-white shadow rounded p-4">Skill 2</li>
            <li className="bg-white shadow rounded p-4">Skill 3</li>
            <li className="bg-white shadow rounded p-4">Skill 4</li>
          </ul>
        </div>
      </section> */}
    </div>
  );
}

// export default function About() {
//   return (
//     <div className="bg-black text-cyan-400">
//       <h1 className="bg-black text-cyan-400 text-5xl text-center m-5">
//         About Us
//       </h1>

//       <h2 className="bg-black text-cyan-400 text-3xl text-center m-5">
//         Welcome to our about Page
//       </h2>
//       <p className="text-center bg-black text-cyan-400 m-5 ">
//         We wanted to be able to bring an you an Ai that can translate text to
//         speech and speech to text, especially since. We are currently working
//         towards accomplishing our goal which is to be able to use text to speech
//         while using OpenAI the only difficult thing i have came across is to
//         convert that back speech to text.
//       </p>
//       <main></main>
//     </div>
//   );
// }
