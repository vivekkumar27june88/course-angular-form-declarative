import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-ii',
  templateUrl: './movie-details-ii.component.html',
  styleUrls: ['./movie-details-ii.component.scss']
})
export class MovieDetailsIIComponent implements OnInit {
  public posterBaseUrl = '';
  public movieDetail: any = {};
  public loading = true;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.posterBaseUrl = params.get('imageBaseUrl');
      this.movieDetail.backdrop_path = params.get('backdrop_path');
      this.movieDetail.title = params.get('title');
      this.movieDetail.overview = params.get('overview');
      this.loading = false;
    });
  }
}
