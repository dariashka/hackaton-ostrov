import {Project} from './project.model';

export class User {
  id: number;
  username: string;
  firsname: string;
  lastname: string;
  about: string;
  roles: Array<string>;
  myproject: Project[];
  project: Project[];
  competention: string;
}
