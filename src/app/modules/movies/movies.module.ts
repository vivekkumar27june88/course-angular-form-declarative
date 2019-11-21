import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FeaturedMoviesComponent } from "./featured-movies/featured-movies.component";
import { MovieDetailsIIComponent } from "./movie-details-ii/movie-details-ii.component";
import { MovieDetailsIIIQueryComponent } from "./movie-details-iii-query/movie-details-iii-query.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";
import { PopularMoviesComponent } from "./popular-movies/popular-movies.component";
import { SearchMovieComponent } from "./search-movie/search-movie.component";
import { MoviesService } from "./services/movies.service";

@NgModule({
  declarations: [
    MoviesComponent,
    FeaturedMoviesComponent,
    MovieDetailsComponent,
    MovieDetailsIIComponent,
    MovieDetailsIIIQueryComponent,
    PopularMoviesComponent,
    SearchMovieComponent
  ],
  imports: [CommonModule, MoviesRoutingModule, FormsModule],
  providers: [MoviesService]
})
export class MoviesModule {}
