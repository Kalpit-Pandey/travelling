import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/components/offerDetails.css';

const OfferDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, title, price } = location.state || {};

  if (!location.state) {
    return <div>Offer not found</div>;
  }

  // Ensure correct image path
  const imagePath = image.startsWith('/') ? image : `/${image}`;

  return (
    <div className="offer-details-container">
      <div className="offer-details">
        <div className="offer-image">
          <img 
            src={imagePath} 
            alt={title}
            onError={(e) => {
              console.error('Image failed to load:', imagePath);
              e.target.src = '/images/placeholder.jpg'; // Optional: Add a placeholder image
            }}
          />
        </div>
        <div className="offer-content">
          <h1>{title}</h1>
          <div className="offer-price">
            <span>Starting from</span>
            <h2>${price}</h2>
          </div>
          <div className="offer-description">
            <h3>About the Destination</h3>
            <p>Experience the beauty and culture of {title}. This package includes accommodation, guided tours, and local experiences.</p>
          </div>
          <div className="offer-highlights">
            <h3>Package Highlights</h3>
            <ul>
              <li>✓ 5-star accommodation</li>
              <li>✓ Guided tours</li>
              <li>✓ Local experiences</li>
              <li>✓ Airport transfers</li>
              <li>✓ 24/7 support</li>
            </ul>
          </div>
          <div className="offer-buttons">
            <button className="book-now-btn">Book Now</button>
            <button 
              className="back-btn"
              onClick={() => navigate('/')}
            >
              Back to Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;