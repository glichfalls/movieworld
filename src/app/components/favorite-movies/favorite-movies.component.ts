import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {LikesService} from "../../services/likes.service";
import {Like, LikeResponse} from "../../models/like.model";
import {Media} from "../../models/media.model";

@Component({
    selector: 'app-favorite-movies',
    templateUrl: './favorite-movies.component.html',
    styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

    movies: Array<Media> = [];

    constructor(private movieService: MoviesService, private likeService: LikesService) { }

    private load(): void {
        this.likeService.getLikes().subscribe((response: LikeResponse) => {
            if(response.status === 200) {
                response.payload.map((like: Like) => {
                    this.movieService.getById(like.movie).subscribe((movie: Media) => {
                        this.movies.push(movie);
                    });
                });
            }
        });
    }

    ngOnInit(): void {
        this.load();
    }

}
