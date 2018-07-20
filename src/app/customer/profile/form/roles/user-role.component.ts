import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-role',
  template: `
    <mat-form-field>
      <input name="roleName" matInput placeholder="Роль" [(ngModel)]="role" (blur)="onChange.emit(role)" required>
    </mat-form-field>`
})
export class UserRoleComponent {
  @Input() public role;
  @Output() public onChange = new EventEmitter<string>();
}
