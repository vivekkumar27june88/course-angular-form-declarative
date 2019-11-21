import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IPopularMovies } from "../model/popular-movies";

@Component({
  selector: "app-popular-movies",
  templateUrl: "./popular-movies.component.html",
  styleUrls: ["./popular-movies.component.scss"]
})
export class PopularMoviesComponent implements OnInit {
  public popularMovies: IPopularMovies = {} as IPopularMovies;

  constructor(private activatedRoute: ActivatedRoute) {
    this.popularMovies = this.activatedRoute.snapshot.data["popularMovies"];
  }

  ngOnInit() {}
}
