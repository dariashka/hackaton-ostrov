import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './create.component.html'
})
export class ProjectCreateComponent {
  public projectForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.projectForm = this._fb.group({
      name: this._fb.control('', [Validators.required]),
      description: this._fb.control('', [Validators.required]),
      author: this._fb.control('', []),
      roles: this._fb.control([], []),
      projectsCount: this._fb.control(0, []),
      video: this._fb.control([], []),
      additional: this._fb.control('', []),
      resources: this._fb.control([], []),
    });
  }
}
