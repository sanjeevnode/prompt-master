import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";

export const POST = async (req, res) => {
  try {
    const { prompt, userId, tag } = await req.json();
    await connectToDatabase();
    const newPrompt = await Prompt.create({
      prompt,
      creator: userId,
      tag,
    });

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new Response(error.message, {
      status: 500,
    });
  }
};
