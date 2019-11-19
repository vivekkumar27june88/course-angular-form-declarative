import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../services';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.scss']
})
export class FeaturedMoviesComponent implements OnInit {
  public featuredMovies$: Observable<any>;

  constructor(private moviesService: MoviesService, private router: Router) {
    this.featuredMovies$ = this.moviesService.getAllFeaturedMovies();
  }

  ngOnInit() {}

  openMovieDetails(movieId: string) {
    this.router.navigate(['/featured-movies', movieId]);
    // this.router.navigateByUrl(`/featured-movies/${movieId}`);
  }

  openMovieDetailsII(movie: any, imageBaseUrl: string) {



    this.router.navigate([
      '/featured-movies',
      'movie-details',
      {
        imageBaseUrl,
        backdrop_path: movie.backdrop_path,
        title: movie.title,
        overview: movie.overview
      }
    ]);


  }
}
