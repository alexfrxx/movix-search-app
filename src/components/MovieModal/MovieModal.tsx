import css from './MovieModal.module.css';
import type { Movie } from '../../types/movie';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);
  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackDropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          className={css.closeButton}
          aria-label="Close modal"
          onClick={onClose}
        ></button>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={css.image}
        />
        <div className={css.content}>
          <h2>{movie.title}</h2>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <div>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
          </div>
          <p>
            <strong>Original language:</strong>{' '}
            {movie.original_language.toUpperCase()}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
          </p>
          <p>
            <strong>Votes:</strong> {movie.vote_count}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
