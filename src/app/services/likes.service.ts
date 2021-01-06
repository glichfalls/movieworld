import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Media} from "../models/media.model";
import {Observable} from "rxjs";
import {LikeResponse} from "../models/like.model";

@Injectable({
    providedIn: "root"
})
export class LikesService {

    private readonly url: string = 'http://localhost:5000';

    constructor(private http: HttpClient) {
    }

    private buildUrl(path: string): string {
        return `${this.url}/${path}`;
    }

    public like(movie: Media): Observable<any> {
        return this.http.post(this.buildUrl(`like/${movie.id}`), null);
    }

    public isLiked(movie: Media) {
        return false;
    }

    public getLikes(): Observable<LikeResponse> {
        return this.http.get<LikeResponse>(this.buildUrl('likes'));
    }

}
