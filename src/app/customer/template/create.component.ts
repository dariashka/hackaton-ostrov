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
    });
  }
}
