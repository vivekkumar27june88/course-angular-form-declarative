import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsIIIQueryComponent } from './movie-details-iii-query.component';

describe('MovieDetailsIIIQueryComponent', () => {
  let component: MovieDetailsIIIQueryComponent;
  let fixture: ComponentFixture<MovieDetailsIIIQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsIIIQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsIIIQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
