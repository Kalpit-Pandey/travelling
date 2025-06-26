import '../../styles/components/hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            Let's make your best trip ever
          </h1>
          <p className="hero__desc">
            The best travel company for your journey
          </p>
          <div className="hero__cta">
            <a href="#explore" className="explore-btn btn btn--primary">
              Explore Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;