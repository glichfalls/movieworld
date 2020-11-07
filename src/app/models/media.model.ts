
export interface RequestQueryItem {
  key: string;
  value: string | number;
}

export interface MovieResponse {
    total_results: number;
    total_pages: number;
    results: Array<Media>;
}

export interface Media {
  id: number;
  title: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
  original_language: string;
  original_title: string;
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  popularity: number;
  genre: Array<number>;
}

export interface ConfigurationResponse {
    images: Configuration;
}

export interface Configuration {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: Array<string>;
    logo_sizes: Array<string>;
    poster_sizes: Array<string>;
    profile_sizes: Array<string>;
    still_sizes: Array<string>;
}

export interface Genre {
  id: number;
  name: string;
}
