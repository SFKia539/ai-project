"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) {
      alert("Please enter your question");
      return;
    }

    setIsGenerating(true);
    setResult("Generating...");

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput: prompt,
        }),
      });

      const data = await response.json();
      console.log(data);
      setResult(data.reply || "No response received.");
    } catch (error) {
      console.error("Error:", error);

      setResult("Error occurred while generating");
    } finally {
      setIsGenerating(false);
    }
  };
  console.log(result);
  // useEffect(() => {
  //   handleGenerate();
  // }, [prompt]);

  // TODO make into a card for p and rember not to touch the api/ route
  return (
    <>
      <div className="flex flexbox justify-center align-middle">
        <div className="lg:w-1/2 2x1:w-1/3 p-8 rounded-md bg-black text-cyan-400 text-center">
          <h1 className="text-3xl font-bold md-6">Welcome to SENTINEL X</h1>
          <div id="resultContainer" className="mt-4 h-48 overflow-y-auto">
            <p className="bg-cyan-400 text-black text-lg md-2">
              Hi what can i help you with
            </p>
            <p id="resultText" className="whitespace-pre-line">
              {result}
            </p>
          </div>
          <input
            type="text"
            value={prompt}
            id="promptInput"
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-2 rounded-3xl bg-black placeholder-slate-50"
            placeholder="Enter Your Question Here"
          />

          <div className="flex justify-center mt-4 ">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              id="generateBtn"
              className="w-1/2 px-4 py-2 m-4 rounded-2xl bg-gray-500"
            >
              {isGenerating ? "Generating..." : "Generate"}
            </button>
            <button
              onClick={() => setPrompt("")}
              id="stopBtn"
              disabled=""
              className="w-1/2 px-4 py-2 m-4 rounded-2xl bg-gray-500 border-white text-cyan-400"
            >
              stop
            </button>
          </div>
        </div>
      </div>
    </>

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <header>
    //     <h1>SENTINEL X</h1>
    //   </header>
    //   <main>

    //     <Forms />
    //   </main>
    //   <footer></footer>
    // </div>
  );
}
