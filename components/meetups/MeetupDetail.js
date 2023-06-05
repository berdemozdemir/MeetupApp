import classes from "./MeetupDetail.module.css"

function MeetupDetail(props) {
  return (
    <section className={classes.meetup}>
      <div className={classes.image}>
        <img alt={props.title} src={props.image} />
      </div>
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail