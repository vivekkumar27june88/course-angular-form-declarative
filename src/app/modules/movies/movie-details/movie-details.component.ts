import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { MoviesService } from '../services';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  public movieId = '';
  public posterBaseUrl = '';
  public movieDetail: any = {};
  public loading = true;
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('movieId');
    this.loading = true;
    this.moviesService
      .getAllFeaturedMovies()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((featuredMoviesRes: any) => {
        this.movieDetail = featuredMoviesRes.data.results.find(m => m.id == this.movieId);
        console.log('TCL: MovieDetailsComponent -> ngOnInit -> this.movieDetail', this.movieDetail);
        this.posterBaseUrl = featuredMoviesRes.imageBaseUrl;
      });
  }
}
