import ReactPaginateModule from 'react-paginate';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import css from './Movies.module.css';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import MovieModal from '../../components/MovieModal/MovieModal';
import type { Movie } from '../../types/movie';
import fetchMovies from '../../services/movieService';
import type { ReactPaginateProps } from 'react-paginate';
import type { ComponentType } from 'react';
import { useSearchParams } from 'react-router';

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

export default function Movies() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const { data, isLoading, isError } = useQuery({
    queryKey: ['query', query, page],
    queryFn: () => fetchMovies({ str: query, page }),
    enabled: Boolean(query),
    placeholderData: keepPreviousData
  });

  useEffect(() => {
    if (query && data && data?.results.length === 0) {
      toast.error('No movies found for your request.');
    }
  }, [data, query]);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <section>
      <Toaster position="top-center" reverseOrder={false} />
      {isLoading && <Loader />}
      {query && data && data.total_pages > 1 && (
        <ReactPaginate
          pageCount={data?.total_pages ?? 0}
          onPageChange={({ selected }) => setPage(selected + 1)}
          pageRangeDisplayed={5}
          nextLabel="→"
          previousLabel="←"
          activeClassName={css.active}
          containerClassName={css.pagination}
          marginPagesDisplayed={1}
          forcePage={page - 1}
        />
      )}
      {isError ? (
        <ErrorMessage />
      ) : (
        <MovieGrid
          onSelect={openModal}
          movies={data?.results ?? []}
          title={data?.results ? query : ''}
        />
      )}
      {isModalOpen && selectedMovie && (
        <MovieModal onClose={closeModal} movie={selectedMovie}></MovieModal>
      )}
    </section>
  );
}
