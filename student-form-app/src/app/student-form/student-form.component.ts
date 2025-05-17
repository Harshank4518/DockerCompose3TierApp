import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // For HTTP requests
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';  // For reactive form
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      course: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const apiUrl = `${environment.apiUrl}/student/add`;
      this.http.post(apiUrl, this.studentForm.value).subscribe({
        next: (response) => {
          console.log('Student added successfully', response);
          alert('Student added successfully!');
          this.studentForm.reset();
        },
        error: (error) => {
          console.error('Error adding student', error);
          alert('Failed to add student.');
        }
      });
    } else {
      alert('Please fill the form correctly.');
    }
  }
}
