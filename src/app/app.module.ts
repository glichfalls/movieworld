import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieComponent } from "./components/movie/movie.component";
import { FrontPageComponent } from "./components/front-page/front-page.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SliderComponent } from "./components/slider/slider.component";
import { HeaderComponent } from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HottestMoviesComponent } from './components/hottest-movies/hottest-movies.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { InTheaterMoviesComponent } from './components/in-theater-movies/in-theater-movies.component';
import { GridComponent } from './components/grid/grid.component';
import { GridContainerComponent } from './components/grid-container/grid-container.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        FrontPageComponent,
        SliderComponent,
        HeaderComponent,
        HottestMoviesComponent,
        FavoriteMoviesComponent,
        InTheaterMoviesComponent,
        GridComponent,
        GridContainerComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
