function MeetupDetail(props) {
  return (
    <section className="bg-white my-4 mx-auto text-center shadow-md p-blue">
      <div className="w-full h-80 overflow-hidden rounded-t-md">
        <img alt={props.title} src={props.image} className="w-full object-cover"/>
      </div>
      <h2 className="m-4">{props.title}</h2>
      <address className="m-4">{props.address}</address>
      <p className="m-4 pb-4">{props.description}</p>
    </section>
  );
}

export default MeetupDetail