import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TemplateCreateComponent} from './customer/template/create.component';
import {CustomerComponent} from './customer/customer.component';
import {ProjectCreateComponent} from './customer/project/create.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'dashboard',
            component: CustomerComponent
          }, {
            path: 'template',
            children: [{
              path: 'new',
              component: TemplateCreateComponent
            }]
          }, {
            path: 'project',
            children: [{
              path: 'new',
              component: ProjectCreateComponent
            }]
          }, {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard'
          }
        ]
      }
    ])
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
