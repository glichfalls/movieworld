import {Component} from "@angular/core";
import {Configuration, ConfigurationResponse} from "./models/media.model";
import {TMDBService} from "./services/tmdb.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    public TMDBConfiguration: Configuration;
    constructor(private tmdbService: TMDBService) {
        this.tmdbService.getConfiguration().subscribe((data: ConfigurationResponse) => {
            this.TMDBConfiguration = data.images;
        });
    }
}
