import React, { useEffect, useState } from "react";
import axios from "axios";

const CastCrewSection = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const API_KEY = "12782b215299fb9539f3fd6477d1c2ad";

  useEffect(() => {
    const fetchCastAndCrew = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCast(response.data.cast);
        setCrew(response.data.crew);
      } catch (error) {
        console.error("Error fetching cast and crew:", error);
      }
    };

    fetchCastAndCrew();
  }, [movieId]);

  return (
    <div className="py-8 px-4">
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-black font-semibold">
            About the movie
          </div>
          <p className="mt-2 text-gray-500">
            The film's backdrop is centered around the far and forgotten coastal
            lands of India. The people or rather the villains in the film
            neither fear death nor god and there is no sense of humanity among
            them. Devara changes this scenario in his inimitable style.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4 p-6">
        <h2 className="text-xl font-semibold mb-4">Cast</h2>
        <div className="flex items-center justify-center md:grid-cols-4 gap-6">
          {cast.slice(0, 6).map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg">
              <img
                className="w-12 h-90 rounded-full object-cover mb-4"
                src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
                alt={member.name}
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.character}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">Crew</h2>
        <div className="flex items-center justify-center  md:grid-cols-4 gap-6">
          {crew.slice(0, 6).map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
              <img
                className="w-10 h-10 rounded-full object-cover mb-4"
                src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
                alt={member.name}
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.job}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastCrewSection;
