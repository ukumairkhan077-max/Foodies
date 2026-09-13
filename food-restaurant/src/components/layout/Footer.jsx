const Footer = () => {
  return (
    <footer className="footer" id="contact">

      <div className="container footer-container">

        <div className="footer-brand">

          <h2>Foodie's</h2>

          <p>
            Taste the difference.
            Fresh food made with passion.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <p>Islamabad, Pakistan</p>
          <p>+92 300 1234567</p>
          <p>hello@foodies.com</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Foodie's. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;