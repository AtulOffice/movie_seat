import React, { useState } from "react";
import {
  Card,
  Button,
  TextInput,
  Label,
  Textarea,
  Rating,
} from "flowbite-react";
import {
  FaStar,
  FaThumbsUp,
  FaComments,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";

const ReviewCard = ({ review, onDelete }) => (
  <Card className="mb-4">
    <div className="flex justify-between items-start">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full mr-2" src="/" alt="" />
        <div>
          <p className="font-semibold">{review.user}</p>
          <p className="text-sm text-gray-500">{review.source}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Rating>
          <Rating.Star filled={true} />
          <p className="ml-1">{review.rating}/10</p>
        </Rating>
        <Button
          color="gray"
          pill
          size="xs"
          onClick={() => onDelete(review.id)}
          className="ml-2">
          <FaTimes />
        </Button>
      </div>
    </div>
    <p className="my-2">{review.content}</p>
    <div className="flex items-center text-sm text-gray-500">
      <FaThumbsUp className="mr-1" /> {review.likes}
      <FaComments className="ml-4 mr-1" /> {review.comments}
      <FaShareAlt className="ml-4 mr-1" />
      <span className="ml-auto">{review.date}</span>
    </div>
  </Card>
);

const MovieReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "User",
      source: "Booked on bookmyshow",
      rating: 10,
      content: "#AwesomeStory #Blockbuster #Inspiring",
      likes: "2.1K",
      comments: "150",
      date: "1 Days ago",
    },
    {
      id: 2,
      user: "User",
      source: "Booked on bookmyshow",
      rating: 10,
      content: "#AwesomeStory #Blockbuster #Inspiring",
      likes: "1.3K",
      comments: "100",
      date: "5 Days ago",
    },
  ]);
  const [newReview, setNewReview] = useState({ content: "", rating: 5 });

  const addReview = () => {
    if (newReview.content) {
      setReviews([
        ...reviews,
        {
          id: reviews.length + 1,
          user: "You",
          source: "Web review",
          ...newReview,
          likes: "0",
          comments: "0",
          date: "Just now",
        },
      ]);
      setNewReview({ content: "", rating: 5 });
    }
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Top reviews</h2>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {["#SuperDirection", "#GreatActing", "#AwesomeStory", "#WellMade"].map(
          (tag, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-3 py-1 text-sm">
              {tag} {17000 - index * 500}
            </span>
          )
        )}
      </div>
      <Card className="mb-4">
        <form className="flex flex-col gap-4">
          <div>
            <Label htmlFor="review" value="Your review" />
            <Textarea
              id="review"
              placeholder="Write your review..."
              required
              rows={4}
              value={newReview.content}
              onChange={(e) =>
                setNewReview({ ...newReview, content: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Label htmlFor="rating" value="Rating:" className="mr-2" />
              <TextInput
                id="rating"
                type="number"
                min={1}
                max={10}
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({
                    ...newReview,
                    rating: parseInt(e.target.value),
                  })
                }
                className="w-16"
              />
            </div>
            <Button onClick={addReview} className="bg-red-500">
              Add Review
            </Button>
          </div>
        </form>
      </Card>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} onDelete={deleteReview} />
      ))}
    </div>
  );
};

export default MovieReviews;
