import Prompt from "@models/prompt";
import { connectToDatabase } from "@utils/database";
export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
export const dynamic = "force-dynamic";
