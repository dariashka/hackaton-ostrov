import {ProjectRole} from '../customer/project/roles/project-roles.component';

export class Project {
  id?: number;
  isOpen: boolean;
  name: string;
  about: string;
  party: Array<ProjectRole>;
  templateID: number;
}
