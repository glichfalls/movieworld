import {Component, Input, OnInit} from "@angular/core";
import {Media} from "../../models/media.model";
import {TMDBService} from "../../services/tmdb.service";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.scss"]
})
export class MovieComponent implements OnInit {

    public image: string;
    @Input() movie: Media;

    constructor(private tmdb: TMDBService) {
        tmdb.getConfiguration().subscribe(config => {
            this.image = `${config.images.secure_base_url}${config.images.poster_sizes[4]}${this.movie.poster_path}`;
        });
    }

    ngOnInit(): void {
    }

}
