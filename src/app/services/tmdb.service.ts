import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Configuration, ConfigurationResponse, Media} from "../models/media.model";
import {MoviesService} from "./movies.service";
import {Observable} from "rxjs";

const CONFIGURATION_STORAGE_KEY = 'media_configuration';

@Injectable({
    providedIn: "root"
})
export class TMDBService {

    private configuration: Configuration;

    constructor(private http: HttpClient) {
        if(localStorage.getItem(CONFIGURATION_STORAGE_KEY) === null) {
            this.http.get<ConfigurationResponse>(MoviesService.getUrl(`configuration`)).subscribe((data: ConfigurationResponse) => {
                this.configuration = data.images;
                localStorage.setItem(CONFIGURATION_STORAGE_KEY, JSON.stringify(data.images));
            });
        } else {
            this.configuration = JSON.parse(localStorage.getItem(CONFIGURATION_STORAGE_KEY));
        }
    }

    public static getImage(config: Configuration, media: Media): string {
        return `${config.secure_base_url}${config.poster_sizes[4]}${media.poster_path}`;
    }

}
