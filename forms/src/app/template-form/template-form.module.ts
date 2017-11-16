import { HttpModule } from '@angular/http';
import { CampoControlErrorComponent } from './../campo-control-error/campo-control-error.component';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErrorComponent
  ]
})
export class TemplateFormModule { }
