import {Component} from '@angular/core';
import {TemplateService} from '../../../services/template.service';

@Component({
  selector: 'app-template-list',
  templateUrl: `./list.component.html`
})
export class TemplateListComponent {
  public list;

  constructor(private _templateService: TemplateService) {
    this._templateService.getList().subscribe(response =>
      this.list = response['templates']);
  }
}
