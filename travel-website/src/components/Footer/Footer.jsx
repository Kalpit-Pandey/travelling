import '../../styles/components/footer.css';

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="newsletter">
          <div className="newsletter-wrapper">
            <h2 className="newsletter-title section-title">
              Our Newsletter
            </h2>
            <div className="email-subscription">
              <div className="input-group">
                <label htmlFor="emailField">
                  <span className="emailLabel">Enter your email</span>
                </label>
                <input 
                  type="email" 
                  className="emailInputField" 
                  name="emailField" 
                  id="emailField" 
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="subscriber">
                <a href="#!" className="subscribe-btn btn btn--primary">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-wrapper">
            <div className="footer-links company-links">
              <h4 className="footer-links-header">Follow us on:</h4>
              <div className="social-links">
                <a href="#!" className="facebook">
                  <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook"/>
                </a>
                <a href="#!" className="twitter">
                  <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter"/>
                </a>
                <a href="#!" className="instagram">
                  <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram"/>
                </a>
              </div>
            </div>

            <div className="footer-links contact-info">
              <h4 className="footer-links-header">Contact us at:</h4>
              <ul className="contact-items">
                <li className="contact-item">
                  <p>+977 9840300000</p>
                </li>
                <li className="contact-item">
                  <a href="mailto:info@traveller.com">info@travelling.com</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;