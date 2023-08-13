import Review from "../models/models.js";

// Controller to get all reviews
export async function getAllReviews(req, res) {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
}

// Controller to post a new review
export async function postReview(req, res) {
  const { name, phone_number, email, address, message, rating } = req.body;
  try {
    const newReview = new Review({
      name,
      phone_number,
      email,
      address,
      message,
      rating,
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).json({ message: 'Error posting review', error: error.message });
  }
}
