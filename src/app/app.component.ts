import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'declarative-form';
  showDeclarativeForm = false;

  public checkboxClickHandler(event: Event) {
    // console.log('TCL: AppComponent -> checkboxClickHandler -> event', event);
    this.showDeclarativeForm = event.target['checked'];
  }
}
