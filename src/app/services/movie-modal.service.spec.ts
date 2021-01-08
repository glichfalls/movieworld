import {MovieModalService} from "./movie-modal.service";
import {TestBed} from "@angular/core/testing";
import {Media} from "../models/media.model";

describe('MovieModalService', () => {

    let service: MovieModalService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MovieModalService);
    });

    it('should show movie modal with all details if opened', () => {

        const movie: Media = {
            id: 1,
            release_date: null,
            overview: null,
            title: '',
            original_title: '',
            original_language: '',
            popularity: 0,
            vote_average: 0,
            poster_path: '',
            adult: false,
            backdrop_path: null,
            genre: null,
            vote_count: 0
        };

        service.showMovie(movie);

        expect(spyOn(service.movie, 'next')).toHaveBeenCalled();

    });

});
