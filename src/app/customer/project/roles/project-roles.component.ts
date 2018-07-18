import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface ProjectRole {
  name: string;
  isNeeded: boolean;
  user: number;
  isInput?: boolean;
}

@Component({
  selector: 'app-project-roles',
  templateUrl: './project-roles.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ProjectRolesComponent),
    multi: true
  }],
  styles: [`
    :host /deep/ .mat-checkbox-layout,
    :host /deep/ .mat-checkbox-label {
      width: 100%
    }`]
})
export class ProjectRolesComponent implements ControlValueAccessor {
  public roles: Array<ProjectRole> = [];

  public writeValue(value: any) {
    if (value !== undefined) {
      this.roles = value;
    }
  }

  public propagateChange = (_: any) => {
  }

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {
  }

  public onChange() {
    this.propagateChange(this.roles);
  }

  public addNewRole() {
    this.roles.push({
      name: '',
      isNeeded: true,
      user: null,
      isInput: true
    });
  }
}
