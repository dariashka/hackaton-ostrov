import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ProjectCreateComponent {
  public projectForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.projectForm = this._fb.group({
    });
  }
}
