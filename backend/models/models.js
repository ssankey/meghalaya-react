import { Schema, model } from 'mongoose';

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Review = model('Review', reviewSchema);

export default Review;
