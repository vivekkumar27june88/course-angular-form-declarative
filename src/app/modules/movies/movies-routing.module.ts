import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'featured-movies',
    component: FeaturedMoviesComponent,
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
