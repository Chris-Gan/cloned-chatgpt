import openai from "./chatgpt";

const query = async (prompt: string, model: string) => {
  const res = await openai
    .createChatCompletion({
      model: model || "gpt-4", // Use a valid model, like "gpt-4"
      messages: [
        {
          role: "user",
          content: prompt, // Corrected prompt
        },
      ],
      temperature: 0.9,
      max_tokens: 1000,
    })
    .then((res) => {
      console.log({ res });
      return res.data.choices[0].message?.content ?? "";
    })
    .catch((err) => {
      console.log({ err });
      console.log(
        `ChatGPT was unable to find an answer for that ${err.message}`
      );
    });

  return res;
};

export default query;
