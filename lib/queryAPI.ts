import openai from "./chatgpt";

const query = async (prompt: string, model: string) => {
  const res = openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      n: 1,
      max_tokens: 1000,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => {
      console.log({ err });
      console.log(
        `ChatGPT was unable to find an answer for that ${err.message}`
      );
    });

  return res;
};

export default query;
