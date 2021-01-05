import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Media, MovieResponse} from "../../models/media.model";
import {MoviesService} from "../../services/movies.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    public sbar = new FormControl();
    public predictions: Array<Media>;

    constructor(private moviesService: MoviesService) { }

    ngOnInit(): void {
        this.sbar.valueChanges.subscribe(keyword => this.refreshPredictions(keyword));
    }

    refreshPredictions(keyword: string) {
        this.moviesService.find(keyword, 1).subscribe((data: MovieResponse) => {
            this.predictions = data.results;
        });
    }


}
