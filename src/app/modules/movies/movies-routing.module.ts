import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedMoviesComponent } from '../featured-movies/featured-movies.component';

const routes: Routes = [
  {
    path: 'featured-movies',
    component: FeaturedMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
