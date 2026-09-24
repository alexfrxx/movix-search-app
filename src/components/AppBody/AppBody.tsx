import { useState } from 'react';
import { useNavigate } from 'react-router';
import SearchBar from '../SearchBar/SearchBar';
import MovieModal from '../MovieModal/MovieModal';
import type { Movie } from '../../types/movie';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchCommingSoonMovies,
  fetchPlayingMovies
} from '../../services/movieService';
import TypesMovieGrid from '../TypesMovieGrid/TypesMovieGrid';
import Hero from '../Hero/Hero';
import ComingSoon from '../ComingSoon/ComingSoon';

export default function AppBody() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const navigate = useNavigate();

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Hero />
      <SearchBar
        onSubmit={(query) => {
          navigate(`/movies?query=${encodeURIComponent(query)}`);
        }}
      />
      <ComingSoon
        onSelect={openModal}
        fetchFn={fetchPlayingMovies}
        title="Now in Cinemas"
        queryKey="now-playing-movies"
      />
      <TypesMovieGrid
        onSelect={openModal}
        fetchFn={fetchTrendingMovies}
        title="Trending"
      />
      <TypesMovieGrid
        onSelect={openModal}
        title="Top-rated"
        fetchFn={fetchTopRatedMovies}
      />
      <ComingSoon
        onSelect={openModal}
        fetchFn={fetchCommingSoonMovies}
        title="Coming Soon"
        queryKey="upcoming-movies"
      />

      {isModalOpen && selectedMovie && (
        <MovieModal onClose={closeModal} movie={selectedMovie}></MovieModal>
      )}
    </>
  );
}
