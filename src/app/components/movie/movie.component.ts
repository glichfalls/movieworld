import {Component, Input, OnInit} from "@angular/core";
import {Media, MovieDetails} from "../../models/media.model";
import {TMDBService} from "../../services/tmdb.service";
import {MovieModalService} from "../../services/movie-modal.service";
import {MoviesService} from "../../services/movies.service";
import {formatDate} from "../../utility/string.utility";
import {LikesService} from "../../services/likes.service";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.scss"]
})
export class MovieComponent {

    public image: string;
    public movie: Media|null;
    public details: MovieDetails|null;
    public isLiked: boolean = false;

    @Input()
    set media(movie: Media|null) {
        if(movie !== null) {
            this.movie = movie;
            this.movieService.getDetails(movie).subscribe(details => {
                this.details = details;
            });
            this.tmdb.getConfiguration().subscribe(config => {
                this.image = `${config.images.secure_base_url}${config.images.poster_sizes[4]}${movie.poster_path}`;
            });
        } else {
            this.movie = null;
            this.details = null;
        }
    }

    constructor(
        private tmdb: TMDBService,
        private modal: MovieModalService,
        private movieService: MoviesService,
        private likeService: LikesService
    ) {}

    public hide() {
        this.modal.showMovie(null);
    }

    public getMovieDate = () => formatDate(this.details.release_date);

    public like = () => {
        this.likeService.like(this.movie).subscribe((response: any) => {
            console.log(response);
            this.isLiked = !this.isLiked;
        });
    }

}
