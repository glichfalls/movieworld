import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Genre, Media, MovieResponse, RequestQueryItem} from "../models/media.model";
import {Observable} from "rxjs";
import {API_KEY, API_URL, API_VERSION} from "../models/tmdb.model";

@Injectable({
    providedIn: "root"
})
export class MoviesService {

    constructor(private http: HttpClient) {}

    public static getUrl(uri: string, query: Array<RequestQueryItem> = []): string {
        return `${API_URL}/${API_VERSION}/${uri}?api_key=${API_KEY}` + query.map(item => `&${item.key}=${item.value}`).join();
    }

    public find(search: string): Array<Media> {
        return [];
    }

    public getPopularMovies(language: string, page: number, region: string): Observable<MovieResponse> {
        return this.http.get<MovieResponse>(MoviesService.getUrl(`movie/popular`, [
            {key: "language", value: language},
            {key: "page", value: page},
            {key: "region", value: region},
        ]));
    }

    public getBestRatedMovies(): Array<MovieResponse> {
        return [];
    }

    public getMoviesCurrentlyInTheater(): Array<MovieResponse> {
        return [];
    }

    public getGenres(): Array<Genre> {
        return [];
    }



}
