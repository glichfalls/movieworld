import { Component, OnInit } from '@angular/core';
import {Media, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-in-theater-movies',
  templateUrl: './in-theater-movies.component.html',
  styleUrls: ['./in-theater-movies.component.scss']
})
export class InTheaterMoviesComponent implements OnInit {

    public movies: Array<Media> = [];
    constructor(private moviesService: MoviesService) {
        this.moviesService.getMoviesCurrentlyInTheater("de-CH", 1, "CH").subscribe((data: MovieResponse) => {
            console.log(data);
            this.movies = data.results;
        });
    }
  ngOnInit(): void {
  }

}
