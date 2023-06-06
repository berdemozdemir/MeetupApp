import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  async function addMeetupHandler(newMeetup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

  }

  return <NewMeetupForm onAddNewMeetup={addMeetupHandler} />;
}

export default NewMeetup;
