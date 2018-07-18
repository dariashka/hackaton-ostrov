import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Template} from '../../../models/template.model';
import {TemplateService} from '../../../services/template.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class TemplateCreateComponent {
  public templateForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _templateService: TemplateService,
              private _router: Router,
              private _snackbar: MatSnackBar) {
    this.templateForm = this._fb.group({
      name: this._fb.control('', [Validators.required]),
      description: this._fb.control('', [Validators.required]),
      authorInfo: this._fb.control('', []),
      roles: this._fb.control([], []),
      projectsCount: this._fb.control(0, []),
      videoList: this._fb.control([], []),
      additional: this._fb.control([], []),
      resources: this._fb.control([], []),
      isClose: this._fb.control(false),
      categories: this._fb.control('', [Validators.minLength(1)])
    });
  }

  public save() {
    const template: Template = {
      name: this.templateForm.value['name'],
      description: this.templateForm.value['description'],
      authorId: 1, // my id
      authorInfo: this.templateForm.value['authorInfo'],
      roles: this.templateForm.value['roles'],
      projectsCount: this.templateForm.value['projectsCount'],
      videoList: this.templateForm.value['videoList'].map(x => x.url),
      additional: this.templateForm.value['additional'],
      resources: this.templateForm.value['resources'],
      isClose: this.templateForm.value['isClose'],
      categories: this.templateForm.value['categories'].split(' ')
    };

    this._templateService.createTemplate(template).subscribe(res => {
      this._snackbar.open('Ура, шаблон успешно создан!', null, {duration: 1000});
      this._router.navigate(['template']);
    }, error => {
      this._snackbar.open('Oops! Что-то пошло не так. Произошла ошибка.', null, {duration: 1000});
    });
  }
}
