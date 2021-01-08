import {TestBed} from '@angular/core/testing';
import {GridComponent} from './grid.component';
import {TMDBService} from "../../services/tmdb.service";
import {MovieModalService} from "../../services/movie-modal.service";
import {FavoriteMoviesComponent} from "../favorite-movies/favorite-movies.component";
import {Observable, of} from "rxjs";
import {ConfigurationResponse, Media} from "../../models/media.model";

describe('GridComponent', () => {

    let fixture, component, el;

    let tMDBServiceStub:  Partial<TMDBService>;
    let movieModalServiceStub: Partial<MovieModalService>;

    beforeEach(async () => {

        tMDBServiceStub = {
            getConfiguration: (): Observable<ConfigurationResponse> => of({
                images: {
                    base_url: '',
                    secure_base_url: '',
                    backdrop_sizes: [],
                    logo_sizes: [],
                    poster_sizes: [],
                    profile_sizes: [],
                    still_sizes: []
                }
            })
        };

        movieModalServiceStub = {
            showMovie: () => {
                return null;
            }
        };

        TestBed.configureTestingModule({
            declarations: [GridComponent],
            providers: [
                { provide: TMDBService, useValue: tMDBServiceStub },
                { provide: MovieModalService, useValue: movieModalServiceStub }
            ]
        });

        fixture = TestBed.createComponent(FavoriteMoviesComponent);

        fixture.debugElement.injector.get(MovieModalService);

        component = fixture.componentInstance;

        //@ts-ignore
        const movie: Media = {
            id: 1,
            title: 'test'
        };

        component.movie = movie;

        el = fixture.nativeElement.querySelector('h2');

        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show grid when movie is given', () => {

        expect(el.textContent).toBe('test');

    });

});
