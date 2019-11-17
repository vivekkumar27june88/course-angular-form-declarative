import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'declarative-form';
  formType = 'showDynamicForm';
  showDeclarativeForm = false;
  showReactiveForm = false;
  showDynamicForm = true;

  public checkboxClickHandler(event: Event, formType: string) {
    switch (formType) {
      case 'showDeclarativeForm':
        this.showDeclarativeForm = event.target['checked'];
        this.showReactiveForm = false;
        this.showDynamicForm = false;
        break;

      case 'showReactiveForm':
        this.showReactiveForm = false;
        this.showReactiveForm = event.target['checked'];
        this.showDynamicForm = false;
        break;

      case 'showDynamicForm':
        this.showDynamicForm = false;
        this.showReactiveForm = false;
        this.showDynamicForm = event.target['checked'];
        break;
    }
  }
}
