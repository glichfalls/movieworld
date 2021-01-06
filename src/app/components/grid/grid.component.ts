import {Component, Input} from '@angular/core';
import {Media} from "../../models/media.model";
import {TMDBService} from "../../services/tmdb.service";
import {MovieModalService} from "../../services/movie-modal.service";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent {

    @Input() movie: Media;

    public image: string;

    constructor(private tmdb: TMDBService, private modal: MovieModalService) {
        tmdb.getConfiguration().subscribe(config => {
            this.image = `${config.images.secure_base_url}${config.images.poster_sizes[4]}${this.movie.poster_path}`;
        });
    }

    public click() {
        this.modal.showMovie(this.movie);
    }

}
