import { useState } from 'react';
import AnimatedHeading from './AnimatedHeading';

export default function EnquireForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="enquire section">
      <div className="container enquire-grid">
        <div className="enquire-text">
          <AnimatedHeading as="span" className="section-tag">Get in Touch</AnimatedHeading>
          <AnimatedHeading as="h2">Enquire Now</AnimatedHeading>
          <p>
            Ready to embark on your journey towards your dream property? Contact us today
            to learn more about our projects, schedule a site visit, or discuss your
            specific requirements. Let&apos;s build your dream together with Prajwalaa Properties.
          </p>
          <div className="enquire-contacts">
            <div className="contact-item">
              <span>📞</span>
              <div>
                <strong>Sales Enquiry</strong>
                <p>Contact us for project details</p>
              </div>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <div>
                <strong>Email</strong>
                <p>Reach out for consultations</p>
              </div>
            </div>
            <div className="contact-item">
              <span>🏠</span>
              <div>
                <strong>Site Visit</strong>
                <p>Book a visit to our projects</p>
              </div>
            </div>
          </div>
        </div>

        <form className="enquire-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="form-success">
              <h3>Thank You!</h3>
              <p>We have received your enquiry. Our team will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3>Book Site Visit / Enquire</h3>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button type="submit" className="btn btn-primary btn-full">Submit Enquiry</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
