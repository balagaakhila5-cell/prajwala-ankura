import AnimatedCardGrid from './AnimatedCardGrid';
import AnimatedHeading from './AnimatedHeading';

const testimonials = [
  {
    quote: 'Working with Prajwalaa Properties was a fantastic experience. From start to finish, they were professional, attentive to our needs, and delivered on their promises. Our dream home is a testament to their dedication to quality and excellence.',
    author: 'Mr. and Mrs. Kumar',
    role: 'Happy Homeowners',
  },
  {
    quote: 'I highly recommend Prajwalaa Properties to anyone looking for a reliable and trustworthy real estate partner. Their attention to detail, transparent communication, and commitment to customer satisfaction set them apart in the industry.',
    author: 'Ms. Rao',
    role: 'Satisfied Customer',
  },
  {
    quote: 'Prajwalaa Properties made the entire home buying process smooth and stress-free for us. Their team was knowledgeable, responsive, and guided us every step of the way. We couldn\'t be happier with our decision to choose them.',
    author: 'Mr. and Mrs. Reddy',
    role: 'Delighted Homeowners',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <AnimatedHeading as="span" className="section-tag">Testimonials</AnimatedHeading>
          <AnimatedHeading as="h2">What Our Clients Say</AnimatedHeading>
        </div>
        <AnimatedCardGrid className="testimonials-grid" columns={3}>
          {testimonials.map((t) => (
            <blockquote key={t.author} className="testimonial-card">
              <p className="quote">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </AnimatedCardGrid>
      </div>
    </section>
  );
}
