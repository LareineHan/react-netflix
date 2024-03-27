import { useQuery } from '@tanstack/react-query';
import genre from '../utils/genre';

const fetchMovieGenre = async () => {
	const data = await genre.get();
	return data;
};

export const useGenre = () => {
	return useQuery({
		queryKey: ['movie-genre'],
		queryFn: fetchMovieGenre,
		select: (data) => data.data.genres,
	});
};
