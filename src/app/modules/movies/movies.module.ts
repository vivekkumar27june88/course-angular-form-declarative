import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturedMoviesComponent } from '../featured-movies/featured-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [MoviesComponent, FeaturedMoviesComponent],
  imports: [CommonModule, MoviesRoutingModule],
  providers: [MoviesService]
})
export class MoviesModule {}
