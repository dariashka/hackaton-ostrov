import {Component} from '@angular/core';
import {Template} from '../../../models/template.model';
import {TemplateService} from '../../../services/template.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private _templateService: TemplateService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    this.isLoading = true;

    const id = this._activatedRoute.snapshot.params['id'];
    this._templateService.getTemplate(id).subscribe(result => {
      this.template = result['template'];
      this.isLoading = false;
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
