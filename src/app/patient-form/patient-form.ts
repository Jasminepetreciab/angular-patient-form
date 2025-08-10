import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';//component class
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-patient-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-form.html',
  styleUrls: ['./patient-form.css']
})
export class PatientForm {
  name = '';
  age: number | null = null;
  submitted = false;

  constructor(private http: HttpClient) {}

  // constructor(){}

  submitForm() {
    this.submitted = true;
    console.log(this.name, this.age);

    this.http
      .post('https://jsonplaceholder.typicode.com/posts', {
        name: this.name,
        age: this.age,
      })
      // this.http
      // .get('https://jsonplaceholder.typicode.com/posts/1')

      .subscribe({
        next: (response) => console.log('Form submitted successfully', response),
        error: (error) => console.error('Error submitting form', error),
      });
    
  }
}
