import {Component} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  template: `
    <div *ngIf="user">
      <h1>{{ user.username }} ({{user.firsname}} {{user.lastname}}) </h1>

      <h3>Роли:</h3>
      <mat-list role="list" *ngIf="user.roles && !!user.roles.length">
        <mat-list-item role="listitem" *ngFor="let r of user.roles">{{ r }}</mat-list-item>
      </mat-list>
      <span *ngIf="user && (!user.roles || !user.roles.length)">Роли не заданы</span>
    </div>
  `
})
export class UserDetailsComponent {
  public user: User;

  constructor(private _userService: UserService,
              private _activatedRoute: ActivatedRoute) {
    const myId = 1;
    const id = this._activatedRoute.snapshot.params['id'];
    this._userService.getUser(id || myId).subscribe(result => {
      this.user = result['user'];
    });
  }
}
