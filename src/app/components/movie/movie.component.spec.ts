import {MovieComponent} from './movie.component';
import {TestBed} from "@angular/core/testing";

describe('MovieComponent', () => {

    let service: MovieComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({

        });
        service = TestBed.inject(MovieComponent);
    });

    it('should open when movie data is given', () => {

        expect(service.movie).toBeNull();

    });

});
