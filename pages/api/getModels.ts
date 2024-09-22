// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await openai.listModels().then((res) => res.data.data);

  // Filter only valid chat models (e.g., GPT-4, GPT-3.5-Turbo)
  const validModels = models.filter((model) =>
    ["gpt-4", "gpt-4-32k", "gpt-3.5-turbo"].includes(model.id)
  );

  const modelOptions = validModels.map((model) => ({
    value: model.id,
    label: model.id,
  }));
  res.status(200).json({ modelOptions });
}
