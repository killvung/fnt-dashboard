import { connectToDatabase } from "./mongodb";

export default async () => {
    const { db } = await connectToDatabase();

    const routes = await db
        .collection("routes")
        .find({})
        .limit(20)
        .toArray();

    return routes
}
