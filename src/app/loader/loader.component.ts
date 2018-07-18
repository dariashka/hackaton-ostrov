import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: '<mat-spinner class="spinner" [diameter]="50" [strokeWidth]="5"></mat-spinner>',
  styles: [`
    app-loader {
      text-align: center;
    }
    app-loader .spinner {
      width: 40px;
      height: 40px;
      margin: 20px auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent { }
