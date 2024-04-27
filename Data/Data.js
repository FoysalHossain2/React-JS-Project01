import Arrivals1 from "../src/assets/NewArrivals/Arrivals1.png";
import Arrivals2 from "../src/assets/NewArrivals/Arrivals2.png";
import Arrivals3 from "../src/assets/NewArrivals/Arrivals3.png";
import Arrivals4 from "../src/assets/NewArrivals/Arrivals4.png";

// best Bestsellers img import
import Bestsellers1 from "../src/assets/Bestsellers/Bestsellers1.png";
import Bestsellers2 from "../src/assets/Bestsellers/Bestsellers2.png";
import Bestsellers3 from "../src/assets/Bestsellers/Bestsellers3.png";
import Bestsellers4 from "../src/assets/Bestsellers/Bestsellers4.png";



// best NewArrivalsData 
export const NewArrivalsData = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bize: true,
    color: false,
    img: Arrivals1,
    bizeItem: true,
    discountOffer: "20%",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$54.00",
    bize: true,
    color: true,
    img: Arrivals2,
    bizeItem: true,
    discountOffer: "20%",
  },

  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bize: false,
    color: true,
    img: Arrivals3,
    bizeItem: true,
    discountOffer: "25%",
  },

  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bize: true,
    color: false,
    img: Arrivals4,
    bizeItem: false,
    discountOffer: "10%",
  },
];




export const BestsellersProduct = [
  {
    id: 1,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bize: true,
    color: true,
    img: Bestsellers1,
    bizeItem: true,
    discountOffer: "20%",
  },
  {
    id: 2,
    title: "Basic Crew Neck Tee",
    price: "$54.00",
    bize: true,
    color: true,
    img: Bestsellers2,
    bizeItem: true,
    discountOffer: "20%",
  },

  {
    id: 3,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bize: false,
    color: true,
    img: Bestsellers3,
    bizeItem: true,
    discountOffer: "25%",
  },

  {
    id: 4,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    bize: true,
    color: false,
    img: Bestsellers4,
    bizeItem: false,
    discountOffer: "10%",
  },
];



// shopCatagories
export const CatagoriesData = [
  {
    id: 1, 
    title: 'Mobil Phone',
    subCategories: [
      {id: 1, title: "Oppo"},
      {id: 2, title: "Samsun s23"},
      {id: 3, title: "Vivo 27"},
      {id: 4, title: "Tecno"},
    ]
  },
  {
    id: 2, 
    title: 'Category 2',
    subCategories: [],
  },
  {
    id: 3, 
    title: 'Category 3',
    subCategories: [
      {id: 1, title: "subCategories 3"},
      {id: 2, title: "subCategories 3"},
      {id: 3, title: "subCategories 3"},
    ]
  },
  {
    id: 4, 
    title: 'Category 4',
    subCategories: [],
  },
  {
    id: 5, 
    title: 'Category 5',
    subCategories: [
      {id: 1, title: "subCategories 3"},
      {id: 2, title: "subCategories 3"},
      {id: 3, title: "subCategories 3"},
    ],
  },
]


// Shop by ColorData
export const ShopColorData = [
  {id: 1, ColorCode: '#000000', title: 'Black'},
  {id: 2, ColorCode: '#FF8686', title: 'Pink'},
  {id: 3, ColorCode: '#7ED321', title: 'Green'},
  {id: 4, ColorCode: '#B6B6B6', title: 'Gray'},
  {id: 5, ColorCode: '#15CBA5', title: 'Blue'}
]


// Shop by Brand Data
export const ShopByBrandData = [
  { id: 1, title: "Apex" },
  { id: 2, title: "Apple" },
  { id: 3, title: "Samsumg" },
  { id: 4, title: "HP" },
  { id: 5, title: "Bata" },
  { id: 5, title: "Bay" },
]


// Shop by Brand Data
export const ShopByPriceData = [
  { id: 1, title: "$0.00 - $9.99" },
  { id: 2, title: "$10.00 - $19.99" },
  { id: 3, title: "$20.00 - $29.99" },
  { id: 4, title: "$30.00 - $39.99" },
  { id: 5, title: "$40.00 - $69.99" },
]


// sort Data
export const SortData = [
  { id: 1, sortItem: "Cloth" },
  { id: 2, sortItem: "Electronics" },
  { id: 3, sortItem: "Bag" },
  { id: 4, sortItem: "Cloth" },
  { id: 5, sortItem: "Woman Cloth" },
  { id: 6, sortItem: "Man Cloth" },
  { id: 7, sortItem: "Toy" },
]