import {Component} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: `./list.component.html`
})
export class UserListComponent {
  public list;

  constructor(private _userService: UserService) {
    this._userService.getList().subscribe(response => {
      this.list = response['users'];
    });
  }

}
