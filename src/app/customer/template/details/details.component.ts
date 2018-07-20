import {Component} from '@angular/core';
import {Template} from '../../../models/template.model';
import {TemplateService} from '../../../services/template.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../../models/project.model';
import {ProjectService} from '../../../services/project.service';

@Component({
  selector: 'app-template-details',
  templateUrl: './details.component.html',
  styles: [`
    * {
      font-size: 14px
    }

    .mat-card-title {
      font-size: 18px;
      font-weight: 700;
    }`]
})
export class TemplateDetailsComponent {
  public template: Template;
  public isLoading: boolean;
  public projects: Array<Project>;

  constructor(private _templateService: TemplateService,
              private _projectService: ProjectService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    this.isLoading = true;

    const id = this._activatedRoute.snapshot.params['id'];
    this._templateService.getTemplate(id).subscribe(result => {
      this.template = result['template'];
      this.isLoading = false;
    });

    this._projectService.getProjectsByTemplate(id).subscribe(result => {
      this.projects = result['projects'];
    });
  }

  public createProject() {
    this._router.navigate(['project', 'new'], {
      queryParams: {
        template: this.template.id
      }
    });
  }
}
