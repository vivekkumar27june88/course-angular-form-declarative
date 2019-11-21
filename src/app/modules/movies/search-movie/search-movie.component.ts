import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.scss"]
})
export class SearchMovieComponent implements OnInit {
  public searchedMovie: any = {};
  public searchError: any = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
      if (data.searchedMovie.hasOwnProperty("error")) {
        this.searchedMovie = {};
        this.searchError = data.searchedMovie.error;
      } else {
        this.searchError = {};
        this.searchedMovie = data.searchedMovie;
      }
    });
  }

  ngOnInit() {}

  submitMovieSearchForm(form: NgForm) {
    this.router.navigate(["/search-movie", form.value["search-input"]]);
  }
}
