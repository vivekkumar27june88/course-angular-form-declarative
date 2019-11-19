import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-iii-query',
  templateUrl: './movie-details-iii-query.component.html',
  styleUrls: ['./movie-details-iii-query.component.scss']
})
export class MovieDetailsIIIQueryComponent implements OnInit {
  public posterBaseUrl = '';
  public movieDetail: any = {};
  public loading = true;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.posterBaseUrl = params.get('imageBaseUrl');
      this.movieDetail.backdrop_path = params.get('backdrop_path');
      this.movieDetail.title = params.get('title');
      this.movieDetail.overview = params.get('overview');
      this.loading = false;
    });
  }
}
