// seeder.js
const mongoose = require('mongoose');
const Product = require('./models/productModel'); // adjust path if needed
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.CONNECTION_STR);

const dummyProducts = [
  
{
  "name": "Liberty 4 Pro",
  "description": "High-fidelity wireless earbuds with advanced noise cancellation and immersive sound.",
  "price": 1200,
  "oldPrice": 1500,
  "discount": 300,
  "imagesAndColors": {
    "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Anker/Liberty%204%20Pro/1-Light%20Black.png",
    "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Anker/Liberty%204%20Pro/3-White.png",

"blue":"https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Anker/Liberty%204%20Pro/4-Light%20Blue.png"

  },
  "selectedColor": "black",
  "stock": 3,
  "rating": 4.8,
  "reviewsCount": 3,
  "reviews": [
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 5,
      "comment": "Amazing sound quality and great battery life."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.5,
      "comment": "Comfortable fit and clear audio."
    },
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 5,
      "comment": "Best wireless earbuds I've used so far!"
    }
  ],
  "highlights": [
    "Hi-Res Audio Wireless",
    "3D Surround Sound",
    "Active Noise Cancellation",
    "Multipoint Connection"
  ],
  "specs": {
    "Driver Size": "11mm",
    "Bluetooth Version": "5.3",
    "Battery Life": "8 hours (earbuds) + 32 hours (case)",
    "Charging Port": "USB-C & Wireless Charging"
  },
  "modelNumber": "A3953",
  "modelName": "Liberty 4 Pro",
  "whatsInTheBox": [
    "Liberty 4 Pro Earbuds",
    "Charging Case",
    "USB-C Cable",
    "Ear Tips (various sizes)",
    "User Manual"
  ],
  "isPopular": true,
  "isNewArrival": true,
  "isDiscover": true,
  "category": "6813e1dd203498cff663240c",
  "brand": "6813dde7dedf56cb10163a21"
},


{
  "name": "QuietComfort Earbuds",
  "description": "Premium wireless earbuds with world-class noise cancellation and rich, immersive sound by Bose.",
  "price": 1800,
  "oldPrice": 2100,
  "discount": 300,
  "imagesAndColors": {
  "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Bose/QuietComfort%20Earbuds/1-White.png",

    "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Bose/QuietComfort%20Earbuds/2-Black.png",
  
    "white-smooked": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Bose/QuietComfort%20Earbuds/3-White%20Smoked.png"
  },
  "selectedColor": "white",
  "stock": 5,
  "rating": 4.9,
  "reviewsCount": 4,
  "reviews": [
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 5,
      "comment": "Top-notch noise cancellation and premium sound."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.8,
      "comment": "Feels luxurious and sounds amazing."
    },
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 5,
      "comment": "Perfect for travel and work. Worth every penny."
    },
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 4.7,
      "comment": "Battery lasts long and pairs easily."
    }
  ],
  "highlights": [
    "World-Class Noise Cancellation",
    "CustomTune Sound Calibration",
    "IPX4 Sweat and Water Resistance",
    "Touch Controls"
  ],
  "specs": {
    "Driver Size": "9.3mm",
    "Bluetooth Version": "5.3",
    "Battery Life": "6 hours (earbuds) + 24 hours (case)",
    "Charging Port": "USB-C & Wireless Charging"
  },
  "modelNumber": "Bose-QCII",
  "modelName": "QuietComfort Earbuds II",
  "whatsInTheBox": [
    "QuietComfort Earbuds II",
    "Charging Case",
    "USB-C Charging Cable",
    "Ear Tips and Stability Bands",
    "Quick Start Guide"
  ],
  "isPopular": true,
  "isNewArrival": true,
  "isDiscover": true,
  "category": "6813e1dd203498cff663240c",
  "brand": "6813ddf9dedf56cb10163a27"
},



{
  "name": "Galaxy Buds3 Pro",
  "description": "Premium wireless earbuds from Samsung with intelligent ANC, ultra-clear calls, and seamless Galaxy ecosystem integration.",
  "price": 1600,
  "oldPrice": 1900,
  "discount": 300,
  "imagesAndColors": {
    "silver": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Samsung/Galaxy%20Buds3%20Pro/1-Silver.png",

    "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Samsung/Galaxy%20Buds3%20Pro/2-White.png"

  },
  "selectedColor": "silver",
  "stock": 4,
  "rating": 4.6,
  "reviewsCount": 3,
  "reviews": [
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 5,
      "comment": "Crisp sound and great Galaxy integration, love it!"
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.5,
      "comment": "ANC works well and the design feels premium."
    },
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 4.3,
      "comment": "Battery life could be better, but overall excellent."
    }
  ],
  "highlights": [
    "Intelligent Active Noise Cancellation",
    "Hi-Fi 24bit Audio",
    "360 Audio with Head Tracking",
    "Auto Switch Between Galaxy Devices"
  ],
  "specs": {
    "Driver Size": "11mm Woofer + 6.5mm Tweeter",
    "Bluetooth Version": "5.3",
    "Battery Life": "7 hours (earbuds) + 28 hours (case)",
    "Charging Port": "USB-C & Wireless Charging"
  },
  "modelNumber": "SM-R620",
  "modelName": "Galaxy Buds3 Pro",
  "whatsInTheBox": [
    "Galaxy Buds3 Pro",
    "Wireless Charging Case",
    "USB-C Cable",
    "Ear Tips (3 sizes)",
    "Quick Start Guide"
  ],
  "isPopular": true,
  "isNewArrival": true,
  "isDiscover": true,
  "category": "6813e1dd203498cff663240c",
  "brand": "6813de2adedf56cb10163a33"
},


{
  "name": "LinkBuds",
  "description": "Ultra-light and open-ring wireless earbuds by Sony, offering natural sound with no isolation for an all-day comfortable fit.",
  "price": 1300,
  "oldPrice": 1600,
  "discount": 300,
  "imagesAndColors": {
    "violet": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Sony/LinkBuds/1-Violet.png",

    "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Sony/LinkBuds/2-White.png",

    "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Sony/LinkBuds/3-Black.png"
  },
  "selectedColor": "violet",
  "stock": 8,
  "rating": 4.4,
  "reviewsCount": 5,
  "reviews": [
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 5,
      "comment": "Very comfortable, I forget they're even in my ears!"
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.2,
      "comment": "Great for listening to podcasts and making calls."
    },
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 4.5,
      "comment": "Unique open-ring design is very breathable."
    },
    {
      "user": "6813f90132625f869e1ad14a",
      "rating": 4.0,
      "comment": "Good sound, but they don’t block out much noise."
    },
    {
      "user": "6813f91032625f869e1ad14b",
      "rating": 4.3,
      "comment": "Perfect for outdoor activities and commuting."
    }
  ],
  "highlights": [
    "Open-ring Design for Natural Sound",
    "Ultra-Lightweight",
    "Adaptive Volume Control",
    "Hands-Free Voice Assistant"
  ],
  "specs": {
    "Driver Size": "12mm",
    "Bluetooth Version": "5.2",
    "Battery Life": "5.5 hours (earbuds) + 12 hours (case)",
    "Charging Port": "USB-C"
  },
  "modelNumber": "WF-L900",
  "modelName": "LinkBuds",
  "whatsInTheBox": [
    "LinkBuds",
    "Charging Case",
    "USB-C Cable",
    "Ear Tips (3 sizes)",
    "Quick Start Guide"
  ],
  "isPopular": true,
  "isNewArrival": true,
  "isDiscover": true,
  "category": "6813e1dd203498cff663240c",
  "brand": "6813de37dedf56cb10163a39"
},

{
  "name": "JR310",
  "description": "Kid-friendly over-ear headphones by JBL with safe sound levels, colorful design, and durable build for younger listeners.",
  "price": 500,
  "oldPrice": 700,
  "discount": 200,
  "imagesAndColors": {
    "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OnEar/JBL/Jr310/1-Blue.png",

    "red": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OnEar/JBL/Jr310/2-Red.png"
  },
  "selectedColor": "blue",
  "stock": 12,
  "rating": 4.3,
  "reviewsCount": 6,
  "reviews": [
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 5,
      "comment": "Perfect for kids! Safe volume and super comfortable."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.2,
      "comment": "Great sound and cute design, my kids love them!"
    },
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 4.4,
      "comment": "Nice build and perfect for my 7-year-old."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.1,
      "comment": "Good headphones, but could be a bit more padded."
    },
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 4.3,
      "comment": "Perfect for car trips, keeps the kids entertained."
    },
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 4.5,
      "comment": "Affordable, durable, and just right for younger children."
    }
  ],
  "highlights": [
    "Volume Limiting to Protect Hearing",
    "Durable and Lightweight Design",
    "Soft Cushions for Comfort",
    "Fun, Kid-Friendly Colors"
  ],
  "specs": {
    "Driver Size": "32mm",
    "Bluetooth Version": "None (Wired)",
    "Battery Life": "N/A (Wired)",
    "Charging Port": "N/A"
  },
  "modelNumber": "JBL-JR310",
  "modelName": "JR310",
  "whatsInTheBox": [
    "JR310 Headphones",
    "Audio Cable (1.2m)",
    "Quick Start Guide"
  ],
  "isPopular": true,
  "isNewArrival": true,
  "isDiscover": true,
  "category": "6813e233203498cff6632424",
  "brand": "6813de19dedf56cb10163a2d"
},

{
  "name": "MDR-ZX110",
  "description": "Lightweight on-ear headphones with a foldable design, providing clear sound and deep bass at an affordable price.",
  "price": 800,
  "oldPrice": 1000,
  "discount": 200,
  "imagesAndColors": {
    "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OnEar/Sony/MDR-ZX110/1-Black.png",

    "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OnEar/Sony/MDR-ZX110/2-White.png"
  },
  "selectedColor": "black",
  "stock": 20,
  "rating": 4.5,
  "reviewsCount": 8,
  "reviews": [
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 5,
      "comment": "Great sound for the price, very comfortable to wear."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.7,
      "comment": "Good bass and clear treble, lightweight and easy to carry."
    },
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 4.3,
      "comment": "Affordable and functional, sound quality could be better at higher volumes."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.5,
      "comment": "The best budget headphones I've used so far."
    },
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 4.8,
      "comment": "Good build quality, foldable design is convenient for storage."
    },
    {
      "user": "6813f90132625f869e1ad14a",
      "rating": 4.2,
      "comment": "Perfect for casual listening, very comfortable."
    },
    {
      "user": "6813f91032625f869e1ad14b",
      "rating": 4.6,
      "comment": "Light and easy to use, the sound quality is impressive for the price."
    },
    {
      "user": "6813f92032625f869e1ad14c",
      "rating": 4.4,
      "comment": "Decent headphones for the price range, good for everyday use."
    }
  ],
  "highlights": [
    "Clear Sound and Deep Bass",
    "Foldable Design for Portability",
    "Lightweight and Comfortable",
    "Affordable Price"
  ],
  "specs": {
    "Driver Size": "30mm",
    "Bluetooth Version": "None (Wired)",
    "Battery Life": "N/A (Wired)",
    "Charging Port": "N/A"
  },
  "modelNumber": "MDR-ZX110",
  "modelName": "MDR-ZX110",
  "whatsInTheBox": [
    "MDR-ZX110 Headphones",
    "Audio Cable (1.2m)",
    "Quick Start Guide"
  ],
  "isPopular": true,
  "isNewArrival": true,
  "isDiscover": true,
  "category": "6813e233203498cff6632424",
  "brand": "6813de37dedf56cb10163a39"
},



{
  "name": "Soundcore Q30",
  "description": "Wireless over-ear headphones with hybrid active noise cancellation, customizable sound profiles, and ultra-long battery life for immersive listening.",
  "price": 1500,
  "oldPrice": 1800,
  "discount": 300,
  "imagesAndColors": {
  "pink": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OverEar/Anker/Q30/1-Pink.png",

    "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OverEar/Anker/Q30/2-Black.png",

    "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OverEar/Anker/Q30/3-Blue.png"
  },
  "selectedColor": "pink",
  "stock": 15,
  "rating": 4.7,
  "reviewsCount": 10,
  "reviews": [
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 5,
      "comment": "Excellent noise cancellation, great for travel and long listening sessions."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.8,
      "comment": "The sound quality is superb and the battery life is incredible."
    },
    {
      "user": "6813eaa28fa56876d597ebe9",
      "rating": 4.9,
      "comment": "Perfect for blocking out noise while traveling, very comfortable."
    },
    {
      "user": "6813f91d32625f869e1ad143",
      "rating": 4.6,
      "comment": "Amazing value for the price, works great for both music and calls."
    },
    {
      "user": "6813f8dc32625f869e1ad13e",
      "rating": 4.7,
      "comment": "Great battery life, lasts me through multiple flights without needing a recharge."
    },
    {
      "user": "6813f90132625f869e1ad14a",
      "rating": 4.4,
      "comment": "Good noise cancellation, but could be better in extremely noisy environments."
    },
    {
      "user": "6813f91032625f869e1ad14b",
      "rating": 4.7,
      "comment": "Comfortable for long hours of use, and the sound quality is top-notch."
    },
    {
      "user": "6813f92032625f869e1ad14c",
      "rating": 4.5,
      "comment": "Decent bass and clear mids, very happy with the purchase."
    },
    {
      "user": "6813f91032625f869e1ad14d",
      "rating": 4.6,
      "comment": "Good for both casual listening and working in noisy environments."
    },
    {
      "user": "6813f8dc32625f869e1ad13f",
      "rating": 4.8,
      "comment": "Noise cancellation works well and the comfort is amazing for extended use."
    }
  ],
  "highlights": [
    "Hybrid Active Noise Cancellation",
    "40-Hour Playtime",
    "Customizable Sound Profiles",
    "Comfortable Memory Foam Ear Cups"
  ],
  "specs": {
    "Driver Size": "40mm",
    "Bluetooth Version": "5.0",
    "Battery Life": "40 hours (with ANC on)",
    "Charging Port": "USB-C"
  },
  "modelNumber": "Q30",
  "modelName": "Soundcore Q30",
  "whatsInTheBox": [
    "Q30 Headphones",
    "USB-C Charging Cable",
    "3.5mm Audio Cable",
    "Carrying Case",
    "User Manual"
  ],
  "isPopular": true,
  "isNewArrival": true,
  "isDiscover": true,
  "category": "6813e206203498cff6632416",
  "brand": "6813dde7dedf56cb10163a21"
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
