export async function POST(request) {
  try {
    const { userInput } = await request.json();
    console.log(userInput, process.env.OPENAI_API_KEY);

    // Communicate with OpenAI API

    const response = await fetch(process.env.NEXT_PUBLIC_OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: userInput }],
      }),
    });

    const data = await response.json();
    console.log("data", data);

    const reply = data.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), { status: 200 });
  } catch (error) {
    console.error("Error connecting to OpenAI API:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      { status: 400 }
    );
  }
}
