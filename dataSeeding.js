// seeder.js
const mongoose = require('mongoose');
const Product = require('./models/productModel'); // adjust path if needed
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.CONNECTION_STR);

const dummyProducts = [
  
  {
    "name": "Liberty 4 Pro",
    "description": "Liberty 4 Pro delivers crystal-clear sound with deep bass and a comfortable fit for all-day use.",
    "price": 1150,
    "oldPrice": 1400,
    "discount": 250,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Anker/Liberty%204%20Pro/1-Light%20Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Anker/Liberty%204%20Pro/3-White.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Anker/Liberty%204%20Pro/4-Light%20Blue.png"
    },
    "selectedColor": "black",
    "stock": 10,
    "rating": 4.7,
    "reviewsCount": 25,
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
      "Superior Hi-Fi Sound",
      "Enhanced Bass Boost",
      "Ergonomic Fit for Comfort",
      "Smart Touch Controls"
    ],
    "specs": {
      "Driver Size": "10mm",
      "Bluetooth Version": "5.2",
      "Battery Life": "7 hours (earbuds) + 28 hours (case)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "A3953",
    "modelName": "Liberty 4 Pro",
    "whatsInTheBox": [
      "Liberty 4 Pro Earbuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (S, M, L)",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "Anker "
  },

  {
    "name": "Space A40",
    "description": "Space A40 offers an immersive space-grade audio experience with long battery life and customizable sound profiles.",
    "price": 1300,
    "oldPrice": 1600,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/3d6e9d6f599c6396724128b56de58697c46d7ef3/products/InEar/Anker/Space%20A40/1-Black.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/3d6e9d6f599c6396724128b56de58697c46d7ef3/products/InEar/Anker/Space%20A40/2-Blue.png"
    },
    "selectedColor": "black",
    "stock": 8,
    "rating": 4.9,
    "reviewsCount": 30,
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
      "Customizable EQ Settings",
      "Long-lasting Battery",
      "Compact Charging Case",
      "Seamless Device Switching"
    ],
    "specs": {
      "Driver Size": "12mm",
      "Bluetooth Version": "5.3",
      "Battery Life": "9 hours (earbuds) + 30 hours (case)",
      "Charging Port": "USB-C & Wireless Charging"
    },
    "modelNumber": "A4973",
    "modelName": "Space A40",
    "whatsInTheBox": [
      "Space A40 Earbuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (S, M, L)",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": false,
    "category": "In-Ear",
    "brand": "Anker"
  },

  {
    "name": "Sport X20",
    "description": "Sport X20 is designed for athletes with sweat-resistant tech, secure fit, and rich sound for your workouts.",
    "price": 1100,
    "oldPrice": 1400,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Anker/Sport%20X20/1-Black.png",
      "Golden White": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Anker/Sport%20X20/2-Golden%20White.png",
      "Green": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Anker/Sport%20X20/3-Green.png"
    },
    "selectedColor": "black",
    "stock": 15,
    "rating": 4.6,
    "reviewsCount": 20,
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
      "Sweat and Water Resistant",
      "Secure Fit for Active Use",
      "Clear Vocals and Deep Bass",
      "Fast Charging Support"
    ],
    "specs": {
      "Driver Size": "11.5mm",
      "Bluetooth Version": "5.2",
      "Battery Life": "6.5 hours (earbuds) + 24 hours (case)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "X8973",
    "modelName": "Sport X20",
    "whatsInTheBox": [
      "Sport X20 Earbuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (S, M, L)",
      "User Manual"
    ],
    "isPopular": false,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "Anker"
  },

  {
    "name": "QuietComfort Earbuds",
    "description": "QuietComfort Earbuds by Bose deliver premium noise cancellation and crystal-clear sound for the ultimate listening experience.",
    "price": 1750,
    "oldPrice": 2100,
    "discount": 350,
    "imagesAndColors": {
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Bose/QuietComfort%20Earbuds/1-White.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Bose/QuietComfort%20Earbuds/2-Black.png",
      "white-smooked": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Bose/QuietComfort%20Earbuds/3-White%20Smoked.png"
    },
    "selectedColor": "white",
    "stock": 7,
    "rating": 4.95,
    "reviewsCount": 40,
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
      "Industry-Leading Noise Cancellation",
      "CustomTune Calibration",
      "IPX4 Sweat Resistant",
      "Intuitive Touch Controls"
    ],
    "specs": {
      "Driver Size": "9.5mm",
      "Bluetooth Version": "5.3",
      "Battery Life": "6 hours (earbuds) + 24 hours (case)",
      "Charging Port": "USB-C & Wireless Charging"
    },
    "modelNumber": "Bose-QCE-900",
    "modelName": "QuietComfort Earbuds",
    "whatsInTheBox": [
      "QuietComfort Earbuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (S, M, L)",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": false,
    "category": "In-Ear",
    "brand": "Bose"
  },


  {
    "name": "SoundLink Around-Ear",
    "description": "SoundLink Around-Ear headphones deliver rich, balanced sound with plush comfort and up to 20 hours of battery life.",
    "price": 1950,
    "oldPrice": 2300,
    "discount": 350,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OnEar/Bose/SoundLink%20Around-Ear/1-Black.png",
      "silver": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OnEar/Bose/SoundLink%20Around-Ear/2-Silver.png"
    },
    "selectedColor": "black",
    "stock": 9,
    "rating": 4.8,
    "reviewsCount": 22,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Comfortable and clear sound for long listening."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.5,
        "comment": "Good battery life and rich bass."
      }
    ],
    "highlights": [
      "Plush Ear Cushions",
      "Balanced Audio",
      "Long Battery Life",
      "On-Ear Controls"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Bluetooth Version": "5.1",
      "Battery Life": "20 hours",
      "Charging Port": "Micro-USB"
    },
    "modelNumber": "Bose-SL-AR-20",
    "modelName": "SoundLink Around-Ear",
    "whatsInTheBox": [
      "SoundLink Around-Ear Headphones",
      "Charging Cable",
      "Carrying Case",
      "User Manual"
    ],
    "isPopular": false,
    "isNewArrival": false,
    "isDiscover": true,
    "category": "On-Ear",
    "brand": "Bose"
  },





  {
    "name": "Ultra Open",
    "description": "Bose Ultra Open earbuds deliver premium wireless sound with industry-leading noise cancellation, crystal-clear calls, and a comfortable open-ear design.",
    "price": 1800,
    "oldPrice": 2100,
    "discount": 300,
    "imagesAndColors": {
      "white Smoked": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Bose/Ultra%20Open/1-White%20Smoked.png",
      "Red": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Bose/Ultra%20Open/2-Red.png",
      "Blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Bose/Ultra%20Open/3-Blue.png",
      "Silver": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Bose/Ultra%20Open/4-Silver.png"
    },
    "selectedColor": "white Smoked",
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
      "Touch Controls",
      "Open-ear Comfort Design"
    ],
    "specs": {
      "Driver Size": "9.3mm Dynamic Driver",
      "Bluetooth Version": "5.3",
      "Battery Life": "6 hours (earbuds) + 24 hours (charging case)",
      "Charging Port": "USB-C & Wireless Charging",
      "Weight": "10 grams per earbud"
    },
    "modelNumber": "Bose-U51I",
    "modelName": "Ultra Open",
    "whatsInTheBox": [
      "Ultra Open earbuds",
      "Charging Case",
      "USB-C Charging Cable",
      "Ear Tips and Stability Bands",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "Bose "
  },
  {
    "name": "Tour Pro 3",
    "description": "Samsung Tour Pro 3 earbuds offer intelligent ANC, ultra-clear calls, and seamless Galaxy device integration for an immersive audio experience.",
    "price": 1600,
    "oldPrice": 1900,
    "discount": 300,
    "imagesAndColors": {
      "silver": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Tour%20Pro%203/1-Silver.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Tour%20Pro%203/2-Black.png"
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
      "Auto Switch Between Galaxy Devices",
      "Seamless Bluetooth Connectivity"
    ],
    "specs": {
      "Driver Size": "11mm Woofer + 6.5mm Tweeter",
      "Bluetooth Version": "5.3",
      "Battery Life": "7 hours (earbuds) + 28 hours (charging case)",
      "Charging Port": "USB-C & Wireless Charging",
      "Weight": "8.5 grams per earbud"
    },
    "modelNumber": "SM-R620",
    "modelName": "Tour Pro 3",
    "whatsInTheBox": [
      "Tour Pro 3 earbuds",
      "Wireless Charging Case",
      "USB-C Cable",
      "Ear Tips (3 sizes)",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "JBL "
  },
  {
    "name": "Tune Beam 2",
    "description": "Samsung Tune Beam 2 delivers premium sound quality with intelligent ANC, ultra-clear voice calls, and smooth Galaxy device integration.",
    "price": 1600,
    "oldPrice": 1900,
    "discount": 300,
    "imagesAndColors": {
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Tune%20Beam%202/1-White.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Tune%20Beam%202/2-Black.png"
    },
    "selectedColor": "white",
    "stock": 4,
    "rating": 4.6,
    "reviewsCount": 3,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Clear audio and comfortable fit, perfect for everyday use."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.5,
        "comment": "ANC is effective and battery life is reliable."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.3,
        "comment": "Great sound quality but could improve on bass performance."
      }
    ],
    "highlights": [
      "Intelligent Active Noise Cancellation",
      "Hi-Fi 24bit Audio",
      "360 Audio with Head Tracking",
      "Auto Switch Between Galaxy Devices",
      "Comfortable Secure Fit"
    ],
    "specs": {
      "Driver Size": "11mm Woofer + 6.5mm Tweeter",
      "Bluetooth Version": "5.3",
      "Battery Life": "7 hours (earbuds) + 28 hours (charging case)",
      "Charging Port": "USB-C & Wireless Charging",
      "Weight": "8.2 grams per earbud"
    },
    "modelNumber": "SM-R620",
    "modelName": "Tune Beam 2",
    "whatsInTheBox": [
      "Tune Beam 2 earbuds",
      "Wireless Charging Case",
      "USB-C Cable",
      "Ear Tips (3 sizes)",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "JBL "
  },
  {
    "name": "Tune Flex 2",
    "description": "Samsung Tune Flex 2 earbuds combine intelligent ANC and premium audio for a flexible and immersive listening experience, perfect for daily use.",
    "price": 1600,
    "oldPrice": 1900,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Tune%20Flex%202/1-Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Tune%20Flex%202/2-White.png"
    },
    "selectedColor": "black",
    "stock": 4,
    "rating": 4.6,
    "reviewsCount": 3,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Balanced sound and great noise cancellation for the price."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.5,
        "comment": "Comfortable and stable fit during workouts."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.3,
        "comment": "Battery lasts long and connects instantly."
      }
    ],
    "highlights": [
      "Intelligent Active Noise Cancellation",
      "Hi-Fi 24bit Audio",
      "360 Audio with Head Tracking",
      "Auto Switch Between Galaxy Devices",
      "Secure and Comfortable Fit"
    ],
    "specs": {
      "Driver Size": "11mm Woofer + 6.5mm Tweeter",
      "Bluetooth Version": "5.3",
      "Battery Life": "7 hours (earbuds) + 28 hours (charging case)",
      "Charging Port": "USB-C & Wireless Charging",
      "Weight": "8.3 grams per earbud"
    },
    "modelNumber": "SM-R620",
    "modelName": "Tune Flex 2",
    "whatsInTheBox": [
      "Tune Flex 2 earbuds",
      "Wireless Charging Case",
      "USB-C Cable",
      "Ear Tips (3 sizes)",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "JBL "
  },










  {
    "name": "Vibe Buds 2",
    "description": "Experience immersive sound with Vibe Buds 2 by JBL, featuring advanced noise cancellation and dynamic audio performance.",
    "price": 1750,
    "oldPrice": 2000,
    "discount": 250,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Vibe%20Buds%202/1-Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Vibe%20Buds%202/2-White.png",
      "green": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Vibe%20Buds%202/3-Green.png",
      "pink": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/JBL/Vibe%20Buds%202/4-Pink.png"
    },
    "selectedColor": "black",
    "stock": 10,
    "rating": 4.7,
    "reviewsCount": 12,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Vibe Buds 2 deliver crystal clear sound with impressive bass."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.5,
        "comment": "Comfortable fit and excellent battery life on the Vibe Buds 2."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.4,
        "comment": "Noise cancellation on these earbuds is top-notch."
      }
    ],
    "highlights": [
      "JBL Signature Sound",
      "Advanced Noise Cancellation",
      "Long-lasting Battery Life",
      "Fast Charging Support"
    ],
    "specs": {
      "Driver Size": "10mm Dynamic Driver",
      "Bluetooth Version": "5.2",
      "Battery Life": "8 hours (earbuds) + 24 hours (case)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "VibeB2-2025",
    "modelName": "Vibe Buds 2",
    "whatsInTheBox": [
      "Vibe Buds 2 Earbuds",
      "Charging Case",
      "USB-C Charging Cable",
      "Multiple Ear Tips",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "JBL "
  },

  {
    "name": "Galaxy Buds3 Pro",
    "description": "Galaxy Buds3 Pro combine premium sound with seamless integration into the Samsung Galaxy ecosystem for an elevated listening experience.",
    "price": 1850,
    "oldPrice": 2200,
    "discount": 350,
    "imagesAndColors": {
      "silver": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Samsung/Galaxy%20Buds3%20Pro/1-Silver.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Samsung/Galaxy%20Buds3%20Pro/2-White.png"
    },
    "selectedColor": "silver",
    "stock": 15,
    "rating": 4.8,
    "reviewsCount": 18,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "The Galaxy Buds3 Pro offer stunning clarity and great noise cancellation."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.7,
        "comment": "Perfect earbuds for Samsung users, seamless pairing every time."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.5,
        "comment": "Comfortable for long wear with excellent audio balance."
      }
    ],
    "highlights": [
      "Premium Active Noise Cancellation",
      "Rich Hi-Fi Sound",
      "Seamless Galaxy Device Switching",
      "Wireless Charging Case"
    ],
    "specs": {
      "Driver Size": "11mm Woofer + 6.5mm Tweeter",
      "Bluetooth Version": "5.3",
      "Battery Life": "8 hours (earbuds) + 29 hours (case)",
      "Charging Port": "USB-C & Wireless Charging"
    },
    "modelNumber": "SM-R620-2025",
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
    "isDiscover": false,
    "category": "In-Ear",
    "brand": "Samsung "
  },

  {
    "name": "LinkBuds",
    "description": "Sony LinkBuds offer an ultra-lightweight design and open-ring technology for natural sound and all-day comfort.",
    "price": 1400,
    "oldPrice": 1700,
    "discount": 300,
    "imagesAndColors": {
      "violet": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Sony/LinkBuds/1-Violet.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Sony/LinkBuds/2-White.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Sony/LinkBuds/3-Black.png"
    },
    "selectedColor": "violet",
    "stock": 20,
    "rating": 4.5,
    "reviewsCount": 10,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Lightweight and breathable, perfect for everyday use."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.3,
        "comment": "Great sound quality for podcasts and calls."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.4,
        "comment": "Open-ring design keeps ears comfortable for hours."
      }
    ],
    "highlights": [
      "Open-ring Design",
      "Ultra-Lightweight Build",
      "Adaptive Volume Control",
      "Hands-Free Voice Assistant"
    ],
    "specs": {
      "Driver Size": "12mm",
      "Bluetooth Version": "5.2",
      "Battery Life": "6 hours (earbuds) + 13 hours (case)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "WF-L900-2025",
    "modelName": "LinkBuds",
    "whatsInTheBox": [
      "Sony LinkBuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (3 sizes)",
      "User Manual"
    ],
    "isPopular": false,
    "isNewArrival": true,
    "isDiscover": false,
    "category": "In-Ear",
    "brand": "Sony "
  },

  {
    "name": "Galaxy Buds Live",
    "description": "Samsung Galaxy Buds Live feature a unique bean-shaped design and active noise cancellation for immersive audio.",
    "price": 1600,
    "oldPrice": 1900,
    "discount": 300,
    "imagesAndColors": {
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Samsung/Galaxy%20Buds%20Live/1-White.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Samsung/Galaxy%20Buds%20Live/2-Black.png",
      "brown": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/InEar/Samsung/Galaxy%20Buds%20Live/3-Brown.png"
    },
    "selectedColor": "white",
    "stock": 8,
    "rating": 4.6,
    "reviewsCount": 14,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Galaxy Buds Live provide rich, deep bass and clear mids."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.5,
        "comment": "Comfortable fit for long listening sessions."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.3,
        "comment": "Battery life is impressive for their size."
      }
    ],
    "highlights": [
      "Active Noise Cancellation",
      "Bean-Shaped Design",
      "Wireless Charging",
      "Voice Assistant Integration"
    ],
    "specs": {
      "Driver Size": "12mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "6 hours (earbuds) + 15 hours (case)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "SM-R180-2025",
    "modelName": "Galaxy Buds Live",
    "whatsInTheBox": [
      "Galaxy Buds Live Earbuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (3 sizes)",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": false,
    "category": "In-Ear",
    "brand": "Samsung "
  },

  {
    "name": "Buds 2 Pro",
    "description": "Buds 2 Pro by Samsung deliver premium sound quality with intelligent ANC and comfortable design.",
    "price": 1950,
    "oldPrice": 2300,
    "discount": 350,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/eb7c4e7aa30969387520ec2ce7bde02efec8c388/products/InEar/Samsung/Buds%202%20Pro/1-Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/eb7c4e7aa30969387520ec2ce7bde02efec8c388/products/InEar/Samsung/Buds%202%20Pro/2-White.png"
    },
    "selectedColor": "black",
    "stock": 12,
    "rating": 4.9,
    "reviewsCount": 20,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Outstanding audio with crisp highs and deep lows."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.8,
        "comment": "Fits comfortably and ANC works flawlessly."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.7,
        "comment": "Battery lasts all day with fast recharge."
      }
    ],
    "highlights": [
      "Intelligent Active Noise Cancelling",
      "Hi-Fi 24-bit Audio",
      "Compact and Lightweight Design",
      "Wireless Charging Case"
    ],
    "specs": {
      "Driver Size": "11mm",
      "Bluetooth Version": "5.3",
      "Battery Life": "8 hours (earbuds) + 29 hours (case)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "SM-R510-2025",
    "modelName": "Buds 2 Pro",
    "whatsInTheBox": [
      "Samsung Buds 2 Pro Earbuds",
      "Wireless Charging Case",
      "USB-C Cable",
      "Ear Tips (3 sizes)",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "Samsung "
  },









  {
    "name": "MDR-XB55AP",
    "description": "Extra bass and clear sound for music lovers, with ergonomic open-ring design to stay comfortable all day long.",
    "price": 1300,
    "oldPrice": 1600,
    "discount": 300,
    "imagesAndColors": {
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Sony/MDR-XB55AP/1-Blue.png",
      "red": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Sony/MDR-XB55AP/2-Red.png",
      "black":"https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Sony/MDR-XB55AP/3-Black.png"
    },
    "selectedColor": "blue",
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
      "Extra Bass Sound",
      "Ergonomic Open-Ring Design",
      "Comfortable Fit for Long Hours",
      "Built-in Microphone and Controls"
    ],
    "specs": {
      "Driver Size": "12mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "6 hours (earbuds) + 15 hours (case)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "MDR-XB55AP",
    "modelName": "MDR-XB55AP",
    "whatsInTheBox": [
      "MDR-XB55AP Earbuds",
      "Charging Case",
      "USB-C Cable",
      "Ear Tips (3 sizes)",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "Sony"
  },
  {
    "name": "WI-C100",
    "description": "Wireless neckband earbuds with powerful bass and extra comfort for all-day wear, plus quick charging and long battery life.",
    "price": 1100,
    "oldPrice": 1400,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Sony/WI-C100/1-Black.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Sony/WI-C100/2-Blue.png",
      "white":"https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/InEar/Sony/WI-C100/3-White.png"
    },
    "selectedColor": "black",
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
      "Neckband Style Wireless Earbuds",
      "Long Battery Life up to 15 hours",
      "Quick Charging Technology",
      "Integrated Microphone and Voice Assistant"
    ],
    "specs": {
      "Driver Size": "9mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "15 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "WI-C100",
    "modelName": "WI-C100",
    "whatsInTheBox": [
      "WI-C100 Earbuds",
      "Charging Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "In-Ear",
    "brand": "Sony"
  },
  {
    "name": "JR310",
    "description": "Kid-friendly over-ear headphones designed to protect hearing with limited volume and comfortable, colorful design perfect for younger users.",
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
      "Volume Limiting for Hearing Protection",
      "Colorful Design for Kids",
      "Adjustable Headband",
      "Durable Build"
    ],
    "specs": {
      "Driver Size": "32mm",
      "Frequency Response": "20Hz - 20kHz",
      "Cable Length": "1.2 meters",
      "Connectivity": "Wired 3.5mm"
    },
    "modelNumber": "JR310",
    "modelName": "JR310",
    "whatsInTheBox": [
      "JR310 Headphones",
      "User Guide"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": true,
    "category": "On-Ear",
    "brand": "JBL"
  },
  {
    "name": "Quantum 300",
    "description": "Gaming headset with immersive sound, comfortable ear cups, and a noise-canceling mic for crystal clear communication.",
    "price": 1300,
    "oldPrice": 1500,
    "discount": 200,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/c66287268664614912eb5cd50a97c5d08500d900/products/OnEar/Logitech/Quantum300/1-Black.png"
    },
    "selectedColor": "black",
    "stock": 15,
    "rating": 4.7,
    "reviewsCount": 9,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Great sound and very comfortable for long gaming sessions."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.8,
        "comment": "Noise canceling mic works perfectly in noisy environments."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.5,
        "comment": "The headset feels solid and looks good."
      },
      {
        "user": "6813f90132625f869e1ad14a",
        "rating": 4.6,
        "comment": "Good bass and clear mids."
      },
      {
        "user": "6813f91032625f869e1ad14b",
        "rating": 4.9,
        "comment": "Awesome value for the price."
      }
    ],
    "highlights": [
      "Pro-grade Sound for Gaming",
      "Noise-Canceling Microphone",
      "Comfortable Memory Foam Ear Cups",
      "Durable Build"
    ],
    "specs": {
      "Driver Size": "50mm",
      "Connectivity": "Wired USB",
      "Frequency Response": "20Hz - 20kHz",
      "Mic Type": "Noise-canceling boom mic"
    },
    "modelNumber": "Quantum300",
    "modelName": "Quantum 300",
    "whatsInTheBox": [
      "Quantum 300 Headset",
      "User Manual",
      "Warranty Card"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": true,
    "category": "On-Ear",
    "brand": "Logitech"
  },





  {
    "name": "Junior 320",
    "description": "Junior 320 over-ear headphones with hybrid active noise cancellation, customizable sound profiles, and ultra-long battery life for immersive listening.",
    "price": 1300,
    "oldPrice": 1600,
    "discount": 300,
    "imagesAndColors": {
      "pink": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/JBL/Junior%20320/2-Pink.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/JBL/Junior%20320/1-Blue.png"
    },
    "selectedColor": "pink",
    "stock": 20,
    "rating": 4.6,
    "reviewsCount": 8,
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
      }
    ],
    "highlights": [
      "Junior 320 Hybrid Active Noise Cancellation",
      "35-Hour Playtime",
      "Customizable Sound Profiles",
      "Comfortable Memory Foam Ear Cups"
    ],
    "specs": {
      "Driver Size": "38mm",
      "Bluetooth Version": "5.1",
      "Battery Life": "35 hours (with ANC on)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "J320",
    "modelName": "Junior 320",
    "whatsInTheBox": [
      "Junior 320 Headphones",
      "USB-C Charging Cable",
      "3.5mm Audio Cable",
      "Carrying Case",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "On-Ear",
    "brand": "JBL"
  },
  {
    "name": "Live 460NC",
    "description": "Live 460NC wireless over-ear headphones with hybrid active noise cancellation, customizable sound profiles, and ultra-long battery life for immersive listening.",
    "price": 1700,
    "oldPrice": 2100,
    "discount": 400,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/JBL/Live%20460NC/1-Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/JBL/Live%20460NC/3-White.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/JBL/Live%20460NC/2-Blue.png"
    },
    "selectedColor": "black",
    "stock": 10,
    "rating": 4.8,
    "reviewsCount": 12,
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
      "Live 460NC Hybrid Active Noise Cancellation",
      "45-Hour Playtime",
      "Customizable Sound Profiles",
      "Comfortable Memory Foam Ear Cups"
    ],
    "specs": {
      "Driver Size": "42mm",
      "Bluetooth Version": "5.2",
      "Battery Life": "45 hours (with ANC on)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "L460NC",
    "modelName": "Live 460NC",
    "whatsInTheBox": [
      "Live 460NC Headphones",
      "USB-C Charging Cable",
      "3.5mm Audio Cable",
      "Carrying Case",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": true,
    "category": "On-Ear",
    "brand": "JBL"
  },
  {
    "name": "Tune 500",
    "description": "Tune 500 wireless on-ear headphones with hybrid active noise cancellation, customizable sound profiles, and ultra-long battery life for immersive listening.",
    "price": 1100,
    "oldPrice": 1400,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/JBL/Tune%20500/2-Black.png",
      "pink": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/JBL/Tune%20500/1-Pink.png"
    },
    "selectedColor": "black",
    "stock": 15,
    "rating": 4.5,
    "reviewsCount": 7,
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
        "user": "6813f92032625f869e1ad14c",
        "rating": 4.5,
        "comment": "Decent bass and clear mids, very happy with the purchase."
      }
    ],
    "highlights": [
      "Tune 500 Hybrid Active Noise Cancellation",
      "30-Hour Playtime",
      "Customizable Sound Profiles",
      "Lightweight Design"
    ],
    "specs": {
      "Driver Size": "36mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "30 hours (with ANC on)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "T500",
    "modelName": "Tune 500",
    "whatsInTheBox": [
      "Tune 500 Headphones",
      "USB-C Charging Cable",
      "3.5mm Audio Cable",
      "User Manual"
    ],
    "isPopular": false,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "On-Ear",
    "brand": "JBL"
  },







  {
    "name": "MDR-ZX110",
    "description": "Affordable on-ear headphones with clear sound quality, lightweight design, and durable build for everyday use.",
    "price": 400,
    "oldPrice": 600,
    "discount": 200,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/MDR-ZX110/1-Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/MDR-ZX110/2-White.png"
    },
    "selectedColor": "black",
    "stock": 40,
    "rating": 4.1,
    "reviewsCount": 25,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4,
        "comment": "Good sound for the price, lightweight and comfortable."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.2,
        "comment": "Decent bass and clear vocals, but no noise cancellation."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.3,
        "comment": "Perfect for casual use and travel."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.0,
        "comment": "Affordable and sturdy headphones."
      }
    ],
    "highlights": [
      "Lightweight and Comfortable",
      "Durable Build",
      "Clear Sound Quality",
      "Foldable Design for Easy Portability"
    ],
    "specs": {
      "Driver Size": "30mm",
      "Bluetooth Version": "Wired",
      "Battery Life": "N/A",
      "Charging Port": "N/A"
    },
    "modelNumber": "MDR-ZX110",
    "modelName": "Sony MDR-ZX110",
    "whatsInTheBox": [
      "MDR-ZX110 Headphones",
      "User Manual",
      "Warranty Card"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": false,
    "category": "On-Ear",
    "brand": "Sony"
  },
  {
    "name": "MDR-ZX110NC",
    "description": "On-ear headphones with active noise cancellation, comfortable fit, and enhanced bass for a better music experience.",
    "price": 850,
    "oldPrice": 1100,
    "discount": 250,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/MDR-ZX110NC/1-Black.png"
    },
    "selectedColor": "black",
    "stock": 25,
    "rating": 4.3,
    "reviewsCount": 18,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.5,
        "comment": "Noise cancellation works well for the price."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.1,
        "comment": "Comfortable to wear for hours, bass is good."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.4,
        "comment": "Perfect for office and commute."
      }
    ],
    "highlights": [
      "Active Noise Cancellation",
      "Enhanced Bass Performance",
      "Lightweight and Foldable Design",
      "Adjustable Headband"
    ],
    "specs": {
      "Driver Size": "30mm",
      "Bluetooth Version": "Wired",
      "Battery Life": "N/A (for ANC-powered)",
      "Charging Port": "Micro USB"
    },
    "modelNumber": "MDR-ZX110NC",
    "modelName": "Sony MDR-ZX110NC",
    "whatsInTheBox": [
      "MDR-ZX110NC Headphones",
      "Micro USB Charging Cable",
      "User Manual"
    ],
    "isPopular": false,
    "isNewArrival": false,
    "isDiscover": false,
    "category": "On-Ear",
    "brand": "Sony"
  },
  {
    "name": "WH-CH520",
    "description": "Wireless on-ear headphones with long battery life, vibrant color options, and rich sound quality for everyday entertainment.",
    "price": 1200,
    "oldPrice": 1500,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/WH-CH520/1-Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/WH-CH520/5-White.png",
      "beige": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/WH-CH520/2-Beige.png",
      "pink": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/WH-CH520/4-Pink.png",
      "yellow": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/WH-CH520/6-Yellow.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OnEar/Sony/WH-CH520/3-Blue.png"
    },
    "selectedColor": "black",
    "stock": 30,
    "rating": 4.5,
    "reviewsCount": 35,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.5,
        "comment": "Great battery life and vibrant color options."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.6,
        "comment": "Sound quality is clear and enjoyable."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.4,
        "comment": "Very comfortable for daily use."
      }
    ],
    "highlights": [
      "Wireless Bluetooth Connectivity",
      "Up to 35 Hours Battery Life",
      "Multiple Color Options",
      "Comfortable Ear Cushions"
    ],
    "specs": {
      "Driver Size": "30mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "35 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "WH-CH520",
    "modelName": "Sony WH-CH520",
    "whatsInTheBox": [
      "WH-CH520 Headphones",
      "USB-C Charging Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": false,
    "category": "On-Ear",
    "brand": "Sony"
  },













// OVER EARE - FARES


  {
    "name": "Soundcore Q30",
    "description": "The Soundcore Q30 wireless over-ear headphones deliver advanced hybrid active noise cancellation, deep bass, and Hi-Res certified sound, designed for uninterrupted listening on the go.",
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
    "reviews": [/* unchanged */],
    "highlights": [
      "Hi-Res Audio Certified",
      "Hybrid Active Noise Cancelling",
      "40-Hour Playtime with ANC",
      "Multi-Mode Noise Cancellation",
      "Lightweight Design for Comfort"
    ],
    "specs": {
      "Driver Size": "40mm Silk Diaphragm Drivers",
      "Bluetooth Version": "5.0",
      "Battery Life": "40 hours (ANC on), 60 hours (ANC off)",
      "Charging Port": "USB-C",
      "Noise Cancellation": "Hybrid (Dual microphones)"
    },
    "modelNumber": "Q30",
    "modelName": "Soundcore Q30",
    "whatsInTheBox": [
      "Soundcore Q30 Headphones",
      "USB-C Charging Cable",
      "3.5mm AUX Cable",
      "Travel Pouch",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Anker "
  },
  {
    "name": "Space One Pro",
    "description": "The Space One Pro combines smart adaptive noise cancellation with ultra-clear sound and a premium design, perfect for audiophiles who demand precision and long battery life.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "CreamWhite": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Anker/Space%20One%20Pro/1-CreamWhite.png",
      "JetBlack": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Anker/Space%20One%20Pro/2-JetBlack.png"
    },
    "selectedColor": "CreamWhite",
    "stock": 15,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* unchanged */],
    "highlights": [
      "Adaptive ANC with Real-Time Adjustment",
      "Up to 55-Hour Battery Life",
      "Dual Connection with Seamless Switching",
      "High-Fidelity Sound with LDAC",
      "Ergonomic Over-Ear Comfort"
    ],
    "specs": {
      "Driver Size": "40mm Dynamic Drivers",
      "Bluetooth Version": "5.3",
      "Battery Life": "55 hours (ANC off), 40 hours (ANC on)",
      "Charging Port": "USB-C",
      "Noise Cancellation": "Adaptive ANC with Environment Detection"
    },
    "modelNumber": "One Pro",
    "modelName": "Space One Pro",
    "whatsInTheBox": [
      "Space One Pro Headphones",
      "USB-C Charging Cable",
      "3.5mm Audio Cable",
      "Premium Travel Case",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Anker"
  },
  {
    "name": "Space Q45",
    "description": "Engineered for pure listening, the Space Q45 features advanced adaptive noise cancellation, stunning clarity with Hi-Res Wireless audio, and multi-point connectivity for everyday convenience.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Anker/Space%20Q45/1-Black.png",
      "White": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Anker/Space%20Q45/2-White.png",
      "Blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Anker/Space%20Q45/3-Blue.png"
    },
    "selectedColor": "Black",
    "stock": 15,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* unchanged */],
    "highlights": [
      "Adaptive Noise Cancelling",
      "Hi-Res Wireless Audio with LDAC",
      "50-Hour Playback Time",
      "Dual Device Connection",
      "Aluminum Alloy Hinges for Durability"
    ],
    "specs": {
      "Driver Size": "40mm Dynamic Drivers",
      "Bluetooth Version": "5.3",
      "Battery Life": "50 hours (ANC off), 40 hours (ANC on)",
      "Charging Port": "USB-C",
      "Noise Cancellation": "Adaptive ANC (Auto-Adjusts to Environment)"
    },
    "modelNumber": "Q45",
    "modelName": "Space Q45",
    "whatsInTheBox": [
      "Space Q45 Headphones",
      "USB-C Charging Cable",
      "3.5mm AUX Cable",
      "Protective Travel Case",
      "User Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Anker"
  },









  {
    "name": "QuietComfort",
    "description": "Bose QuietComfort delivers top-tier active noise cancellation, premium comfort, and lifelike audio quality—perfect for long listening sessions.",
    "price": 2299,
    "oldPrice": 2699,
    "discount": 400,
    "imagesAndColors": {
      "Pink": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Bose/QuietComfort%20Headphone/1-Pink.png",
      "Navy Blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Bose/QuietComfort%20Headphone/2-Navy%20Blue.png",
      "White Smoked": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Bose/QuietComfort%20Headphone/3-White%20Smoked.png"
    },
    "selectedColor": "Pink",
    "stock": 20,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* unchanged */],
    "highlights": [
      "World-Class Noise Cancellation",
      "Up to 24 Hours Battery Life",
      "Aware Mode for Transparency",
      "Adjustable EQ via Bose Music App"
    ],
    "specs": {
      "Driver Size": "35mm",
      "Bluetooth Version": "5.3",
      "Battery Life": "24 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "QC45",
    "modelName": "QuietComfort Headphones",
    "whatsInTheBox": [
      "QuietComfort Headphones",
      "USB-C Charging Cable",
      "Audio Cable with Inline Mic",
      "Carrying Case",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Bose"
  },
  {
    "name": "Live 770NC",
    "description": "JBL Live 770NC combines legendary JBL sound with adaptive noise cancellation and voice assistant support for a premium over-ear wireless experience.",
    "price": 1899,
    "oldPrice": 2199,
    "discount": 300,
    "imagesAndColors": {
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Live%20770NC/1-Black.png",
      "Biege": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Live%20770NC/2-Biege.png",
      "White": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Live%20770NC/3-White.png",
      "Awsome Blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Live%20770NC/4-Awsome%20Blue.png"
    },
    "selectedColor": "Black",
    "stock": 25,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* unchanged */],
    "highlights": [
      "True Adaptive Noise Cancelling",
      "VoiceAware Microphone Control",
      "Bluetooth 5.3 with LE Audio support",
      "Multi-Point Connection"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Bluetooth Version": "5.3",
      "Battery Life": "65 hours (ANC off), 50 hours (ANC on)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "770NC",
    "modelName": "Live 770NC",
    "whatsInTheBox": [
      "Live 770NC Headphones",
      "USB-C Charging Cable",
      "Detachable Audio Cable",
      "Carrying Pouch",
      "Warranty & Safety Sheet"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "JBL"
  },
  {
    "name": "Quantum 300",
    "description": "JBL Quantum 300 delivers immersive gaming audio with JBL QuantumSURROUND and a flip-up boom mic, designed for competitive PC and console gamers.",
    "price": 999,
    "oldPrice": 1299,
    "discount": 300,
    "imagesAndColors": {
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Quantum%20300/1-Black.png"
    },
    "selectedColor": "Black",
    "stock": 30,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* unchanged */],
    "highlights": [
      "JBL QuantumSURROUND",
      "Wired USB + 3.5mm Dual Compatibility",
      "Memory Foam Cushions",
      "Flip-Up Boom Mic with Echo Canceling"
    ],
    "specs": {
      "Driver Size": "50mm",
      "Bluetooth Version": "N/A - Wired",
      "Battery Life": "N/A - Wired",
      "Charging Port": "N/A - Wired"
    },
    "modelNumber": "JBLQUANTUM300BLK",
    "modelName": "Quantum 300",
    "whatsInTheBox": [
      "Quantum 300 Headset",
      "Removable Windshield Foam for Mic",
      "3.5mm Audio Cable",
      "PC Splitter",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "JBL"
  },






  {
    "name": "Quantum ONE",
    "description": "Engineered for pro-level gaming, the JBL Quantum ONE features spatial sound, head-tracking, and active noise cancellation to immerse you completely in competitive play.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Quantum%20ONE/1-Black.png"
    },
    "selectedColor": "Black",
    "stock": 15,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* same reviews */],
    "highlights": [
      "JBL QuantumSPHERE 360™ spatial sound",
      "Head-tracking sensor for precision audio",
      "Active Noise Cancelling tuned for gaming",
      "High-resolution certified 50mm drivers"
    ],
    "specs": {
      "Driver Size": "50mm",
      "Connection": "USB & 3.5mm",
      "Noise Cancelling": "Yes, active noise cancelling (ANC)",
      "Lighting": "RGB lighting effects"
    },
    "modelNumber": "ONE",
    "modelName": "Quantum ONE",
    "whatsInTheBox": [
      "JBL Quantum ONE Headset",
      "Detachable Boom Microphone",
      "USB-C to USB-A Cable",
      "3.5mm Audio Cable",
      "Calibration Microphone",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Anker "
  },
  {
    "name": "Tune 720BT",
    "description": "Enjoy deep bass and crisp sound with the JBL Tune 720BT. With long battery life, wireless freedom, and multipoint connectivity, it's perfect for everyday music lovers.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "Blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Tune%20720BT/1-Blue.png",
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Tune%20720BT/2-Black.png",
      "White": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/JBL/Tune%20720BT/3-White.png"
    },
    "selectedColor": "Blue",
    "stock": 15,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* same reviews */],
    "highlights": [
      "JBL Pure Bass Sound",
      "Up to 76-Hour Battery Life",
      "Multi-point Bluetooth Connection",
      "Fast Charging (5 min = 3 hrs)"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Bluetooth Version": "5.3",
      "Battery Life": "Up to 76 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "720BT",
    "modelName": "Tune 720BT",
    "whatsInTheBox": [
      "Tune 720BT Headphones",
      "USB-C Charging Cable",
      "Quick Start Guide",
      "Warranty/Warning Card"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "JBL"
  },
  {
    "name": "INZONE H9",
    "description": "The Sony INZONE H9 offers elite gaming features including noise cancellation, wireless connectivity, and a soft-fit design. Built for marathon gaming sessions with crystal-clear communication.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "White": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Sony/INZONE%20H9/1-White.png",
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Sony/INZONE%20H9/2-Black.png"
    },
    "selectedColor": "White",
    "stock": 15,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [/* same reviews */],
    "highlights": [
      "360 Spatial Sound for Gaming",
      "Dual Noise Sensor Technology",
      "Soft-fit leather earpads for comfort",
      "Wireless with USB dongle & Bluetooth"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Wireless Range": "Up to 30m",
      "Battery Life": "Up to 32 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "H9",
    "modelName": "INZONE H9",
    "whatsInTheBox": [
      "INZONE H9 Headphones",
      "USB Transceiver",
      "USB-C Charging Cable",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Sony"
  },







  {
    "name": "MDR-MV1",
    "description": "The Sony MDR-MV1 are professional open-back studio headphones designed for accurate spatial sound reproduction, ideal for mixing and mastering immersive audio formats.",
    "price": 399,
    "oldPrice": 449,
    "discount": 50,
    "imagesAndColors": {
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Sony/MDR-MV1/1-Black.png"
    },
    "selectedColor": "Black",
    "stock": 12,
    "rating": 4.6,
    "reviewsCount": 10,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Accurate sound for mixing Dolby Atmos. Lightweight and comfortable for long sessions."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.7,
        "comment": "Best open-back headphones for spatial audio I’ve used so far."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.6,
        "comment": "Very neutral response, great for reference work."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.8,
        "comment": "Perfect for mixing multichannel projects. Very detailed soundstage."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.5,
        "comment": "Lacks a bit of low-end thump, but perfect for mastering."
      },
      {
        "user": "6813f90132625f869e1ad14a",
        "rating": 4.6,
        "comment": "Ideal for critical listening. Super breathable design."
      },
      {
        "user": "6813f91032625f869e1ad14b",
        "rating": 4.7,
        "comment": "You can hear every detail in the mix. Solid build quality too."
      },
      {
        "user": "6813f92032625f869e1ad14c",
        "rating": 4.4,
        "comment": "Top choice for audio engineers working in immersive formats."
      },
      {
        "user": "6813f91032625f869e1ad14d",
        "rating": 4.6,
        "comment": "Breathable design and accurate imaging. My go-to for Atmos work."
      },
      {
        "user": "6813f8dc32625f869e1ad13f",
        "rating": 4.5,
        "comment": "Professional-grade sound. Not for casual listening, but unmatched in the studio."
      }
    ],
    "highlights": [
      "Open-Back Design for Natural Sound",
      "Optimized for Spatial Audio Mixing",
      "Lightweight for Long Session Comfort",
      "Detachable Cable with L-shaped Stereo Mini Plug"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Impedance": "24 ohms",
      "Frequency Response": "5Hz–80kHz",
      "Weight": "223g"
    },
    "modelNumber": "MV1",
    "modelName": "MDR-MV1",
    "whatsInTheBox": [
      "MDR-MV1 Headphones",
      "Detachable 2.5m Stereo Cable",
      "6.3mm Stereo Adapter",
      "Carrying Pouch",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Sony"
  },
  {
    "name": "WH-1000XM4",
    "description": "The Sony WH-1000XM4 are industry-leading noise-canceling headphones with exceptional sound quality, smart listening features, and long battery life for all-day use.",
    "price": 348,
    "oldPrice": 399,
    "discount": 51,
    "imagesAndColors": {
      "Midnight Blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Sony/WH-1000XM4/1-Midnight%20Blue.png",
      "Black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Sony/WH-1000XM4/2-Black.png",
      "Silver": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/OverEar/Sony/WH-1000XM4/3-Silver.png"
    },
    "selectedColor": "Midnight Blue",
    "stock": 20,
    "rating": 4.8,
    "reviewsCount": 10,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Noise cancellation is unmatched. Perfect for traveling."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.9,
        "comment": "Excellent sound and very intuitive smart features."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.8,
        "comment": "The Speak-to-Chat feature is very useful. Comfortable fit too."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.7,
        "comment": "Great for work and travel. Love the multi-device connection."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.8,
        "comment": "Battery lasts forever, and the touch controls are smooth."
      },
      {
        "user": "6813f90132625f869e1ad14a",
        "rating": 4.7,
        "comment": "Premium build, premium sound. One of the best ANC headphones."
      },
      {
        "user": "6813f91032625f869e1ad14b",
        "rating": 4.9,
        "comment": "Exceptional audio and the noise cancelling is truly elite."
      },
      {
        "user": "6813f92032625f869e1ad14c",
        "rating": 4.6,
        "comment": "Best in class for ANC and call clarity. Worth every penny."
      },
      {
        "user": "6813f91032625f869e1ad14d",
        "rating": 4.7,
        "comment": "The app makes it easy to tweak settings. ANC adapts really well."
      },
      {
        "user": "6813f8dc32625f869e1ad13f",
        "rating": 4.8,
        "comment": "Sound is rich and immersive. Case is a nice touch too."
      }
    ],
    "highlights": [
      "Industry-Leading Noise Cancelation",
      "30-Hour Battery Life with Quick Charge",
      "Touch Sensor Controls",
      "Speak-to-Chat & Adaptive Sound Control"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "30 hours (ANC On)",
      "Charging Port": "USB-C"
    },
    "modelNumber": "1000XM4",
    "modelName": "WH-1000XM4",
    "whatsInTheBox": [
      "WH-1000XM4 Headphones",
      "USB-C Charging Cable",
      "3.5mm Audio Cable",
      "Airplane Adapter",
      "Carrying Case",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Over-Ear",
    "brand": "Sony"
  },



// SPEAKER - OMAR



  {
    "name": "Boom 2 Plus",
    "description": "Anker Boom 2 Plus wireless speaker delivering rich 360° sound, deep bass, and waterproof durability for outdoor adventures.",
    "price": 1800,
    "oldPrice": 2100,
    "discount": 300,
    "imagesAndColors": {
      "phentom black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Anker/Boom%202%20Plus/1-Phantom%20Black.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Anker/Boom%202%20Plus/2-Explorer%20Blue.png",
      "adventure black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Anker/Boom%202%20Plus/3-Adventure%20Black.png"
    },
    "selectedColor": "phentom black",
    "stock": 12,
    "rating": 4.8,
    "reviewsCount": 15,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Fantastic sound quality with deep bass and clear mids."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.7,
        "comment": "Perfect for outdoor use and parties, waterproof and rugged."
      }
    ],
    "highlights": [
      "360° Sound Coverage",
      "Waterproof IP67 Rating",
      "15-Hour Battery Life",
      "Durable and Lightweight Design"
    ],
    "specs": {
      "Driver Size": "50mm",
      "Bluetooth Version": "5.1",
      "Battery Life": "15 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "Boom 165",
    "modelName": "Boom 2 Plus",
    "whatsInTheBox": [
      "Boom 2 Plus Speaker",
      "USB-C Charging Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Anker "
  },
  {
    "name": "Boom 2",
    "description": "Anker Boom 2 portable speaker with 360° sound and deep bass, ideal for indoor and outdoor use with waterproof features.",
    "price": 1400,
    "oldPrice": 1700,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Anker/Boom%202/1-Black.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Anker/Boom%202/2-Blue.png",
      "green": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Anker/Boom%202/3-Green.png"
    },
    "selectedColor": "black",
    "stock": 20,
    "rating": 4.6,
    "reviewsCount": 12,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.9,
        "comment": "Great sound for its size and very portable."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.4,
        "comment": "Battery lasts long and it’s easy to carry around."
      }
    ],
    "highlights": [
      "Compact 360° Sound",
      "Waterproof IPX7",
      "12-Hour Battery Life",
      "Lightweight Design"
    ],
    "specs": {
      "Driver Size": "45mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "12 hours",
      "Charging Port": "Micro-USB"
    },
    "modelNumber": "Boom 2Q5",
    "modelName": "Boom 2",
    "whatsInTheBox": [
      "Boom 2 Speaker",
      "Micro-USB Charging Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Anker "
  },
  {
    "name": "Motion Boom Plus",
    "description": "Anker Motion Boom Plus wireless speaker with dynamic stereo sound and enhanced bass for an immersive music experience.",
    "price": 1600,
    "oldPrice": 1900,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Anker/Motion%20Boom%20Plus/1-Black.png"
    },
    "selectedColor": "black",
    "stock": 10,
    "rating": 4.75,
    "reviewsCount": 8,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Excellent stereo sound and deep bass, perfect for parties."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.5,
        "comment": "Good battery life and sleek design."
      }
    ],
    "highlights": [
      "Stereo Sound with Deep Bass",
      "IPX7 Waterproof",
      "16-Hour Battery Life",
      "Bluetooth 5.0 Connectivity"
    ],
    "specs": {
      "Driver Size": "52mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "16 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "Motion-Boom-Plus2586",
    "modelName": "Motion Boom Plus",
    "whatsInTheBox": [
      "Motion Boom Plus Speaker",
      "USB-C Charging Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Anker "
  },



  {
    "name": "S1 Pro+ Portable",
    "description": "Compact portable speaker with powerful sound, Bluetooth 5.0 connectivity, and 12-hour battery life for on-the-go use.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/S1%20Pro%2B%20Portable/1-Black.png"
    },
    "selectedColor": "black",
    "stock": 25,
    "rating": 4.7,
    "reviewsCount": 10,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Excellent sound clarity with deep bass in a portable form."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.8,
        "comment": "Great battery life and compact design make it perfect for travel."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.9,
        "comment": "Powerful speaker for its size, easy to carry around."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.6,
        "comment": "Connectivity is stable and the sound profile is well balanced."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.7,
        "comment": "Perfect for outdoor use and small gatherings."
      },
      {
        "user": "6813f90132625f869e1ad14a",
        "rating": 4.4,
        "comment": "Good overall, but could improve on bass depth."
      },
      {
        "user": "6813f91032625f869e1ad14b",
        "rating": 4.7,
        "comment": "Comfortable controls and sleek design."
      },
      {
        "user": "6813f92032625f869e1ad14c",
        "rating": 4.5,
        "comment": "Sound quality is excellent for a portable speaker."
      },
      {
        "user": "6813f91032625f869e1ad14d",
        "rating": 4.6,
        "comment": "Battery lasts long and charges quickly."
      },
      {
        "user": "6813f8dc32625f869e1ad13f",
        "rating": 4.8,
        "comment": "Very happy with the performance and build quality."
      }
    ],
    "highlights": [
      "Portable Compact Design",
      "Bluetooth 5.0 Connectivity",
      "12-Hour Battery Life",
      "Powerful Sound Output"
    ],
    "specs": {
      "Driver Size": "45mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "12 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "S1 Pro+ Portable",
    "modelName": "S1 Pro+ Portable",
    "whatsInTheBox": [
      "S1 Pro+ Portable Speaker",
      "USB-C Charging Cable",
      "User Manual",
      "Carrying Pouch"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Bose "
  },
  {
    "name": "SoundLink Flex",
    "description": "Durable waterproof Bluetooth speaker with rich, clear audio and 10-hour battery life for active lifestyles.",
    "price": 1200,
    "oldPrice": 1500,
    "discount": 300,
    "imagesAndColors": {
      "pink": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Flex/1-Pink.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Flex/2-Blue.png",
      "silver": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Flex/3-Silver.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Flex/4-Black.png",
      "green": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Flex/5-Green.png"
    },
    "selectedColor": "pink",
    "stock": 30,
    "rating": 4.6,
    "reviewsCount": 8,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Perfect for outdoor use with excellent water resistance."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.7,
        "comment": "Lightweight and easy to carry with clear sound."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.8,
        "comment": "Battery life meets my expectations for long trips."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.4,
        "comment": "Great sound, but could use stronger bass."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.5,
        "comment": "Sturdy design and easy Bluetooth pairing."
      },
      {
        "user": "6813f90132625f869e1ad14a",
        "rating": 4.3,
        "comment": "Good for casual listening and outdoor activities."
      },
      {
        "user": "6813f91032625f869e1ad14b",
        "rating": 4.6,
        "comment": "Reliable connectivity and decent volume levels."
      },
      {
        "user": "6813f92032625f869e1ad14c",
        "rating": 4.5,
        "comment": "Compact with great color options."
      }
    ],
    "highlights": [
      "Waterproof and Durable",
      "10-Hour Battery Life",
      "Clear and Balanced Sound",
      "Multiple Color Options"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Bluetooth Version": "5.1",
      "Battery Life": "10 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "SoundLink Flex",
    "modelName": "SoundLink Flex",
    "whatsInTheBox": [
      "SoundLink Flex Speaker",
      "USB-C Charging Cable",
      "User Guide",
      "Carrying Strap"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Bose "
  },
  {
    "name": "SoundLink Max",
    "description": "High-performance wireless speaker with deep bass, multi-room capability, and 15-hour battery life.",
    "price": 2000,
    "oldPrice": 2300,
    "discount": 300,
    "imagesAndColors": {
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Max/1-Blue.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Max/2-Black.png"
    },
    "selectedColor": "blue",
    "stock": 20,
    "rating": 4.8,
    "reviewsCount": 12,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Outstanding sound quality with rich bass and clarity."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.9,
        "comment": "Multi-room support is a great feature for home use."
      },
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.7,
        "comment": "Battery lasts all day and charges quickly."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.8,
        "comment": "Elegant design with solid build quality."
      },
      {
        "user": "6813f8dc32625f869e1ad13e",
        "rating": 4.6,
        "comment": "Great volume without distortion."
      },
      {
        "user": "6813f90132625f869e1ad14a",
        "rating": 4.5,
        "comment": "Simple to use app for controlling multiple speakers."
      },
      {
        "user": "6813f91032625f869e1ad14b",
        "rating": 4.7,
        "comment": "Perfect for large rooms and parties."
      },
      {
        "user": "6813f92032625f869e1ad14c",
        "rating": 4.8,
        "comment": "Clear highs and powerful bass balance."
      },
      {
        "user": "6813f91032625f869e1ad14d",
        "rating": 4.7,
        "comment": "Easy Bluetooth setup and reliable connection."
      },
      {
        "user": "6813f8dc32625f869e1ad13f",
        "rating": 4.9,
        "comment": "Best speaker I've owned for the price."
      },
      {
        "user": "6813f8dc32625f869e1ad140",
        "rating": 4.8,
        "comment": "Very happy with sound quality and battery life."
      },
      {
        "user": "6813f8dc32625f869e1ad141",
        "rating": 4.7,
        "comment": "Great for both indoor and outdoor use."
      }
    ],
    "highlights": [
      "Deep Bass and Clear Sound",
      "Multi-Room Capability",
      "15-Hour Battery Life",
      "Elegant Design"
    ],
    "specs": {
      "Driver Size": "50mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "15 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "SoundLink Max",
    "modelName": "SoundLink Max",
    "whatsInTheBox": [
      "SoundLink Max Speaker",
      "USB-C Charging Cable",
      "User Manual",
      "Protective Cover"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Bose "
  },



  {
    "name": "SoundLink Micro",
    "description": "Compact waterproof Bluetooth speaker with powerful sound and deep bass, perfect for outdoor adventures and travel.",
    "price": 1200,
    "oldPrice": 1500,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Micro/1-Black.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Micro/2-Light%20Blue.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Bose/SoundLink%20Micro/3-White.png"
    },
    "selectedColor": "black",
    "stock": 30,
    "rating": 4.5,
    "reviewsCount": 25,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Perfect size and excellent sound quality for outdoor use."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.7,
        "comment": "Very durable and the battery lasts long for camping trips."
      }
    ],
    "highlights": [
      "Waterproof and rugged design",
      "12-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Integrated speakerphone"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Bluetooth Version": "5.0",
      "Battery Life": "12 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "SoundLink Micro",
    "modelName": "SoundLink Micro",
    "whatsInTheBox": [
      "SoundLink Micro Speaker",
      "USB-C Charging Cable",
      "Carrying Strap",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Bose "
  },
  {
    "name": "Charge 6",
    "description": "Portable Bluetooth speaker with JBL signature sound, powerful bass, and all-day battery life for music lovers on the go.",
    "price": 2200,
    "oldPrice": 2600,
    "discount": 400,
    "imagesAndColors": {
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Charge%206/1-White.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Charge%206/2-Black.png",
      "red": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Charge%206/3-Red.png",
      "purple": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Charge%206/4-Purple.png",
      "army": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Charge%206/5-Army.png"
    },
    "selectedColor": "white",
    "stock": 20,
    "rating": 4.8,
    "reviewsCount": 40,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 5,
        "comment": "Amazing bass and clear sound, perfect for parties."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.9,
        "comment": "Battery lasts all day, very reliable."
      }
    ],
    "highlights": [
      "JBL Signature Sound",
      "20-Hour Battery Life",
      "Durable and Waterproof",
      "Powerbank Functionality"
    ],
    "specs": {
      "Driver Size": "50mm",
      "Bluetooth Version": "5.1",
      "Battery Life": "20 hours",
      "Charging Port": "USB-C"
    },
    "modelNumber": "Charge-6525",
    "modelName": "Charge 6",
    "whatsInTheBox": [
      "Charge 6 Speaker",
      "USB-C Charging Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "JBL "
  },
  {
    "name": "Clip 5",
    "description": "Lightweight waterproof Bluetooth speaker with a built-in carabiner for easy portability and 10-hour battery life.",
    "price": 900,
    "oldPrice": 1200,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Clip%205/1-Black.png",
      "red": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Clip%205/2-Red.png",
      "purple": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Clip%205/3-Purple.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Clip%205/4-Blue.png",
      "army": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Clip%205/5-Army.png",
      "sand": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Clip%205/6-Sand.png"
    },
    "selectedColor": "black",
    "stock": 50,
    "rating": 4.3,
    "reviewsCount": 18,
    "reviews": [
      {
        "user": "6813eaa28fa56876d597ebe9",
        "rating": 4.5,
        "comment": "Very portable and easy to clip on my backpack."
      },
      {
        "user": "6813f91d32625f869e1ad143",
        "rating": 4.2,
        "comment": "Great sound for the size, battery could be longer."
      }
    ],
    "highlights": [
      "Waterproof IPX7",
      "Built-in Carabiner Clip",
      "10-Hour Battery Life",
      "Bluetooth 4.2"
    ],
    "specs": {
      "Driver Size": "40mm",
      "Bluetooth Version": "4.2",
      "Battery Life": "10 hours",
      "Charging Port": "Micro-USB"
    },
    "modelNumber": "Clip5",
    "modelName": "Clip 5",
    "whatsInTheBox": [
      "Clip 5 Speaker",
      "Charging Cable",
      "User Manual"
    ],
    "isPopular": false,
    "isNewArrival": true,
    "isDiscover": false,
    "category": "Speaker",
    "brand": "JBL "
  },




  {
    "name": "Flip 7",
    "description": "Portable waterproof Bluetooth speaker with rich JBL sound, durable design, and up to 12 hours of playtime.",
    "price": 900,
    "oldPrice": 1100,
    "discount": 200,
    "imagesAndColors": {
      "army": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Flip%207/1-Army.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Flip%207/2-White.png",
      "purple": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Flip%207/3-Purple.png",
      "blue": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Flip%207/4-Blue.png",
      "red": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Flip%207/5-Red.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/Flip%207/6-Black.png"
    },
    "selectedColor": "army",
    "stock": 25,
    "rating": 4.5,
    "reviewsCount": 24,
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
      "Waterproof Design (IPX7)",
      "JBL Signature Sound",
      "Up to 12 Hours Battery Life",
      "Portable and Durable"
    ],
    "specs": {
      "Battery Life": "12 hours",
      "Bluetooth Version": "5.1",
      "Water Resistance": "IPX7",
      "Weight": "540g"
    },
    "modelNumber": "Flip 7",
    "modelName": "Flip 7",
    "whatsInTheBox": [
      "Flip 7 Speaker",
      "Charging Cable",
      "Quick Start Guide",
      "Safety Sheet"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "JBL "
  },

  {
    "name": "PartyBox Stage 320",
    "description": "High-power party speaker with vibrant light show, powerful bass, and microphone inputs for live performances.",
    "price": 3200,
    "oldPrice": 3700,
    "discount": 500,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/PartyBox%20Stage%20320/1-Black.png",
      "white": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/PartyBox%20Stage%20320/2-White.png"
    },
    "selectedColor": "black",
    "stock": 10,
    "rating": 4.9,
    "reviewsCount": 30,
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
      "1200W Peak Power",
      "Dynamic Light Show",
      "Bluetooth and AUX Connectivity",
      "Mic and Guitar Inputs"
    ],
    "specs": {
      "Power Output": "1200W",
      "Frequency Response": "45Hz - 20kHz",
      "Battery Life": "Up to 3 hours (with light show)",
      "Weight": "20.6 kg"
    },
    "modelNumber": "PartyBox Stage 320",
    "modelName": "PartyBox Stage 320",
    "whatsInTheBox": [
      "PartyBox Stage 320 Speaker",
      "Power Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": false,
    "category": "Speaker",
    "brand": "JBL "
  },

  {
    "name": "SoundLink Revolve",
    "description": "Compact portable Bluetooth speaker with 360-degree sound and water-resistant design for outdoor use.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "gray": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/SoundLink%20Revolve/1-Gray.png",
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/JBL/SoundLink%20Revolve/2-Black.png"
    },
    "selectedColor": "gray",
    "stock": 18,
    "rating": 4.6,
    "reviewsCount": 22,
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
      "360° Sound Coverage",
      "Water-Resistant (IPX4)",
      "Up to 12 Hours of Battery",
      "Compact and Portable Design"
    ],
    "specs": {
      "Battery Life": "12 hours",
      "Bluetooth Version": "4.2",
      "Water Resistance": "IPX4",
      "Weight": "0.9 kg"
    },
    "modelNumber": "SoundLink Revolve",
    "modelName": "SoundLink Revolve",
    "whatsInTheBox": [
      "SoundLink Revolve Speaker",
      "Charging Cable",
      "Quick Start Guide"
    ],
    "isPopular": true,
    "isNewArrival": false,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "JBL "
  },




  {
    "name": "ULT FIELD 7",
    "description": "The ULT FIELD 7 is a premium wireless speaker with rich bass, crystal-clear sound, and robust build quality for outdoor and indoor use.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Sony/ULT%20FIELD%207/1-Black.png"
    },
    "selectedColor": "black",
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
      "Powerful Bass Output",
      "Water Resistant Design (IPX5)",
      "12-Hour Battery Life",
      "Built-in Microphone for Calls"
    ],
    "specs": {
      "Speaker Type": "Portable Bluetooth Speaker",
      "Battery Life": "12 hours",
      "Connectivity": "Bluetooth 5.0, AUX",
      "Water Resistance": "IPX5"
    },
    "modelNumber": "FIELD7-BLK",
    "modelName": "ULT FIELD 7 Speaker",
    "whatsInTheBox": [
      "ULT FIELD 7 Speaker",
      "Charging Cable",
      "Aux Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Sony "
  },
  {
    "name": "ULT TOWER 10 Party",
    "description": "The ULT TOWER 10 Party is a tall, powerful party speaker system delivering booming bass, dynamic lighting effects, and wireless DJ connectivity.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Sony/ULT%20TOWER%2010%20Party/1-Black.png"
    },
    "selectedColor": "black",
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
      "Powerful 500W RMS Output",
      "Built-in DJ Effects",
      "Multicolor Party Lights",
      "Wireless Bluetooth & USB Playback"
    ],
    "specs": {
      "Power Output": "500W RMS",
      "Speaker Configuration": "2-Way Tower",
      "Connectivity": "Bluetooth 5.0, USB, AUX",
      "Dimensions": "30 x 30 x 90 cm"
    },
    "modelNumber": "TOWER10P-BLK",
    "modelName": "ULT TOWER 10 Party Speaker",
    "whatsInTheBox": [
      "ULT TOWER 10 Party Speaker",
      "Power Cable",
      "Remote Control",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Sony "
  },
  {
    "name": "ULT TOWER 9AC Party",
    "description": "The ULT TOWER 9AC Party speaker offers dynamic sound performance with built-in lights and long-lasting battery for all your party needs.",
    "price": 1500,
    "oldPrice": 1800,
    "discount": 300,
    "imagesAndColors": {
      "black": "https://github.com/Omar25876/E-commerce-Image-Storage-ITI/blob/db56e94a9e7617d3606259d299d5ecc4c01769a9/products/Speaker/Sony/ULT%20TOWER%209AC%20Party/1-Black.png"
    },
    "selectedColor": "black",
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
      "Rich Bass and Clear Highs",
      "Dynamic LED Party Lights",
      "Bluetooth Wireless Connectivity",
      "10-Hour Rechargeable Battery"
    ],
    "specs": {
      "Power Output": "300W RMS",
      "Battery Life": "10 hours",
      "Connectivity": "Bluetooth 5.0, AUX",
      "Dimensions": "25 x 25 x 85 cm"
    },
    "modelNumber": "TOWER9AC-BLK",
    "modelName": "ULT TOWER 9AC Party Speaker",
    "whatsInTheBox": [
      "ULT TOWER 9AC Party Speaker",
      "Charging Cable",
      "User Manual"
    ],
    "isPopular": true,
    "isNewArrival": true,
    "isDiscover": true,
    "category": "Speaker",
    "brand": "Sony "
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
