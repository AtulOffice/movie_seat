import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaStar, FaShareAlt } from "react-icons/fa";
import ReviewSection from "./ReviewSection";
import Crew from "./Crew";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/movie/${id}`
        );
        setMovie(response.data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  const movieId = 550;

  return (
    <div>
      <div className="p-4 md:p-8 lg:p-16 text-white bg-black">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="flex-none">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full lg:w-70 rounded-lg shadow-lg h-[60vh]"
            />
          </div>

          {/* Right Section: Movie Details */}
          <div className="flex-1 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <FaShareAlt className="text-2xl cursor-pointer" />
            </div>

            {/* Rating and Details */}
            <div className="flex items-center space-x-2">
              <FaStar className="text-red-500" />
              <p className="text-lg font-semibold">8.2/10 (196.4K Votes)</p>
            </div>

            <div className="space-y-1">
              <div className="flex space-x-4 text-sm">
                <span>2D, 4DX, ICE, IMAX 2D</span>
                <span>|</span>
                <span>Telugu, Malayalam, Kannada, Hindi, Tamil</span>
              </div>

              <div className="text-sm">
                <span>
                  2h 57m • Action, Drama, Thriller • UA • 27 Sep, 2024
                </span>
              </div>
            </div>

            {/* About the movie */}
            <div>
              <h2 className="text-2xl font-semibold">About the movie</h2>
              <p className="text-sm mt-2">
                The film presents a chilling narrative that blends psychological
                drama with a profound examination of love and madness.
              </p>
            </div>
            <div className="flex gap-6">
              <button
                className="mt-4 bg-red-600 text-white px-6 py-2  rounded-lg hover:bg-red-700 transition-all"
                onClick={() => navigate(`/movietiming-page/${id}`)}
              >
                BOOK TICKETS
              </button>
            </div>
          </div>
        </div>
      </div>
      <Crew movieId={movieId} />
      <div className="border-t border-gray-200"></div>
      <ReviewSection />
    </div>
  );
};

export default MovieDetails;
