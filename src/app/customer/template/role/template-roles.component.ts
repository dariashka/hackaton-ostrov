import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface TemplateRole {
  name: string;
  description: string;
}

@Component({
  selector: 'app-roles',
  templateUrl: './template-roles.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TemplateRolesComponent),
    multi: true
  }],
  styles: [`
    .role-container {
    }`]
})
export class TemplateRolesComponent implements ControlValueAccessor {
  public roles: Array<TemplateRole> = [];

  public addNewRole() {
    this.roles.push({
      name: '',
      description: ''
    });
  }

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

  public updateRole(role: TemplateRole, index: number) {
    this.roles[index] = role;
    this.propagateChange(this.roles);
  }

  public remove(index: number) {
    this.roles.splice(index, 1);
    this.propagateChange(this.roles);
  }
}
