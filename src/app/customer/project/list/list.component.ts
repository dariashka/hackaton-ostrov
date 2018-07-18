import {Component} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: `./list.component.html`
})
export class ProjectListComponent {
  public list: Array<Project>;

  constructor(private _service: ProjectService) {
    this._service.getList().subscribe(response => {
      this.list = response['projects'];
    });
  }
}
