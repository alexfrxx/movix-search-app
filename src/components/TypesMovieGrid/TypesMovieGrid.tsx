import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import type { Movie } from '../../types/movie';
import type { FetchMoviesProps } from '../../services/movieService';
import css from './TypesMovieGrid.module.css';
import Container from '../Container/Container';
import 'swiper/css';
import 'swiper/css/scrollbar';

interface TypesMovieProps {
  onSelect: (movie: Movie) => void;
  fetchFn: () => Promise<FetchMoviesProps>;
  title: string;
}

export default function TypesMovieGrid({
  onSelect,
  fetchFn,
  title
}: TypesMovieProps) {
  const { data } = useQuery({
    queryKey: ['movie', title],
    queryFn: () => fetchFn()
  });

  return (
    <section className={css.trendingMovie}>
      <Container>
        <div className={css.container}>
          <h2 className={css.title}>{title}</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={6.4}
            modules={[Scrollbar, Mousewheel]}
            scrollbar={{ draggable: true }}
            mousewheel={{
              forceToAxis: true
            }}
            freeMode={{
              enabled: true,
              momentum: true
            }}
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
