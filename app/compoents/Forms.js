"use client";

import { useState } from "react";

export default function Form() {
  const { promptInput, setPromptInput } = useState("");
  const { resultText, setResultText } = useState("");
  const { isLoading, setIsLoad } = useState(false);
}
