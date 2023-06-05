import { MongoClient } from "mongodb";

export async function connectToDB(dbName) {
  const url = process.env.DB_URL;

  const client = new MongoClient(url);
  await client.connect();

  const db = client.db(dbName);

  return { db, client };
}
