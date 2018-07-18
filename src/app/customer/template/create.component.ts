import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-template-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class TemplateCreateComponent {
  public templateForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.templateForm = this._fb.group({
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

  public save() {
  }
}
