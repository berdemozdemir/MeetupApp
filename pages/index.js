import MeetupList from "../components/meetups/MeetupList";
import { connectToDB } from "../services/db";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
  const { db, client } = await connectToDB("meetups");
  const myCollection = db.collection("myMeetups");

  const meetups = await myCollection.find().toArray();
  const reverseMeetups = meetups.reverse();
  console.log("test", { meetups });
  client.close();

  return {
    props: {
      meetups: reverseMeetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },

    revalidate: 3600,
  };
}

export default HomePage;
