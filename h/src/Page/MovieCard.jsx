import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className=" overflow-hidden shadow-lg my-2 mx-3 bg-white rounded-xl mb-2 ">
      <div
        className="cursor-pointer"
        onClick={() => handleCardClick(movie?._id)}>
        <img
          className="rounded-t-lg h-[40vh] "
          src={movie.image}
          alt={movie.title}
        />
      </div>
    </div>
  );
};

export default MovieCard;
