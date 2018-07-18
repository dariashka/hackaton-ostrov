import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Template} from '../../../models/template.model';
import {TemplateService} from '../../../services/template.service';
import {ProjectService} from '../../../services/project.service';
import {Project} from '../../../models/project.model';

@Component({
  selector: 'app-project-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  public projectForm: FormGroup;
  public templates: Array<Template> = [];

  constructor(private _fb: FormBuilder,
              private _activatedRoute: ActivatedRoute,
              private _templateService: TemplateService,
              private _projectService: ProjectService) {
    const templateId = this._activatedRoute.snapshot.queryParams['template'];

    this.projectForm = this._fb.group({
      name: this._fb.control('', [Validators.required]),
      templateId: this._fb.control(templateId),
      about: this._fb.control('', [Validators.required]),
      party: this._fb.control([], [Validators.required]),
      isOpen: this._fb.control(true)
    });

    this.projectForm.controls['templateId'].valueChanges.subscribe((tempId) => {
      console.log(tempId, this.templates.find(_ => _.id === tempId));
      this.projectForm.controls['party'].setValue(this.templates.find(_ => _.id === tempId).roles.map(_ => ({
        name: _.name,
        isNeeded: false,
        employer: null
      })));
    });
  }

  public ngOnInit() {
    this._templateService.getList().subscribe(result => this.templates = result['templates']);
  }

  public save() {
    const project: Project = {
      name: this.projectForm.value['name'],
      about: this.projectForm.value['about'],
      isOpen: this.projectForm.value['isOpen'],
      party: this.projectForm.value['party'],
      templateId: this.projectForm.value['templateId'],
    };

    this._projectService.createProject(project).subscribe(() => console.log('success'), error => console.log('error'));
  }
}
