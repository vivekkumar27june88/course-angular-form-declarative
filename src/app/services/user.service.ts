import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dummyExistingUser = ['a@a.com', 'b@b.com', 'c@c.com'];
  constructor(private httpClient: HttpClient) {}

  public isUserExist(username: string): Observable<string[]> {
    if (this.dummyExistingUser.includes(username)) {
      return of([username]).pipe(delay(2000));
    } else {
      return of([]).pipe(delay(2000));
    }
  }
}
