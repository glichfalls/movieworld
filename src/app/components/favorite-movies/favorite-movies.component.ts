import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent implements OnInit {

    @Input() movies: string;

    constructor() { }

  ngOnInit(): void {
  }

}
