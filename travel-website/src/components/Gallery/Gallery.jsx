import '../../styles/components/gallery.css';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: './images/travelcollage_images/1.jpg',
      alt: 'Travel Gallery 1'
    },
    {
      id: 2,
      src: './images/travelcollage_images/2.jpg',
      alt: 'Travel Gallery 2'
    },
    {
      id: 3,
      src: './images/travelcollage_images/3.jpg',
      alt: 'Travel Gallery 3',
      className: 'gal-img-c'
    },
    {
      id: 4,
      src: './images/travelcollage_images/4.jpg',
      alt: 'Travel Gallery 4'
    },
    {
      id: 5,
      src: './images/travelcollage_images/5.jpg',
      alt: 'Travel Gallery 5',
      className: 'gal-img-e'
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Destination Gallery
          </h2>
          <span className="underline"></span>
          <p className="section-desc">
            Our photos gallery on trip
          </p>
        </div>
        <div className="section-content">
          <div className="image-gallery">
            <div className="gallery-container">
              <div className="gallery-top">
                {galleryImages.map((image) => (
                  <div 
                    key={image.id} 
                    className={`gallery-img ${image.className || ''}`}
                  >
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;