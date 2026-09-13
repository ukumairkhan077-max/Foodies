import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Ali R.",
    image: "/images/restaurant/customer-1.jpg",
    text: "The burgers were amazing and delivery was incredibly fast.",
  },
  {
    name: "Sara K.",
    image: "/images/restaurant/customer-2.jpg",
    text: "Best pizza in town! Fresh ingredients and great taste.",
  },
  {
    name: "Usman T.",
    image: "/images/restaurant/customer-3.jpg",
    text: "Excellent service and delicious food. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="reviews">

      <div className="container">

        <SectionTitle
          label="WHAT OUR CUSTOMERS SAY"
          title="Loved by Thousands"
        />

        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.name}
            >

              <img
                src={testimonial.image}
                alt={testimonial.name}
              />

              <div>
                <div className="stars">
                  ★★★★★
                </div>

                <p>
                  "{testimonial.text}"
                </p>

                <strong>{testimonial.name}</strong>
              </div>

            </article>
          ))}

          <div className="rating-summary">

            <strong>4.9/5</strong>

            <div>★★★★★</div>

            <p>Based on 1,200+ customer reviews</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;