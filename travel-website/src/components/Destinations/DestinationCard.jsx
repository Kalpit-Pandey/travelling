const DestinationCard = ({ image, title, location }) => {
  return (
    <div className="popular-card">
      <div className="pc__img-cont">
        <img src={image} className="popular-card-img" alt={title} />
      </div>
      <div className="pc__content">
        <h3 className="pc__title">{title}</h3>
        <p className="pc__desc">{location}</p>
      </div>
    </div>
  );
};

export default DestinationCard;