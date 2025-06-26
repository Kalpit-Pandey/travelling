import { useNavigate } from 'react-router-dom';

const OfferCard = ({ id, image, title, price }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    // Store the complete image path
    const fullImagePath = image.startsWith('./') ? image.slice(2) : image;
    
    navigate(`/offer/${id}`, { 
      state: { 
        image: fullImagePath,  // Pass the correct image path
        title, 
        price 
      } 
    });
  };

  return (
    <div className="offers-card">
      <div className="offers-card-container">
        <div className="offers-card-top">
          <img className="offers-card-image" src={image} alt={title} />
        </div>
        <div className="offers-card-bottom">
          <div className="offers-card-title">
            {title}
          </div>
          <div className="offers-card-pricing">
            <div className="from-price">
              <p>From</p>
              <span className="amount">${price}</span>
            </div>
            <button 
              className="details-btn btn--primary"
              onClick={handleDetailsClick}
            >
              details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;