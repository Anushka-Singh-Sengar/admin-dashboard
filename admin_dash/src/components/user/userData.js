// Centralized user data for all user components
export const users = [
  {
    id: 1,
    name: 'Emma Smith',
    email: 'emma.smith@example.com',
    phone: '+1-256-325-8652',
    img: '/assets/img/user/u-xl-1.jpg',
    imgThumb: '/assets/img/user/u1.jpg',
    totalBuy: '2161',
    status: 'ACTIVE',
    joinDate: '2021-10-30',
    location: 'New York, USA',
    bio: 'Passionate customer with a love for quality products and excellent service.',
    orders: '15 Orders'
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+5-256-325-8652',
    img: '/assets/img/user/u-xl-2.jpg',
    imgThumb: '/assets/img/user/u2.jpg',
    totalBuy: '5161',
    status: 'ACTIVE',
    joinDate: '2021-10-25',
    location: 'Los Angeles, USA',
    bio: 'Tech enthusiast and early adopter of new products.',
    orders: '23 Orders'
  },
  {
    id: 3,
    name: 'Mike Tison',
    email: 'mike.tison@example.com',
    phone: '+91-154-325-8652',
    img: '/assets/img/user/u-xl-3.jpg',
    imgThumb: '/assets/img/user/u3.jpg',
    totalBuy: '1561',
    status: 'ACTIVE',
    joinDate: '2021-10-21',
    location: 'Chicago, USA',
    bio: 'Fitness enthusiast and health-conscious shopper.',
    orders: '8 Orders'
  },
  {
    id: 4,
    name: 'Jack Sparrow',
    email: 'jack.sparrow@example.com',
    phone: '+91-989-325-8652',
    img: '/assets/img/user/u-xl-4.jpg',
    imgThumb: '/assets/img/user/u4.jpg',
    totalBuy: '1061',
    status: 'ACTIVE',
    joinDate: '2021-10-18',
    location: 'Miami, USA',
    bio: 'Adventure seeker and outdoor enthusiast.',
    orders: '12 Orders'
  },
  {
    id: 5,
    name: 'Mariya Martin',
    email: 'mariya.martin@example.com',
    phone: '+1-789-325-6589',
    img: '/assets/img/user/u-xl-5.jpg',
    imgThumb: '/assets/img/user/u5.jpg',
    totalBuy: '10061',
    status: 'ACTIVE',
    joinDate: '2021-10-14',
    location: 'Seattle, USA',
    bio: 'Professional designer with an eye for quality.',
    orders: '45 Orders'
  },
  {
    id: 6,
    name: 'Volverin Wolker',
    email: 'volverin.wolker@example.com',
    phone: '+1-456-325-6589',
    img: '/assets/img/user/u-xl-6.jpg',
    imgThumb: '/assets/img/user/u6.jpg',
    totalBuy: '3261',
    status: 'ACTIVE',
    joinDate: '2021-10-10',
    location: 'Boston, USA',
    bio: 'Student and budget-conscious shopper.',
    orders: '18 Orders'
  },
  {
    id: 7,
    name: 'Selena Wagner',
    email: 'selena.wagner@example.com',
    phone: '+1-789-325-6589',
    img: '/assets/img/user/u-xl-7.jpg',
    imgThumb: '/assets/img/user/u7.jpg',
    totalBuy: '1850',
    status: 'ACTIVE',
    joinDate: '2021-10-08',
    location: 'Denver, USA',
    bio: 'Yoga instructor and wellness advocate.',
    orders: '9 Orders'
  },
  {
    id: 8,
    name: 'Walter Reuter',
    email: 'walter.reuter@example.com',
    phone: '+1-456-325-6589',
    img: '/assets/img/user/u-xl-8.jpg',
    imgThumb: '/assets/img/user/u8.jpg',
    totalBuy: '2200',
    status: 'ACTIVE',
    joinDate: '2021-10-05',
    location: 'Austin, USA',
    bio: 'Software engineer and gadget lover.',
    orders: '11 Orders'
  },
  {
    id: 9,
    name: 'Larissa Gebhardt',
    email: 'larissa.gebhardt@example.com',
    phone: '+1-789-325-6589',
    img: '/assets/img/user/u-xl-9.jpg',
    imgThumb: '/assets/img/user/u9.jpg',
    totalBuy: '1050',
    status: 'ACTIVE',
    joinDate: '2021-10-02',
    location: 'Portland, USA',
    bio: 'Artist and creative professional.',
    orders: '6 Orders'
  },
  {
    id: 10,
    name: 'Albrecht Straub',
    email: 'albrecht.straub@example.com',
    phone: '+1-789-325-6589',
    img: '/assets/img/user/u-xl-10.jpg',
    imgThumb: '/assets/img/user/u1.jpg',
    totalBuy: '2100',
    status: 'ACTIVE',
    joinDate: '2021-09-28',
    location: 'San Francisco, USA',
    bio: 'Entrepreneur and business consultant.',
    orders: '14 Orders'
  },
  {
    id: 11,
    name: 'Leopold Ebert',
    email: 'leopold.ebert@example.com',
    phone: '+1-456-325-6589',
    img: '/assets/img/user/u-xl-11.jpg',
    imgThumb: '/assets/img/user/u2.jpg',
    totalBuy: '1260',
    status: 'ACTIVE',
    joinDate: '2021-09-25',
    location: 'Phoenix, USA',
    bio: 'Retired teacher and book lover.',
    orders: '7 Orders'
  },
  {
    id: 12,
    name: 'Marlee Rena',
    email: 'marlee.rena@example.com',
    phone: '+1-789-325-6589',
    img: '/assets/img/user/u-xl-12.jpg',
    imgThumb: '/assets/img/user/u3.jpg',
    totalBuy: '4161',
    status: 'ACTIVE',
    joinDate: '2021-09-20',
    location: 'Las Vegas, USA',
    bio: 'Event planner and social butterfly.',
    orders: '22 Orders'
  }
];

// Helper function to get user by ID
export const getUserById = (id) => {
  return users.find(user => user.id === id);
};

// Helper function to search users
export const searchUsers = (searchTerm) => {
  return users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );
}; 