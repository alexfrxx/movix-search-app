import css from './MovieGrid.module.css';
import type { Movie } from '../../types/movie';
import Container from '../Container/Container';

interface MovieGridProps {
  onSelect: (movie: Movie) => void;
  movies: Movie[];
  title: string;
}

export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  return (
    <section className={css.movieGrid}>
      <Container>
        <ul className={css.grid}>
          {movies.map((movie) => (
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
      </Container>
    </section>
  );
}
