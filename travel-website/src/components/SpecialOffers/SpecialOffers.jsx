import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import OfferCard from './OfferCard';
import { specialOffers } from './offersData';
import '../../styles/components/specialOffers.css';
import 'swiper/css';
import 'swiper/css/navigation';

const SpecialOffers = () => {
  const swiperRef = useRef(null);

  return (
    <section className="special" id="travel">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Special Offers
          </h2>
          <span className="underline"></span>
          <p className="section-desc">
            Check out our special offer tour!
          </p>
        </div>

        <div className="section-content">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              650: { slidesPerView: 2 },
              1050: { slidesPerView: 3 },
              1300: { slidesPerView: 4 }
            }}
          >
            {specialOffers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <OfferCard {...offer} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="offers-toggle">
            <button 
              className="toggle-button toggle-button-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span>&#8249;</span>
            </button>
            <button 
              className="toggle-button toggle-button-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span>&#8250;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;