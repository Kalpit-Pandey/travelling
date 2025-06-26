import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { destinations } from './destinations.data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/components/popularDestinations.css';
import DestinationCard from './DestinationCard';

const PopularDestinations = () => {
  const swiperRef = useRef(null);

  return (
    <section className="popular" id="explore">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Popular Destinations
          </h2>
          <span className="underline"></span>
          <p className="section-desc">
            From historical cities to natural splendours, come see the best of world!
          </p>
        </div>

        <div className="toggle-buttons">
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

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <DestinationCard {...destination} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularDestinations;