import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TemplateRole} from './template-roles.component';

@Component({
  selector: 'app-role',
  template: `
    <div class="form-control role">
      <mat-form-field>
        <input matInput placeholder="Роль" [ngModel]="role.name" (ngModelChange)="onNameUpdate($event)" required>
      </mat-form-field>
    </div>
    <div class="form-control description">
      <mat-form-field>
        <input matInput placeholder="Описание" [ngModel]="role.description" (ngModelChange)="onDescriptionChange($event)">
      </mat-form-field>
    </div>
    <button mat-icon-button (click)="onRemove.emit()">
      <mat-icon aria-label="delete">delete</mat-icon>
    </button>`,
  styles: [`
    :host {
      display: inline-flex;
      width: 100%;
      justify-content: space-between;
    }

    :host .mat-form-field {
      width: 90%;
    }

    .form-control.role {
      width: 40%;
    }

    .form-control.description {
      width: 50%;
    }`]
})
export class TemplateRoleComponent {
  @Input() public role: TemplateRole;
  @Output() public onChange = new EventEmitter<TemplateRole>();
  @Output() public onRemove = new EventEmitter();

  public onNameUpdate(name: string) {
    this.role.name = name;
    this.onChange.emit(this.role);
  }

  public onDescriptionChange(description: string) {
    this.role.description = description;
    this.onChange.emit(this.role);
  }
}
