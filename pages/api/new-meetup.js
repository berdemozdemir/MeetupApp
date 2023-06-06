import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    let client;

    const url =
      "mongodb+srv://emre:7z1GLTNv1BnIPz0K@cluster0.9etgvdy.mongodb.net/";

    try {
      client = new MongoClient(url);
      await client.connect();
    } catch {
      res.status(422).json({ message: "Couldn't connect to the database" });
    }

    const db = client.db("meetups");

    const myMeetups = db.collection("myMeetups");

    await myMeetups
      .insertOne(data)
      .then(() => {
        res.status(201).json({ message: "Meetup inserted.." });
      })
      .catch((err) => {
        res.status(423).json({ message: err.message });
      });

    client.close();
  }
}

export default handler;
