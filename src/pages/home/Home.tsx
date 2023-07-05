import { useEffect, useState } from "react";
import moviesIMDB from "./services/moviesIMDB";
import { Movie } from "@/models";
import Film from "./components/Film";

export default function Home() {
  useEffect(() => {
    getMovies();
  }, []);

  const [movies, setMovies] = useState([] as Movie[]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searcher, setsearcher] = useState("");

  const getMovies = async () => {
    await moviesIMDB.then((res) => {
      setMovies(res);
    });
  };

  const filteredMovies = (): Movie[] => {
    if (searcher.length === 0) return movies.slice(currentPage, currentPage + 8);

    const searchMovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searcher.toLowerCase())
    );
    return searchMovie.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    if (movies.filter((movie) => movie.title.toLowerCase().includes(searcher.toLowerCase())).length > currentPage + 8)
      setCurrentPage(currentPage + 8);
  };

  const prevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 8);
  };

  const handleSearcherChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setsearcher(target.value);
  };

  return (
    <>
      {movies.length === 0 && <h2>Loading</h2>}
    
      <label htmlFor="moviesSearcher" className="text-black text-2xl font-bold">
        Search a Movie
      </label>
      <input
        id="moviesSearcher"
        type="text"
        className="lg:col-span-4 md:col-span-3 sm:col-span-2 mb-5 form-control bg-gray-300 rounded-lg px-5 h-8"
        placeholder="Search a Movie"
        value={searcher}
        onChange={handleSearcherChange}
      />

      <div className="lg:col-span-4 md:col-span-3 sm:col-span-2 flex justify-center">
        <button
          type="button"
          className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-black"
          onClick={prevPage}
        >
          PrevFilms
        </button>

        <button
          type="button"
          className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-black"
          onClick={nextPage}
        >
          NextFilms
        </button>
      </div>
      {filteredMovies()?.map((movie: Movie) => (
        <Film key={`Movies_List_${movie.imdbid}`} movie={movie} />
      ))}

    </>
  );
}
