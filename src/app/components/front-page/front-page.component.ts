import {Component} from "@angular/core";
import {Media, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: "app-front-page",
    templateUrl: "./front-page.component.html",
    styleUrls: ["./front-page.component.scss"]
})
export class FrontPageComponent {
    public movies: Array<Media> = [];
    constructor(private moviesService: MoviesService) {
        this.moviesService.getPopularMovies("de-CH", 1, "CH").subscribe((data: MovieResponse) => {
            console.log(data);
            this.movies = data.results;
        });
    }
}
