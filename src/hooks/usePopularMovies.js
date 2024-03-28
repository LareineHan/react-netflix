import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
	console.log('fetchPopularMovies called! ');
	return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
	console.log('usePopularMoviesQuery called! ', api, '<-api');
	return useQuery({
		queryKey: ['movie-popular'],
		queryFn: fetchPopularMovies,
		select: (result) => result.data,
	});
};
