import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-additional-controls',
  template: `
    <mat-grid-tile-header class="sub-header">Дополнительные материалы
      <button mat-fab color="primary" (click)="addNewAdditional()">
        <i class="material-icons">add</i>
      </button>
    </mat-grid-tile-header>
    <div class="grid-container">
      <div class="form-control">
        <div class="role-container">
          <div class="row" *ngFor="let additional of additionals; let i = index">
            <app-additional-control [additional]="additional" (onChange)="updateAdditional($event, i)"
                                    (onRemove)="remove(i)"></app-additional-control>
          </div>
        </div>
      </div>
    </div>

  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AdditionalControlsComponent),
    multi: true
  }],
})
export class AdditionalControlsComponent implements ControlValueAccessor {
  public additionals: Array<string> = [];

  public addNewAdditional() {
    this.additionals.push('');
  }

  public writeValue(value: any) {
    if (value !== undefined) {
      this.additionals = value;
    }
  }

  public propagateChange = (_: any) => {
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {
  }

  public updateAdditional(additional: string, index: number) {
    this.additionals[index] = additional;
    this.propagateChange(this.additionals);
  }

  public remove(index: number) {
    this.additionals.splice(index, 1);
    this.propagateChange(this.additionals);
  }

}
