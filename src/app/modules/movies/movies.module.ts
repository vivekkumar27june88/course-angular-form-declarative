import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [MoviesComponent, FeaturedMoviesComponent, MovieDetailsComponent],
  imports: [CommonModule, MoviesRoutingModule],
  providers: [MoviesService]
})
export class MoviesModule {}
