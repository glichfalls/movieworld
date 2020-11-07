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

@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        FrontPageComponent,
        SliderComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
