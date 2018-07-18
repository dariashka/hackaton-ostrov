import {Component} from '@angular/core';

interface Role {
  name: string;
  employer?: {
    id: string;
    name?: string;
  };
}

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html'
})
export class RolesComponent {
  public roles: Array<Role> = [];


}
