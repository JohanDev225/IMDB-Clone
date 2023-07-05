export interface ApiMovies {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string[];
  director: string[];
  writers: string[];
  imdbid: string;
}

export interface Movie {
  imdbid: string;
  rank: number;
  title: string;
  rating: string;
  thumbnail: string;
  image: string;
  description: string;
  genre: string[];
}



