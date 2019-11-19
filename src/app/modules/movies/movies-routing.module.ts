import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { MovieDetailsIIComponent } from './movie-details-ii/movie-details-ii.component';
import { MovieDetailsIIIQueryComponent } from './movie-details-iii-query/movie-details-iii-query.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'featured-movies',
    component: FeaturedMoviesComponent,
    pathMatch: 'full'
  },
  {
    path: 'featured-movies/movie-details',
    component: MovieDetailsIIComponent,
    pathMatch: 'full'
  },
  {
    path: 'featured-movies/movie-details-in-query',
    component: MovieDetailsIIIQueryComponent,
    pathMatch: 'full'
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
