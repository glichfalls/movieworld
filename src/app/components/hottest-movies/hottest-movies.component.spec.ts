import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottestMoviesComponent } from './hottest-movies.component';

describe('HottestMoviesComponent', () => {
  let component: HottestMoviesComponent;
  let fixture: ComponentFixture<HottestMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HottestMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HottestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
