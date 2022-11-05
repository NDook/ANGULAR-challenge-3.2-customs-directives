import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-customs-directives';

  movieList: string[] = ["star Wars", "Harry Potter", "Superman"];

  showMovies: boolean = false;

}
