const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-4">{event.name}</h2>
      <p className="text-gray-600">
        {event.date} | {event.location}
      </p>
    </div>
  );
};
export default EventCard;
