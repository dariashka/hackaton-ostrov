import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Template} from '../../../models/template.model';
import {TemplateService} from '../../../services/template.service';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-project-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ProjectCreateComponent {
  public projectForm: FormGroup;
  public templates: Array<Template> = [];

  constructor(private _fb: FormBuilder,
              private _snackbar: MatSnackBar,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _templateService: TemplateService,
              private _projectService: ProjectService) {
    const templateId = parseInt(this._activatedRoute.snapshot.queryParams['template']);
    let roles = [];
    this._templateService.getList().subscribe(result => {
      this.templates = result['templates'];
      roles = this.templates.find(_ => _.id === templateId)
        && this.templates.find(_ => _.id === templateId).roles.map(_ => ({
          role: {name: _.name, about: _.description},
          status: 0,
        }));

      this.projectForm.controls['party'].setValue(roles);
    });
    this.projectForm = this._fb.group({
      name: this._fb.control('', [Validators.required]),
      templateId: this._fb.control(templateId),
      about: this._fb.control('', [Validators.required]),
      party: this._fb.control(roles, [Validators.required]),
      isOpen: this._fb.control(true)
    });


    this.projectForm.controls['templateId'].valueChanges.subscribe((tempId) => {
      console.log(tempId, this.templates.find(_ => _.id === tempId));
      this.projectForm.controls['party'].setValue(this.templates.find(_ => _.id === tempId).roles.map(_ => ({
        role: {name: _.name, about: _.description},
        status: 0
      })));
    });
  }

  public save() {
    const project: Project = {
      name: this.projectForm.value['name'],
      about: this.projectForm.value['about'],
      isOpen: this.projectForm.value['isOpen'],
      party: this.projectForm.value['party'],
      templateID: this.projectForm.value['templateId'],
    };

    this._projectService.createProject(project).subscribe(res => {
      this._snackbar.open('Ура, проект успешно создан!', null, {duration: 1000});
      this._router.navigate(['project']);
    }, error => {
      this._snackbar.open('Oops! Что-то пошло не так. Произошла ошибка.', null, {duration: 1000});
    });
  }
}
