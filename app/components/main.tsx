import Card from 'app/components/card'

const Rooms = () => {
  return (
    <section className="py-20 px-5 bg-orange-100">
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <Card
          image="/hero.jpg"
          title="Luxury Room"
          description="A cozy and elegant space with ocean view and king-size bed."
          price={2100000}
          people={2}
          rating={5}
          link="#"
        />

        <Card
          image="/room2.jpg"
          title="Deluxe Suite"
          description="Spacious suite with private balcony and premium amenities."
          price={3200000}
          people={3}
          rating={4}
          link="#"
        />

        <Card
          image="/room3.jpg"
          title="Family Room"
          description="Perfect for families, complete with a mini living area and twin beds."
          price={4500000}
          people={4}
          rating={4}
          link="#"
        />
      </div>
    </section>
  );
};
export default Rooms;