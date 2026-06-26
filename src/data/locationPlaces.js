export const PROJECT_LAT = 17.5192;
export const PROJECT_LNG = 78.3125;
export const PROJECT_ORIGIN = 'Prajwalaa Ankura, Ameenpur, Hyderabad, Telangana 502032';
export const PROJECT_MAP_QUERY = encodeURIComponent(PROJECT_ORIGIN);

export const locationCategories = [
  {
    id: 'schools',
    label: 'Schools',
    icon: '🎓',
    places: [
      { name: 'Vibgyor International School', distance: '1.08 KM', car: '3 mins', bike: '5 mins', walk: '18 mins' },
      { name: 'Mnr School', distance: '1.59 KM', car: '5 mins', bike: '7 mins', walk: '22 mins' },
      { name: 'Sri Vyshnavi High School', distance: '2.01 KM', car: '6 mins', bike: '9 mins', walk: '28 mins' },
      { name: 'Vernon School', distance: '2.03 KM', car: '6 mins', bike: '9 mins', walk: '28 mins' },
      { name: 'Ramans Jawahar High School', distance: '2.06 KM', car: '6 mins', bike: '9 mins', walk: '29 mins' },
    ],
  },
  {
    id: 'hospitals',
    label: 'Hospitals',
    icon: '🏥',
    places: [
      { name: 'Pradham Dental Care', distance: '1.30 KM', car: '4 mins', bike: '6 mins', walk: '20 mins' },
      { name: 'Maruthi Hospital', distance: '2.50 KM', car: '7 mins', bike: '10 mins', walk: '32 mins' },
      { name: 'Mamata Academy of Medical Sciences', distance: '4.20 KM', car: '12 mins', bike: '16 mins', walk: '48 mins' },
      { name: 'Tirumala Hospital', distance: '3.80 KM', car: '10 mins', bike: '14 mins', walk: '42 mins' },
      { name: 'S.N.R Diagnostics', distance: '2.10 KM', car: '6 mins', bike: '9 mins', walk: '27 mins' },
    ],
  },
  {
    id: 'temples',
    label: 'Temples',
    icon: '🛕',
    places: [
      { name: 'Sri Venkateswara Swamy Temple', distance: '0.90 KM', car: '3 mins', bike: '5 mins', walk: '15 mins' },
      { name: 'Shri Shirdi Sai Baba Temple', distance: '1.40 KM', car: '4 mins', bike: '6 mins', walk: '19 mins' },
      { name: 'Sri Ramalayam Temple', distance: '2.80 KM', car: '8 mins', bike: '11 mins', walk: '32 mins' },
      { name: 'Hanuman Temple, Shankar Nagar', distance: '1.60 KM', car: '5 mins', bike: '7 mins', walk: '22 mins' },
    ],
  },
  {
    id: 'mosques',
    label: 'Mosques',
    icon: '🕌',
    places: [
      { name: 'Masjid-e-Kousar', distance: '1.20 KM', car: '4 mins', bike: '6 mins', walk: '18 mins' },
      { name: 'Jama Masjid Ameenpur', distance: '1.50 KM', car: '5 mins', bike: '7 mins', walk: '21 mins' },
      { name: 'Masjid Al-Noor', distance: '3.20 KM', car: '9 mins', bike: '12 mins', walk: '36 mins' },
      { name: 'Masjid-e-Ibrahim', distance: '4.00 KM', car: '11 mins', bike: '15 mins', walk: '45 mins' },
    ],
  },
  {
    id: 'malls',
    label: 'Shopping Malls',
    icon: '🛍️',
    places: [
      { name: 'CMR Family Mall, Nizampet', distance: '5.50 KM', car: '14 mins', bike: '18 mins', walk: '55 mins' },
      { name: 'GSM Mall And Multiplex', distance: '4.80 KM', car: '12 mins', bike: '16 mins', walk: '48 mins' },
      { name: 'D Mart Hypermarket, Ramachandrapuram', distance: '6.30 KM', car: '16 mins', bike: '20 mins', walk: '62 mins' },
    ],
  },
  {
    id: 'banks',
    label: 'Banks',
    icon: '🏦',
    places: [
      { name: 'Union Bank of India', distance: '1.80 KM', car: '5 mins', bike: '8 mins', walk: '24 mins' },
      { name: 'Canara Bank', distance: '2.00 KM', car: '6 mins', bike: '9 mins', walk: '26 mins' },
      { name: 'Axis Bank', distance: '2.20 KM', car: '6 mins', bike: '9 mins', walk: '28 mins' },
      { name: 'HDFC Bank', distance: '2.50 KM', car: '7 mins', bike: '10 mins', walk: '32 mins' },
    ],
  },
  {
    id: 'parks',
    label: 'Parks',
    icon: '🌳',
    places: [
      { name: 'Shankar Nagar Municipal Park', distance: '1.60 KM', car: '5 mins', bike: '7 mins', walk: '22 mins' },
      { name: 'Gulmohar Park, Serilingampally', distance: '5.00 KM', car: '13 mins', bike: '17 mins', walk: '50 mins' },
      { name: 'Ameenpur Lake', distance: '1.10 KM', car: '4 mins', bike: '6 mins', walk: '17 mins' },
    ],
  },
  {
    id: 'colleges',
    label: 'Colleges & Universities',
    icon: '🏛️',
    places: [
      { name: 'Government ITI College', distance: '3.50 KM', car: '10 mins', bike: '13 mins', walk: '38 mins' },
      { name: 'Holy Cross College for Women', distance: '3.80 KM', car: '11 mins', bike: '14 mins', walk: '42 mins' },
      { name: 'Fusion International School', distance: '2.40 KM', car: '7 mins', bike: '10 mins', walk: '30 mins' },
    ],
  },
];

export const recommendedSites = [
  {
    title: 'Prajwalaa Ankura',
    subtitle: 'Ameenpur',
    meta: 'Hyderabad · Residential',
    categoryId: null,
    place: null,
  },
  ...locationCategories.flatMap((category) =>
    category.places.slice(0, 2).map((place) => ({
      title: place.name,
      subtitle: place.distance,
      meta: `Hyderabad · ${category.label}`,
      categoryId: category.id,
      place,
    })),
  ),
];

export function getMapEmbedUrl(destination = null) {
  const origin = `${PROJECT_LAT},${PROJECT_LNG}`;
  if (!destination) {
    return `https://maps.google.com/maps?q=${origin}&hl=en&z=15&output=embed`;
  }
  const dest = encodeURIComponent(`${destination}, Ameenpur, Hyderabad, Telangana`);
  return `https://maps.google.com/maps?saddr=${origin}&daddr=${dest}&hl=en&z=14&output=embed`;
}
