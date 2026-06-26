import { useEffect, useRef, useState } from 'react';
import AnimatedHeading from './AnimatedHeading';
import {
  locationCategories,
  getMapEmbedUrl,
  PROJECT_ORIGIN,
} from '../data/locationPlaces';

export default function Location() {
  const sidebarRef = useRef(null);
  const [expandedCategory, setExpandedCategory] = useState('schools');
  const [selectedPlace, setSelectedPlace] = useState(locationCategories[0].places[0]);

  const scrollToCategory = (categoryId) => {
    requestAnimationFrame(() => {
      const el = sidebarRef.current?.querySelector(`[data-category="${categoryId}"]`);
      el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  };

  const toggleCategory = (categoryId) => {
    const isOpen = expandedCategory === categoryId;
    if (isOpen) {
      setExpandedCategory(null);
      return;
    }
    setExpandedCategory(categoryId);
    const cat = locationCategories.find((c) => c.id === categoryId);
    if (cat?.places[0]) setSelectedPlace(cat.places[0]);
    scrollToCategory(categoryId);
  };

  const selectPlace = (place, categoryId) => {
    setExpandedCategory(categoryId);
    setSelectedPlace(place);
  };

  useEffect(() => {
    const onSelectLocation = (event) => {
      const { place, categoryId } = event.detail ?? {};
      if (!place || !categoryId) return;
      selectPlace(place, categoryId);
      requestAnimationFrame(() => {
        scrollToCategory(categoryId);
      });
    };

    window.addEventListener('select-location', onSelectLocation);
    return () => window.removeEventListener('select-location', onSelectLocation);
  }, []);

  return (
    <section id="location" className="location section section-dark">
      <div className="container">
        <div className="section-header">
          <AnimatedHeading as="span" className="section-tag">Location</AnimatedHeading>
          <AnimatedHeading as="h2">Around Prajwalaa Ankura</AnimatedHeading>
          <p>
            Located in Ameenpur, Hyderabad (502032) — well-connected via Old Mumbai Highway
            and NH 65. Explore schools, hospitals, temples, mosques, and more nearby.
          </p>
        </div>

        <div className="location-map-layout">
          <aside className="location-sidebar" ref={sidebarRef}>
            <div className="location-sidebar-header">
              <h3>Around Prajwalaa Ankura</h3>
              <p>{PROJECT_ORIGIN}</p>
            </div>

            <div className="location-accordion">
              {locationCategories.map((cat) => {
                const isOpen = expandedCategory === cat.id;
                return (
                  <div
                    key={cat.id}
                    data-category={cat.id}
                    className={`accordion-item ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      type="button"
                      className="accordion-trigger"
                      onClick={() => toggleCategory(cat.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="accordion-icon">{cat.icon}</span>
                      <span className="accordion-label">{cat.label}</span>
                      <span className="accordion-chevron">{isOpen ? '▲' : '▼'}</span>
                    </button>

                    {isOpen && (
                      <div className="accordion-panel">
                        {cat.places.map((place) => (
                          <label
                            key={place.name}
                            className={`place-item ${selectedPlace?.name === place.name ? 'active' : ''}`}
                          >
                            <input
                              type="radio"
                              name="nearby-place"
                              checked={selectedPlace?.name === place.name}
                              onChange={() => selectPlace(place, cat.id)}
                            />
                            <span className="place-info">
                              <strong>{place.name}</strong>
                              <span>{place.distance}</span>
                            </span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="connectivity-info">
              <h4>Connectivity</h4>
              <div className="connectivity-item">
                <span>Old Mumbai Highway</span>
                <strong>~3.5 Kms</strong>
              </div>
              <div className="connectivity-item">
                <span>NH 65</span>
                <strong>~2.5 Kms</strong>
              </div>
            </div>
          </aside>

          <div className="location-map-wrap">
            <iframe
              key={selectedPlace?.name ?? 'default'}
              title={`Map to ${selectedPlace?.name ?? 'Prajwalaa Ankura'}`}
              src={getMapEmbedUrl(selectedPlace?.name)}
              className="location-map-iframe"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {selectedPlace && (
              <div className="travel-info-card">
                <button
                  type="button"
                  className="travel-close"
                  onClick={() => setSelectedPlace(null)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h4>{selectedPlace.name}</h4>
                <div className="travel-times">
                  <div className="travel-time">
                    <span className="travel-icon">🚗</span>
                    <span>{selectedPlace.car}</span>
                  </div>
                  <div className="travel-time">
                    <span className="travel-icon">🏍️</span>
                    <span>{selectedPlace.bike}</span>
                  </div>
                  <div className="travel-time">
                    <span className="travel-icon">🚶</span>
                    <span>{selectedPlace.walk}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
