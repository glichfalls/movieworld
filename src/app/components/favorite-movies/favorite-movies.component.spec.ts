import {FavoriteMoviesComponent} from './favorite-movies.component';
import {MoviesService} from "../../services/movies.service";
import {LikesService} from "../../services/likes.service";
import {LikeResponse} from "../../models/like.model";
import {Observable, of} from "rxjs";
import {Media} from "../../models/media.model";
import {TestBed} from "@angular/core/testing";

describe('FavoriteMoviesComponent', () => {

    let fixture, comp, el;

    beforeEach(async () => {

        const movieServiceMock = {
            getById: (id: number): Observable<Media> => of({
                id: id,
                vote_count: 0,
                genre: [],
                backdrop_path: '',
                adult: false,
                poster_path: '',
                vote_average: 0,
                popularity: 0,
                original_language: '',
                original_title: '',
                title: '',
                overview: '',
                release_date: '',
            })
        } as MoviesService;

        const likeServiceMock = {
            getLikes: (): Observable<LikeResponse> => of({
                status: 200,
                message: 'OK',
                payload: [
                    { _id: 'h5io34h54i', movie: 1 },
                    { _id: '5ji345hi33', movie: 2 },
                    { _id: '435h438q53', movie: 3 },
                ]
            })
        } as LikesService;

        TestBed.configureTestingModule({
            declarations: [ FavoriteMoviesComponent ],
            providers: [
                { provide: MoviesService, useValue: movieServiceMock },
                { provide: LikesService, useValue: likeServiceMock },
            ]
        });

        fixture = TestBed.createComponent(FavoriteMoviesComponent);
        comp = fixture.componentInstance;

        el = fixture.nativeElement.querySelector('.ttt');

    });

    it('should create', () => {
        expect(comp).toBeTruthy();
    });

    it('should load all likes', () => {
        fixture.detectChanges();
        expect(el?.textContent).toBe('Liked Movies1');
    });

});
