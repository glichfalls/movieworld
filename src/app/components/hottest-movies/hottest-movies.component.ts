import { Component, OnInit } from '@angular/core';
import {Media, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-hottest-movies',
  templateUrl: './hottest-movies.component.html',
  styleUrls: ['./hottest-movies.component.scss']
})
export class HottestMoviesComponent implements OnInit {

    public movies: Array<Media> = [];

      constructor(private moviesService: MoviesService) {
          this.moviesService.getBestRatedMovies("de-CH", 1, "CH").subscribe((data: MovieResponse) => {
              console.log(data);
              this.movies = data.results;
          });
      }

    ngOnInit(): void {

    }
}
