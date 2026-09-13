import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import FeaturedDishes from "../components/home/FeaturedDishes";
import AboutPreview from "../components/home/AboutPreview";
import RestaurantGallery from "../components/home/RestaurantGallery";
import ChefSection from "../components/home/ChefSection";
import ReservationCTA from "../components/home/ReservationCTA";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <main>

      <Hero />

      <Services />

      

      <AboutPreview />

      <section className="kitchen-chef-wrapper">
        <RestaurantGallery />
        <ChefSection />
      </section>

      

      <Testimonials />

      <Newsletter />

    </main>
  );
};

export default Home;