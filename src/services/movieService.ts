import axios from 'axios';
import type { Movie } from '../types/movie';

const key = import.meta.env.VITE_TMDB_TOKEN;
const url = 'https://api.themoviedb.org/3/search/movie';
const baseUrl = 'https://api.themoviedb.org/3/discover/movie';
const movieUrl = 'https://api.themoviedb.org/3/movie';

interface FetchMovieParams {
  page: number;
  str: string;
}
export interface FetchMoviesProps {
  page: number;
  results: Movie[];
  total_pages: number;
}

export default async function fetchMovies({
  str,
  page
}: FetchMovieParams): Promise<FetchMoviesProps> {
  const response = await axios.get<FetchMoviesProps>(url, {
    params: {
      page,
      query: str
    },
    headers: {
      Authorization: `Bearer ${key}`
    }
  });

  return response.data;
}

export async function fetchTrendingMovies(): Promise<FetchMoviesProps> {
  const response = await axios.get<FetchMoviesProps>(baseUrl, {
    params: {
      page: 1,
      sort_by: 'popularity.desc'
    },
    headers: {
      Authorization: `Bearer ${key}`
    }
  });

  return response.data;
}

export async function fetchCommingSoonMovies(): Promise<FetchMoviesProps> {
  const response = await axios.get<FetchMoviesProps>(`${movieUrl}/upcoming`, {
    params: {
      page: 1
    },
    headers: {
      Authorization: `Bearer ${key}`
    }
  });

  return response.data;
}

export async function fetchTopRatedMovies(): Promise<FetchMoviesProps> {
  const response = await axios.get<FetchMoviesProps>(`${movieUrl}/top_rated`, {
    params: {
      page: 1
    },
    headers: {
      Authorization: `Bearer ${key}`
    }
  });

  return response.data;
}

export async function fetchPlayingMovies(): Promise<FetchMoviesProps> {
  const response = await axios.get<FetchMoviesProps>(
    `${movieUrl}/now_playing`,
    {
      params: {
        page: 1,
        region: 'PL',
        language: 'en-US'
      },
      headers: {
        Authorization: `Bearer ${key}`
      }
    }
  );

  return response.data;
}
