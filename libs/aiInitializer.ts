import OpenAI from "openai";

export const client = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY || "",
  organization: process.env.OPEN_AI_ORG_ID,
  project: process.env.OPEN_AI_PROJECT_ID,
});

export const assistant = async () => {
  if (process.env.OPEN_AI_ASSISTANT_ID && client) {
    return await client.beta.assistants.retrieve(
      process.env.OPEN_AI_ASSISTANT_ID,
    );
  }
};
