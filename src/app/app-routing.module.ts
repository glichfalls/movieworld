import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {FrontPageComponent} from "./components/front-page/front-page.component";
import {HottestMoviesComponent} from "./components/hottest-movies/hottest-movies.component";
import {FavoriteMoviesComponent} from "./components/favorite-movies/favorite-movies.component";

const routes: Routes = [
    {path: "", component: FrontPageComponent},
    {path: "hottest", component: HottestMoviesComponent},
    {path: "favorites", component: FavoriteMoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
