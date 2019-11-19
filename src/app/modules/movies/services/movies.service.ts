import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MoviesService {
  constructor(private httpClient: HttpClient) {}

  getAllFeaturedMovies() {
    return this.httpClient.get(`${environment.apiBaseUrl}/movies/trending`);
  }
}
