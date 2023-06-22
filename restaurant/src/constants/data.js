import images from './images';

const wines = [
  {
    title: '14 HANDS MOSCATO 750ML',
    price: '1700sh',
    tags: '10.5% | Bottle',
  },
  {
    title: 'FRONTERA SAUVIGNON BLANC 1.5LTRS',
    price: '1850sh',
    tags: '12% | Bottle',
  },
  {
    title: 'NEDERBURG CABERNET SAUVIGNON DRY RED 750ML',
    price: '1600sh',
    tags: '14.5% | 750 ml',
  },
  {
    title: 'ASCONI PASTROL 750ML',
    price: '1600sh',
    tags: '16% | 750 ml',
  },
  {
    title: 'PILSNER CAN 500ML',
    price: '200sh',
    tags: '4.5% | 750 ml',
  },
  {
    title: 'TUSKER CAN 500ML',
    price: '220sh',
    tags: '4.2% | 750 ml',
  },
  {
    title: 'TUSKER MALT CAN 500ML',
    price: '250sh',
    tags: '5% | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Long Island',
    price: '800sh',
    tags: 'Tequila | Simple syrup | Vodka | Gin | Rum | Triple sec | Lime | coke 30 ml',
  },
  {
    title: "Whiskey Sour",
    price: '600sh',
    tags: 'Whiskey | Lemon | lime | Sugar Syrup | Eggwhite (optional)',
  },
  {
    title: 'Tequila Sunrise',
    price: '700sh',
    tags: 'Blanco Tequila | Orange juice | Grenadine Syrup',
  },
  {
    title: 'Penicillin',
    price: '650sh',
    tags: 'Whiskey | Lemon | Honey Syrup | Ginger Syrup | shaken',
  },
  {
    title: 'Mojito',
    price: '700sh',
    tags: 'Rum | Fresh Mints | Limes | Lime Juice | Simple Syrup | Soda Water',
  },
  {
    title: 'Honolulu Punch',
    price: '600sh',
    tags: 'Gin | Dash of grenadine | Pineapple Juice | Orange Juice | Lemon Juice',
  },
  {
    title: 'Gin Smash',
    price: '600sh',
    tags: 'London Dry Gin | Basil | Pineapple Juice | Shaken | Strained in a whiskey glass',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Our Choma',
    subtitle: 'Well-Seasoned Choma In Northern Bypass, Nairobi Area.',
  },
  {
    imgUrl: images.award01,
    title: 'Ample Parking',
    subtitle: 'Adequate Parking Space Available For Our Customers.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Quality Customer Service And Great Security.',
  },
  {
    imgUrl: images.award03,
    title: 'Reasonable Prices',
    subtitle: 'Have An Amazing Time Without Digging Too Deep.',
  },
];

const data = { wines, cocktails, awards };

export default data;
