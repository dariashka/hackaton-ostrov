import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UserRolesComponent),
    multi: true
  }],
  styles: [`
    :host /deep/ .mat-checkbox-layout,
    :host /deep/ .mat-checkbox-label {
      width: 100%
    }`]
})
export class UserRolesComponent implements ControlValueAccessor {
  public roles: Array<string> = [];

  public writeValue(value: any) {
    if (value !== undefined) {
      this.roles = value;
    }
  }

  public propagateChange = (_: any) => {
  };

  public registerOnChange(fn) {
    this.propagateChange = fn;
  }

  public registerOnTouched() {
  }

  public onChange() {
    this.propagateChange(this.roles);
  }

  public addNewRole() {
    this.roles.push('');
  }
}
