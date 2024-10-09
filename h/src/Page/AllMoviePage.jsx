import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card, Badge, Sidebar, Accordion, Button } from "flowbite-react";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [templanguage, setTemplanguage] = useState("");
  const [fdata, setfdata] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/movie`);
        const moviedata = response.data.data;
        setMovies(response.data.data);

        const filtermoview =
          moviedata &&
          moviedata.filter((movie) =>
            movie.language.some(
              (lang) => lang.toLowerCase() === templanguage.toLowerCase()
            )
          );

        setfdata(filtermoview);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [selectedLanguages, templanguage, movies]);

  const toggleLanguage = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  const languages = [
    "English",
    "Hindi",
    "Kannada",
    "Malayalam",
    "Telugu",
    "Tamil",
    "English 7D",
    "Multi Language",
    "Assamese",
    "Hinglish",
    "Japanese",
    "Marathi",
  ];
  const Genres = [
    "Drama",
    "Thriller",
    " Comedy",
    " Action",
    " Romantic",
    "Adventure",
    " Fmaily",
    " Animation",
    " Fantasy",
    "Crime",
    " Horror",
    " Musical",
    " Mystery",
    "Period",
    " Sci - Fi",
  ];
  const Formats = ["2D", "3D", "4DX", "ICE", "7D", "IMAX 2D", "2D SCREENX"];

  return (
    <div className="max-w-7xl mx-auto m-10 flex ">
      <Sidebar className="w-64 h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <h3 className="text-lg font-semibold mb-2">Filters</h3>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>Languages</Accordion.Title>
                <Accordion.Content>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang}
                        color={
                          selectedLanguages.includes(lang) ? "info" : "gray"
                        }
                        onClick={() => setTemplanguage(lang)}
                        className="cursor-pointer text-red-600 ">
                        {lang}
                      </Button>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <div className="border"></div>
              <Accordion.Panel>
                <Accordion.Title>Genres</Accordion.Title>
                <Accordion.Content>
                  <div className="flex flex-wrap gap-2">
                    {Genres.map((Gen) => (
                      <Button
                        key={Gen}
                        color={selectedGenres.includes(Gen) ? "info" : "gray"}
                        onClick={() => toggleGenre(Gen)}
                        className="cursor-pointer text-red-600 ">
                        {Gen}
                      </Button>
                    ))}
                  </div>
                </Accordion.Content>
                <div className="border"></div>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Format</Accordion.Title>
                <Accordion.Content>
                  <div className="flex flex-wrap gap-2">
                    {Formats.map((form) => (
                      <Button
                        key={form}
                        color={selectedFormats.includes(form) ? "info" : "gray"}
                        onClick={() => toggleGenre(form)}
                        className="cursor-pointer text-red-600 ">
                        {form}
                      </Button>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Button className="mt-4 w-full text-red-600">
              Browse by Cinemas
            </Button>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Movies In Bengaluru</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {languages.map((lang) => (
            <Badge
              key={lang}
              color={selectedLanguages.includes(lang) ? "info" : "red"}
              // onClick={() => toggleLanguage(lang)}
              onClick={() => setTemplanguage(lang)}
              className="cursor-pointer">
              {lang}
            </Badge>
          ))}
        </div>

        <div className="p-10 px-20 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-end  ">
            {fdata.length > 0
              ? fdata.map((movie) => <MovieCard key={movie.id} movie={movie} />)
              : movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllMoviesPage;

{
  /* <div className="p-10 px-20 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-end  ">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          </div> */
}
