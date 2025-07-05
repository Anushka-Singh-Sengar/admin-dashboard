// Centralized vendor data for all vendor components
export const vendors = [
  {
    id: 1,
    name: 'Emma Smith',
    email: 'emma.smith@example.com',
    phone: '+91 963-852-7410',
    img: '/assets/img/vendor/u1.jpg',
    products: 180,
    totalSell: 1908,
    payout: 2691,
    status: 'ACTIVE',
    joinDate: '2021-10-30',
    location: 'New York, USA',
    bio: 'Passionate vendor with a love for quality products and excellent service.'
  },
  {
    id: 2,
    name: 'Bobly Smith',
    email: 'bobly.smith@example.com',
    phone: '+91 863-852-7654',
    img: '/assets/img/vendor/u2.jpg',
    products: 65,
    totalSell: 548,
    payout: 254,
    status: 'ACTIVE',
    joinDate: '2021-10-25',
    location: 'Los Angeles, USA',
    bio: 'Tech enthusiast and early adopter of new products.'
  },
  {
    id: 3,
    name: 'Robin Hood',
    email: 'robin.hood@example.com',
    phone: '+91 889-852-7466',
    img: '/assets/img/vendor/u3.jpg',
    products: 654,
    totalSell: 548,
    payout: 654,
    status: 'ACTIVE',
    joinDate: '2021-10-21',
    location: 'Chicago, USA',
    bio: 'Fitness enthusiast and health-conscious vendor.'
  },
  {
    id: 4,
    name: 'Devin Chingol',
    email: 'devin.chingol@example.com',
    phone: '+91 789-852-7865',
    img: '/assets/img/vendor/u4.jpg',
    products: 977,
    totalSell: 987,
    payout: 654,
    status: 'ACTIVE',
    joinDate: '2021-10-18',
    location: 'Miami, USA',
    bio: 'Adventure seeker and outdoor enthusiast.'
  },
  {
    id: 5,
    name: 'Nitilo Smith',
    email: 'nitilo.smith@example.com',
    phone: '+91 658-852-7410',
    img: '/assets/img/vendor/u5.jpg',
    products: 654,
    totalSell: 159,
    payout: 951,
    status: 'ACTIVE',
    joinDate: '2021-10-14',
    location: 'Seattle, USA',
    bio: 'Professional designer with an eye for quality.'
  },
  {
    id: 6,
    name: 'Mehulo Kathia',
    email: 'mehulo.kathia@example.com',
    phone: '+91 698-852-7410',
    img: '/assets/img/vendor/u6.jpg',
    products: 658,
    totalSell: 854,
    payout: 634,
    status: 'ACTIVE',
    joinDate: '2021-10-10',
    location: 'Boston, USA',
    bio: 'Student and budget-conscious vendor.'
  },
  {
    id: 7,
    name: 'Bridg Stone',
    email: 'bridg.stone@example.com',
    phone: '+91 333-852-7410',
    img: '/assets/img/vendor/u7.jpg',
    products: 652,
    totalSell: 125,
    payout: 475,
    status: 'ACTIVE',
    joinDate: '2021-10-08',
    location: 'Denver, USA',
    bio: 'Yoga instructor and wellness advocate.'
  },
  {
    id: 8,
    name: 'Pintu Trainee',
    email: 'pintu.trainee@example.com',
    phone: '+91 698-866-7410',
    img: '/assets/img/vendor/u8.jpg',
    products: 658,
    totalSell: 457,
    payout: 874,
    status: 'ACTIVE',
    joinDate: '2021-10-05',
    location: 'Austin, USA',
    bio: 'Software engineer and gadget lover.'
  },
  {
    id: 9,
    name: 'DL Kapdia',
    email: 'dl.kapdia@example.com',
    phone: '+91 332-852-3215',
    img: '/assets/img/vendor/u9.jpg',
    products: 180,
    totalSell: 1908,
    payout: 2691,
    status: 'ACTIVE',
    joinDate: '2021-10-02',
    location: 'Portland, USA',
    bio: 'Artist and creative professional.'
  },
  {
    id: 10,
    name: 'Manu Semli',
    email: 'manu.semli@example.com',
    phone: '+91 654-852-7744',
    img: '/assets/img/vendor/u10.jpg',
    products: 252,
    totalSell: 542,
    payout: 854,
    status: 'ACTIVE',
    joinDate: '2021-09-28',
    location: 'San Francisco, USA',
    bio: 'Entrepreneur and business consultant.'
  },
  {
    id: 11,
    name: 'Niki Smith',
    email: 'niki.smith@example.com',
    phone: '+91 456-852-5522',
    img: '/assets/img/vendor/u11.jpg',
    products: 425,
    totalSell: 352,
    payout: 421,
    status: 'ACTIVE',
    joinDate: '2021-09-25',
    location: 'Phoenix, USA',
    bio: 'Retired teacher and book lover.'
  },
  {
    id: 12,
    name: 'Jullie Bronzna',
    email: 'jullie.bronzna@example.com',
    phone: '+91 325-852-6543',
    img: '/assets/img/vendor/u12.jpg',
    products: 254,
    totalSell: 574,
    payout: 325,
    status: 'ACTIVE',
    joinDate: '2021-09-20',
    location: 'Las Vegas, USA',
    bio: 'Event planner and social butterfly.'
  }
];

// Helper function to get vendor by ID
export const getVendorById = (id) => {
  return vendors.find(vendor => vendor.id === id);
};

// Helper function to search vendors
export const searchVendors = (searchTerm) => {
  return vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.phone.includes(searchTerm)
  );
}; 