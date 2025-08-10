import { Component, signal } from '@angular/core';
import { PatientForm } from './patient-form/patient-form';


@Component({
  selector: 'app-root',
  imports:[PatientForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  

  //protected readonly title = signal('patient-app');
  
}
