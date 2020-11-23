import {Component, OnInit} from "@angular/core";
import {Configuration, ConfigurationResponse} from "./models/media.model";
import {TMDBService} from "./services/tmdb.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {


    constructor(private tmdbService: TMDBService) {

    }

    ngOnInit(): void {

    }

}
