import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { fetchFirstMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';
import css from './TrendingMovieGrid.module.css';
import Container from '../Container/Container';
import 'swiper/css';
import 'swiper/css/scrollbar';

interface TrendingMovieProps {
  onSelect: (movie: Movie) => void;
}

export default function TrendingMovieGrid({ onSelect }: TrendingMovieProps) {
  const { data } = useQuery({
    queryKey: ['movie'],
    queryFn: () => fetchFirstMovies()
  });

  return (
    <section className={css.trendingMovie}>
      <Container>
        <div className={css.container}>
          <h2 className={css.title}>Trending</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={6.5}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
          >
            {data?.results.map((movie) => (
              <SwiperSlide
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
                  <p
                    className={css.average}
                  >{`${movie.vote_average.toFixed(1)} / 10`}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
