import {Component} from '@angular/core';
import {User} from '../../../models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html'
})
export class UserFormComponent {
  public user: User;
  public userForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _snackbar: MatSnackBar,
              private _router: Router,
              private _userService: UserService) {
    this.userForm = this._fb.group({
      username: this._fb.control('', [Validators.required]),
      firsname: this._fb.control('', [Validators.required]),
      lastname: this._fb.control('', [Validators.required]),
      competention: this._fb.control(''),
      roles: this._fb.control([]),
      about: this._fb.control('', [Validators.required]),
    });
  }

  public save() {
    this._userService.createUser(this.userForm.value).subscribe(res => {
      this._snackbar.open('Ура, пользователь успешно создан!', null, {duration: 1000});
      this._router.navigate(['user']);
    }, error => {
      this._snackbar.open('Oops! Что-то пошло не так. Произошла ошибка.', null, {duration: 1000});
    });
  }
}
