import { UserService } from '../services/user.service';
import { FormControl } from '@angular/forms';
import { timer } from 'rxjs';
import { debounce, map } from 'rxjs/operators';

export const usernameValidator = (userService: UserService) => {
  return (input: FormControl) => {
    return userService.isUserExist(input.value).pipe(
      map(res => {
        return res && res.length > 0 ? { usernameExist: true } : null;
      })
    );
  };
};
