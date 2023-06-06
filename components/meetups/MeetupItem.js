import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <li className="my-4 mx-auto shadow-md">
      <div className="w-full h-80 overflow-hidden rounded-t-md">
        <img
          alt={props.title}
          src={props.image}
          className="w-full object-cover"
        />
      </div>
      <div className="text-center h-auto">
        <h2>{props.title}</h2>
        <address>{props.address}</address>
      </div>
      <div className="p-6 text-center">
        <button
          onClick={showDetailsHandler}
          className="cursor-pointer text-[#77002e] border border-[#77002e] border-solid bg-transparent py-2 px-6 rounded-[4px] hover:bg-[#ffe2ed] active:bg-[#ffe2ed]"
        >
          Show Details
        </button>
      </div>
    </li>
  );
}

export default MeetupItem;
