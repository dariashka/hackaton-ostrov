import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './layout/menu.component';
import {CustomerComponent} from './customer/customer.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {AppRoutingModule} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VideoSelectorComponent} from './customer/template/video-selector/video-selector.component';
import {VideoSelectorDialogComponent} from './customer/template/video-selector/video-selector-dialog.component';
import {CommonModule} from '@angular/common';
import {TemplateRolesComponent} from './customer/template/role/template-roles.component';
import {TemplateCreateComponent} from './customer/template/create/create.component';
import {ProjectCreateComponent} from './customer/project/create/create.component';
import {TemplateRoleComponent} from './customer/template/role/role.component';
import {TemplateService} from './services/template.service';
import {HttpClientModule} from '@angular/common/http';
import {TemplateListComponent} from './customer/template/list/list.component';
import {ResourcesControlComponent} from './customer/template/resources/resources-control.component';
import {ResourceControlComponent} from './customer/template/resources/resource-control.component';
import {AdditionalControlsComponent} from './customer/template/additional/additional-controls.component';
import {AdditionalControlComponent} from './customer/template/additional/additional-control.component';
import {TemplateDetailsComponent} from './customer/template/details/details.component';
import {LoaderComponent} from './loader/loader.component';
import {LoadingDirective} from './loader/loader.directive';
import {ProjectListComponent} from './customer/project/list/list.component';
import {ProjectService} from './services/project.service';
import {ProjectDetailsComponent} from './customer/project/details/details.component';
import {ProjectRolesComponent} from './customer/project/roles/project-roles.component';

@NgModule({
  declarations: [
    AdditionalControlsComponent,
    AdditionalControlComponent,
    AppComponent,
    MenuComponent,
    CustomerComponent,
    LoaderComponent,
    LoadingDirective,
    ProjectCreateComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    ProjectRolesComponent,
    ResourcesControlComponent,
    ResourceControlComponent,
    TemplateCreateComponent,
    TemplateDetailsComponent,
    TemplateListComponent,
    TemplateRoleComponent,
    TemplateRolesComponent,
    VideoSelectorComponent,
    VideoSelectorDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  entryComponents: [VideoSelectorDialogComponent],
  providers: [TemplateService,
    ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
