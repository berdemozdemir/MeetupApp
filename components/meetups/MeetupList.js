import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className="list-none m-0 p-0">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
        />
      ))}
    </ul>
  )
}

export default MeetupList;
