import { ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";
import { connectToDB } from "../../services/db";

function MeetupDetailPage(props) {
  return (
    <MeetupDetail
      description={props.meetupData.description}
      address={props.meetupData.address}
      title={props.meetupData.title}
      image={props.meetupData.image}
    />
  );
}

export default MeetupDetailPage;

export async function getStaticPaths() {
  const { client, db } = await connectToDB("meetups");
  const myCollection = db.collection("myMeetups");

  const meetups = await myCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const { client, db } = await connectToDB("meetups");
  const myCollection = db.collection("myMeetups");

  const selectedMeetup = await myCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        id: selectedMeetup._id.toString(),
      },
    },
  };
}
