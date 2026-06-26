import AnimatedCardGrid from './AnimatedCardGrid';
import AnimatedHeading from './AnimatedHeading';

const offerings = [
  {
    type: '2 BHK Apartment',
    area: '1075 Sq. Ft.',
    price: '₹ 59.13 Lac',
    desc: 'Thoughtfully designed 2 BHK with modern finishes and ample living space',
  },
  {
    type: '2 BHK Apartment',
    area: '1580 Sq. Ft.',
    price: '₹ 86.90 Lac',
    desc: 'Spacious 2 BHK layout with premium specifications and natural light',
  },
];

export default function Price() {
  return (
    <section id="price" className="price section">
      <div className="container">
        <div className="section-header">
          <AnimatedHeading as="span" className="section-tag">Price</AnimatedHeading>
          <AnimatedHeading as="h2">Prajwalaa Ankura Price List</AnimatedHeading>
          <p>
            2 BHK luxury apartments in Ameenpur, Hyderabad. RERA registered under
            P01100010592 &amp; P01100010719. Starting from ₹ 5,500 per Sq. Ft.
          </p>
        </div>

        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Area</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {offerings.map((item) => (
                <tr key={item.area}>
                  <td>
                    <strong>{item.type}</strong>
                    <span className="price-desc">{item.desc}</span>
                  </td>
                  <td>{item.area}</td>
                  <td>
                    <span className="price-lock">{item.price}</span>
                  </td>
                  <td>
                    <a href="#enquire" className="btn btn-sm">Enquire Now</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AnimatedCardGrid className="price-cards" columns={2}>
          {offerings.map((item) => (
            <div key={item.area} className="price-card">
              <h3>{item.type}</h3>
              <p>{item.desc}</p>
              <span className="price-area">{item.area}</span>
              <span className="price-amount">{item.price}</span>
              <a href="#enquire" className="btn btn-primary btn-sm">Enquire Now</a>
            </div>
          ))}
        </AnimatedCardGrid>

        <p className="price-note">
          Possession starting from December 2028 · New Launch · 0.82 Acres · 145 Units
        </p>
      </div>
    </section>
  );
}
