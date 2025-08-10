// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PatientForm } from './patient-form/patient-form';


@NgModule({
  declarations: [],
  imports: [BrowserModule,App,FormsModule,ReactiveFormsModule,PatientForm
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
