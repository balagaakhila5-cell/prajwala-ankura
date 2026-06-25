import { useState } from 'react';

const faqs = [
  {
    q: 'How long has Prajwalaa Properties been in the real estate industry?',
    a: 'Prajwalaa Properties has been a trusted name in the real estate industry for over 20+ years, with a proven track record of excellence and customer satisfaction.',
  },
  {
    q: 'What types of properties does Prajwalaa Properties offer?',
    a: 'We offer a diverse range of properties, including individual houses, apartments, gated communities, villas, open plots, lands, and farm lands, catering to various preferences and lifestyles.',
  },
  {
    q: 'Can I customize the design of my home?',
    a: 'Yes, we offer customization options to tailor the design of your home to your specific preferences and requirements, ensuring a personalized living space that reflects your style.',
  },
  {
    q: 'Does Prajwalaa Properties provide construction support and material supply?',
    a: 'Yes, we provide comprehensive construction support and high-quality material supply to ensure the successful completion of your project with the utmost attention to quality and efficiency.',
  },
  {
    q: 'What sets Prajwalaa Properties apart from other real estate developers?',
    a: 'Our commitment to best practices, transparency, customer satisfaction, and innovation sets us apart in the industry. We prioritize delivering exceptional value and experiences to our clients.',
  },
  {
    q: 'Does Prajwalaa Properties provide financing options for homebuyers?',
    a: 'We work with reputable financial institutions to offer financing options and assistance to homebuyers, making the purchasing process more convenient and accessible.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2>Your Questions, Answered</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={item.q} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
