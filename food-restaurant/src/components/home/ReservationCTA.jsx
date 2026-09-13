import Button from "../common/Button";

const ReservationCTA = () => {
  return (
    <section className="reservation-cta">

      <div className="reservation-overlay"></div>

      <div className="container reservation-content">

        <p className="section-label">
          SPECIAL OFFER
        </p>

        <h2>Hungry Yet?</h2>

        <p>
          Your favorite meal is just a few clicks away.
        </p>

        <Button>
          Order Now →
        </Button>

      </div>

    </section>
  );
};

export default ReservationCTA;