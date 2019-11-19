import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.scss']
})
export class FeaturedMoviesComponent implements OnInit {
  public featuredMovies$: Observable<any>;

  constructor(private moviesService: MoviesService) {
    this.featuredMovies$ = this.moviesService.getAllFeaturedMovies();
  }

  ngOnInit() {}
}
