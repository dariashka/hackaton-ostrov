import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-resource-control',
  template: `
    <div class="form-control">
      <mat-form-field>
        <input matInput placeholder="Ресурс" [(ngModel)]="resource" (blur)="onChange.emit($event)" required>
      </mat-form-field>
    </div>
    <button mat-icon-button (click)="onRemove.emit()">
      <mat-icon aria-label="delete">delete</mat-icon>
    </button>`,
  styles: [`:host {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
  }

  .form-control, .mat-form-field {
    width: 80%;
  }`]
})
export class ResourceControlComponent {
  @Input() public resource: string;
  @Output() public onChange = new EventEmitter<string>();
  @Output() public onRemove = new EventEmitter();
}
