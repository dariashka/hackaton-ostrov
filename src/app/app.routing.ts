import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {TemplateCreateComponent} from './customer/template/create/create.component';
import {ProjectCreateComponent} from './customer/project/create/create.component';
import {TemplateListComponent} from './customer/template/list/list.component';
import {TemplateDetailsComponent} from './customer/template/details/details.component';
import {ProjectListComponent} from './customer/project/list/list.component';
import {ProjectDetailsComponent} from './customer/project/details/details.component';
import {UserListComponent} from './customer/user/list/list.component';
import {UserDashboardComponent} from './customer/profile/dashboard/dashboard.component';
import {UserFormComponent} from './customer/profile/form/form.component';
import {UserDetailsComponent} from './customer/profile/details/details.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'my',
            component: UserDetailsComponent
          }, {
            path: 'register',
            component: UserFormComponent
          }, {
            path: 'dashboard',
            component: UserDashboardComponent
          }, {
            path: 'template',
            children: [{
              path: '',
              component: TemplateListComponent
            }, {
              path: 'new',
              component: TemplateCreateComponent
            }, {
              path: ':id',
              component: TemplateDetailsComponent
            }]
          }, {
            path: 'project',
            children: [{
              path: '',
              component: ProjectListComponent
            }, {
              path: 'new',
              component: ProjectCreateComponent
            }, {
              path: ':id',
              component: ProjectDetailsComponent
            }]
          }, {
            path: 'user',
            children: [{
              path: '',
              component: UserListComponent
            }, {
              path: ':id',
              component: UserDetailsComponent
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
