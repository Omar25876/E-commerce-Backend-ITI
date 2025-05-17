const mongoose = require('mongoose');
const Category = require('./models/categoryModel');
const Brand = require('./models/brandModel');
const dotenv = require('dotenv');
dotenv.config();
const seedData = async () => {
  // Connect to MongoDB
  mongoose.connect(process.env.CONNECTION_STR);

  // Clear existing data
  await Category.deleteMany({});
  await Brand.deleteMany({});

  // Create dummy categories
  const electronicsCategory = new Category({
    name: 'Electronics',
    description: 'Devices and gadgets',
  });

  const homeAppliancesCategory = new Category({
    name: 'Home Appliances',
    description: 'Appliances for the home',
  });

  // Save categories to the database
  await electronicsCategory.save();
  await homeAppliancesCategory.save();

  // Create dummy brands
  const sonyBrand = new Brand({
    name: 'Sony',
    description: 'Electronics and entertainment',
  });

  const samsungBrand = new Brand({
    name: 'Samsung',
    description: 'Electronics and home appliances',
  });

  // Save brands to the database
  await sonyBrand.save();
  await samsungBrand.save();

  console.log('Dummy data added successfully!');
  mongoose.connection.close();
};

// Run the seeding function
seedData();
