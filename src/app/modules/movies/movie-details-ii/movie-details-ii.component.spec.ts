import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsIIComponent } from './movie-details-ii.component';

describe('MovieDetailsIIComponent', () => {
  let component: MovieDetailsIIComponent;
  let fixture: ComponentFixture<MovieDetailsIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
