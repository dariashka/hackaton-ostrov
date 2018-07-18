import {Component} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../../models/project.model';
import {TemplateService} from '../../../services/template.service';
import {Template} from '../../../models/template.model';

@Component({
  selector: 'app-project-details',
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
export class ProjectDetailsComponent {
  public project: Project;
  public isLoading: boolean;
  public projectTemplate: Template;

  constructor(private _projectService: ProjectService,
              private _templateService: TemplateService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    this.isLoading = true;

    const id = this._activatedRoute.snapshot.params['id'];
    this._projectService.getProject(id).subscribe(result => {
      this.project = result['project'];
      if (!!this.project.templateId) {
        this._templateService.getTemplate(this.project.templateId).subscribe(res => this.projectTemplate = res['template']);
      }
      this.isLoading = false;
    });
  }

  public createProject() {
    this._router.navigate(['project', 'new'], {
      queryParams: {
        project: this.project.id
      }
    });
  }
}
