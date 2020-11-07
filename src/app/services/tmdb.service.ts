import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConfigurationResponse, Media} from "../models/media.model";
import {MoviesService} from "./movies.service";
import {Observable, Subscription} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TMDBService {

    private readonly configuration: Observable<ConfigurationResponse>;

    constructor(private http: HttpClient) {
        this.configuration = this.http.get<ConfigurationResponse>(MoviesService.getUrl(`configuration`));
    }

    public getConfiguration(): Observable<ConfigurationResponse> {
        return this.configuration;
    }

    public getImage(media: Media): Subscription {
        return this.getConfiguration().subscribe(config => {
             return `${config.images.secure_base_url}${config.images.poster_sizes[0]}${media.poster_path}`;
        });
    }

}
