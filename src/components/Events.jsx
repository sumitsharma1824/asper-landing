
import eventsData from "../data/eventsData";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="eventection" style={{backgroundColor:"white"}}>
      <h1 style={{color:"white"}}>Upcoming Events</h1>

      <div className="events_grid">
        {
          eventsData.map((event) => (
            <EventCard
            key={event.id}
            image={event.image}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))
        }
      </div>

      <button className="event_btn" style={{display:"flex", justifyContent:"center"}}>ATTEND TO IMPROVE </button>
    </div>
  );
}

export default Events;
