import Link from "next/link";

export default function NavBar() {
  return (
    <header className="text-black bg-cyan-400 p-4 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ethan M</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/chatbot">Chatbot</Link>
            </li>
            <li>
              <Link href="/form">Form</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    // <nav className="sticky">
    //   <ul>
    //     <li className="flex justify-evenly bg-cyan-400 text-black p-8">
    //       <Link href="/">Home</Link>
    //       <Link href="/about">Aboutus</Link>
    //       <Link href="/gallery">Gallery</Link>
    //       <Link href="/chatbot">Chatbot</Link>
    //       <Link href="/form">Form</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}
