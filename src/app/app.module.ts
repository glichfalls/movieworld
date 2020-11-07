import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import { MovieComponent } from "./components/movie/movie.component";
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { FrontPageComponent } from './components/front-page/front-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        MovieTileComponent,
        FrontPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
