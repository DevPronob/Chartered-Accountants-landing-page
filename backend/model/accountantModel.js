const mongoose = require('mongoose');

// Define the schema for the Chartered Accountant
const charteredAccountantSchema = new mongoose.Schema({
  name: String,
  image: String,
  intro: String,
  rating: Number,
  reviewCount: Number,
  taskComplexity: String,
  price: String,
  deliveryTime: String,
  testimonial: {
    text: String,
    author: String,
  },
  about: {
    from: String,
    partnerSince: Number,
    averageResponseTime: String,
    description: String,
    services: [String],
    benefits: [String],
  },
});

// Create a Chartered Accountant model
const CharteredAccountant = mongoose.model('CharteredAccountant', charteredAccountantSchema);

module.exports = CharteredAccountant;
