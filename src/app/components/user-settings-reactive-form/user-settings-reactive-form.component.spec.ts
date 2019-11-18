import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsReactiveFormComponent } from './user-settings-reactive-form.component';

describe('UserSettingsReactiveFormComponent', () => {
  let component: UserSettingsReactiveFormComponent;
  let fixture: ComponentFixture<UserSettingsReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSettingsReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSettingsReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
