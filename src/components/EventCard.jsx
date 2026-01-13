
function EventCard({image, title, date, description }) {
  return (
    <div className="event_card">
        
            <img className="event_img" src={image} alt={title} />
        

      <div className="event-content">
        <h2>{title}</h2>
        <p className="date">{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
