import { useRouter } from "next/router";

import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.meetup}>
      <div className={classes.image}>
        <img alt={props.title} src={props.image} />
      </div>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <address>{props.address}</address>
      </div>
      <div className={classes.actions}>

        <button onClick={showDetailsHandler}>Show Details</button>
      </div>
    </li>
  );
}

export default MeetupItem;
