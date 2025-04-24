// seeder.js
const mongoose = require('mongoose');
const Product = require('./models/productModel'); // adjust path if needed
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.CONNECTION_STR);

const dummyProducts = [
  {
    name: "Beats Studio 3 Black",
    description: "Premium wireless over-ear headphones with ANC.",
    price: 700,
    oldPrice: 805,
    discount: 105,
    colors: ["peach", "black", "gray", "blue"],
    selectedColor: "black",
    stock: 5,
    rating: 4.9,
    reviewsCount: 55,
    images: ["black1.png", "black2.png"],
    highlights: ["High quality materials", "High quality sound", "Advanced noise cancellation"],
    specs: {
      "Audio Headphone Type": "Over-Ear",
      "Color Name": "Black",
      "Connection Type": "Wireless",
      "Model Name": "Over Ear Headphone"
    },
    modelNumber: "Sd-1004",
    modelName: "Over Ear Headphone",
    whatsInTheBox: ["Gaming headset", "Detachable mic", "Cables"],
    isPopular: true,
    isNewArrival: true,
    isDiscover: false,
    category: "headphones"
  },
  {
    name: "Beats Studio 3 Black",
    description: "Premium wireless over-ear headphones with ANC.",
    price: 700,
    oldPrice: 805,
    discount: 105,
    colors: ["peach", "black", "gray", "blue"],
    selectedColor: "black",
    stock: 5,
    rating: 4.9,
    reviewsCount: 55,
    images: ["black1.png", "black2.png"],
    highlights: ["High quality materials", "High quality sound", "Advanced noise cancellation"],
    specs: {
      "Audio Headphone Type": "Over-Ear",
      "Color Name": "Black",
      "Connection Type": "Wireless",
      "Model Name": "Over Ear Headphone"
    },
    modelNumber: "Sd-1004",
    modelName: "Over Ear Headphone",
    whatsInTheBox: ["Gaming headset", "Detachable mic", "Cables"],
    isPopular: true,
    isNewArrival: true,
    isDiscover: false,
    category: "headphones"
  },
  {
    name: "Beats Studio 3 Black",
    description: "Premium wireless over-ear headphones with ANC.",
    price: 700,
    oldPrice: 805,
    discount: 105,
    colors: ["peach", "black", "gray", "blue"],
    selectedColor: "black",
    stock: 5,
    rating: 4.9,
    reviewsCount: 55,
    images: ["black1.png", "black2.png"],
    highlights: ["High quality materials", "High quality sound", "Advanced noise cancellation"],
    specs: {
      "Audio Headphone Type": "Over-Ear",
      "Color Name": "Black",
      "Connection Type": "Wireless",
      "Model Name": "Over Ear Headphone"
    },
    modelNumber: "Sd-1004",
    modelName: "Over Ear Headphone",
    whatsInTheBox: ["Gaming headset", "Detachable mic", "Cables"],
    isPopular: true,
    isNewArrival: true,
    isDiscover: false,
    category: "headphones"
  },
  {
    name: "Beats Studio 3 Black",
    description: "Premium wireless over-ear headphones with ANC.",
    price: 700,
    oldPrice: 805,
    discount: 105,
    colors: ["peach", "black", "gray", "blue"],
    selectedColor: "black",
    stock: 5,
    rating: 4.9,
    reviewsCount: 55,
    images: ["black1.png", "black2.png"],
    highlights: ["High quality materials", "High quality sound", "Advanced noise cancellation"],
    specs: {
      "Audio Headphone Type": "Over-Ear",
      "Color Name": "Black",
      "Connection Type": "Wireless",
      "Model Name": "Over Ear Headphone"
    },
    modelNumber: "Sd-1004",
    modelName: "Over Ear Headphone",
    whatsInTheBox: ["Gaming headset", "Detachable mic", "Cables"],
    isPopular: true,
    isNewArrival: true,
    isDiscover: false,
    category: "headphones"
  },
  {
    name: "Beats Studio 3 Black",
    description: "Premium wireless over-ear headphones with ANC.",
    price: 700,
    oldPrice: 805,
    discount: 105,
    colors: ["peach", "black", "gray", "blue"],
    selectedColor: "black",
    stock: 5,
    rating: 4.9,
    reviewsCount: 55,
    images: ["black1.png", "black2.png"],
    highlights: ["High quality materials", "High quality sound", "Advanced noise cancellation"],
    specs: {
      "Audio Headphone Type": "Over-Ear",
      "Color Name": "Black",
      "Connection Type": "Wireless",
      "Model Name": "Over Ear Headphone"
    },
    modelNumber: "Sd-1004",
    modelName: "Over Ear Headphone",
    whatsInTheBox: ["Gaming headset", "Detachable mic", "Cables"],
    isPopular: true,
    isNewArrival: true,
    isDiscover: false,
    category: "headphones"
  }
];

const seedData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(dummyProducts);
    console.log('Dummy data inserted!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
