import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-resources-control',
  template: `
    <mat-grid-tile-header class="sub-header">Ресурсы
      <button mat-fab color="primary" (click)="addNewResource()">
        <i class="material-icons">add</i>
      </button>
    </mat-grid-tile-header>
    <div class="grid-container">
      <div class="form-control">
        <div class="role-container">

          <div class="row" *ngFor="let resource of resources; let i = index">
            <app-resource-control [resource]="resource" (onChange)="updateResource($event, i)"
                                  (onRemove)="remove(i)"></app-resource-control>
          </div>
        </div>
      </div>
    </div>

  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ResourcesControlComponent),
    multi: true
  }],
})
export class ResourcesControlComponent implements ControlValueAccessor {
  public resources: Array<string> = [];

  public addNewResource() {
    this.resources.push('');
  }

  public writeValue(value: any) {
    if (value !== undefined) {
      this.resources = value;
    }
  }

  public propagateChange = (_: any) => {
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {
  }

  public updateResource(resource: string, index: number) {
    this.resources[index] = resource;
    this.propagateChange(this.resources);
  }

  public remove(index: number) {
    this.resources.splice(index, 1);
    this.propagateChange(this.resources);
  }

}
