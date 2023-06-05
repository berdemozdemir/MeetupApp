import { useRef } from "react";

import classes from "./NewMeetupFrom.module.css";
import { useRouter } from "next/router";

function NewMeetupForm(props) {
  const router = useRouter();

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const formData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddNewMeetup(formData);

    router.push("/")
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputs}>
        <label htmlFor="title">Meetup Title</label>
        <input id="title" required type="text" ref={titleInputRef} />

        <label htmlFor="image">Meetup Image</label>
        <input id="image" required type="text" ref={imageInputRef} />

        <label htmlFor="address">Address</label>
        <input id="address" required type="text" ref={addressInputRef} />

        <label htmlFor="description">Description</label>
        <textarea
          rows={5}
          id="description"
          required
          type="text"
          ref={descriptionInputRef}
        />
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
}

export default NewMeetupForm;
