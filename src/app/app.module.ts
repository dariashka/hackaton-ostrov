import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './layout/menu.component';
import {CustomerComponent} from './customer/customer.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {TemplateCreateComponent} from './customer/template/create.component';
import {AppRoutingModule} from './app.routing';
import {ProjectCreateComponent} from './customer/project/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VideoSelectorComponent} from './customer/project/video-selector.component';
import {VideoSelectorDialogComponent} from './customer/project/video-selector-dialog.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerComponent,
    ProjectCreateComponent,
    TemplateCreateComponent,
    VideoSelectorComponent,
    VideoSelectorDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  entryComponents: [VideoSelectorDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
