import React from "react";
import Carousel from "../Page/Carousel";
import MoviePage from "./MoviePage";
import Banner from "../Page/Banner";
import EventPage from "../Components/EventPage";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <MoviePage />
      <Banner />
      <EventPage />
    </div>
  );
};

export default HomePage;
