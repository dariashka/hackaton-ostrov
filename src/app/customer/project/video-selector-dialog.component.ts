import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-video-selector-dialog',
  template: `
    <mat-form-field>
      <input matInput [(ngModel)]="url" placeholder="URL видео">
    </mat-form-field>
    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Отменить</button>
      <button mat-button [mat-dialog-close]="url" cdkFocusInitial>Сохранить</button>
    </div>
  `
})
export class VideoSelectorDialogComponent {
  public url;

  constructor(
    public dialogRef: MatDialogRef<VideoSelectorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { url: string }) {
    this.url = data.url;
  }

  public cancel() {
  }
}
