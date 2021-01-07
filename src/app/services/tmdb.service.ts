import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConfigurationResponse} from "../models/media.model";
import {MoviesService} from "./movies.service";
import {Observable} from "rxjs";

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

}
