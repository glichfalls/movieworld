import {Component, Input} from "@angular/core";
import {Media} from "../../models/media.model";
import {TMDBService} from "../../services/tmdb.service";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.scss"]
})
export class MovieComponent {

    @Input() movie: Media;

    private imagePath: string = "";

    constructor(private tmdb: TMDBService) {
        tmdb.getConfiguration().subscribe(config => {
            this.imagePath = TMDBService.getImage(config.images, this.movie);
        })
    }

}
