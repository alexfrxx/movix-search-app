import css from './ComingSoon.module.css';
import { useQuery } from '@tanstack/react-query';
import type { Movie } from '../../types/movie';
import type { FetchMoviesProps } from '../../services/movieService';
import Container from '../Container/Container';

interface ComingSoonProps {
  onSelect: (movie: Movie) => void;
  fetchFn: () => Promise<FetchMoviesProps>;
  title: string;
  queryKey: string;
}

export default function ComingSoon({
  onSelect,
  fetchFn,
  title,
  queryKey
}: ComingSoonProps) {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchFn()
  });

  return (
    <section className={css.commingSoon}>
      <Container>
        <h2 className={css.title}>{title}</h2>
      </Container>
      <div className={css.container}>
        <ul className={css.grid}>
          {data?.results.map((movie) => (
            <li
              onClick={() => onSelect(movie)}
              key={movie.id}
              className={css.item}
            >
              <div className={css.card}>
                <img
                  className={css.image}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                />
                <h2 className={css.subtitle}>{movie.title}</h2>
                <p className={css.date}>{movie.release_date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
