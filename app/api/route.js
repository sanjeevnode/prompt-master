import User from "@models/user";
import { connectToDatabase } from "@utils/database";

export async function GET(req) {
  try {
    await connectToDatabase();

    // const user = await User.create({
    //   email: "test@gmail.com",
    //   username: "test1231",
    //   image: "https://test.com/test.jpg",
    // });

    const user = await User.findOne({
      email: "test@gmail.com",
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
