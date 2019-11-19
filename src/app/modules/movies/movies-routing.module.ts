import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsIIComponent } from './movie-details-ii/movie-details-ii.component';

const routes: Routes = [
  {
    path: 'featured-movies',
    component: FeaturedMoviesComponent,
    pathMatch: 'full'
  },
  {
    path: 'featured-movies/movie-details',
    component: MovieDetailsIIComponent
  },
  {
    path: 'featured-movies/:movieId',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
