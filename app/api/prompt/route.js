import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";
export const dynamic = "force-dynamic";
export const GET = async (req) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
