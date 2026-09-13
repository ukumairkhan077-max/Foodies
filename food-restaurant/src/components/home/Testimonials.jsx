import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Ali R.",
    image: "https://media.istockphoto.com/id/157589277/photo/portrait-of-happy-smiling-cook-in-chefs-hat-and-uniform.jpg?s=612x612&w=0&k=20&c=WJ-xEqqnRgUqtQ6ivTygd1DfPMn1oT41s0Czps5qHSU=",
    text: "The burgers were amazing and delivery was incredibly fast.",
  },
  {
    name: "Sara K.",
    image: "https://media.istockphoto.com/id/480379746/photo/cook-decorating-a-plate-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=ZfRzr7xqK9a89DzUZ1h-oEHUEzi6FF0hiDpljIdtgt0=",
    text: "Best pizza in town! Fresh ingredients and great taste.",
  },
  {
    name: "Usman T.",
    image: "https://media.istockphoto.com/id/137049093/photo/female-chef.jpg?s=612x612&w=0&k=20&c=cn8cwiWC2nncWN8OK9f4kignvbMbETPpHJU1uujNg8c=",
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