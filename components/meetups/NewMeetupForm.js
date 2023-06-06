import { useRef } from "react";

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

    router.push("/");
  }

  return (
    <form onSubmit={submitHandler} className="shadow-2xl p-2 rounded">
      <div className="flex flex-col [&>label]:my-2 [&>label]:font-bold [&>label]:text-2xl [&>input]:border-2 [&>input]:border-solid [&>input]:p-1">
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
          className="border-2 border-solid "
          ref={descriptionInputRef}
        />
      </div>
      <div className="text-right mt-4">
        <button className="bg-[#8f1a47] py-2 px-3 text-white rounded font-bold mr-1 cursor-pointer hover:bg-[#a50e48] hover:border-[#a50e48]">
          Add Meetup
        </button>
      </div>
    </form>
  );
}

export default NewMeetupForm;
