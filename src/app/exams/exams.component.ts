import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
  saved: boolean = false;
  form: FormGroup;
  registeredExams: any[] = [];

  constructor() {
    this.form = new FormGroup({
      subjects: new FormGroup({
        math: new FormControl(),
        tech: new FormControl(),
        systems: new FormControl(),
        programming: new FormControl(),
      }),
    });
  }

  ngOnInit(): void {}

  saveRegistration() {
    const subjects = (<FormGroup>this.form.get('subjects')).controls;
    for (const control in subjects) {
      subjects[control].value === true
        ? this.registeredExams.push([control, subjects[control]])
        : this.registeredExams;
    }
    console.log(this.registeredExams);

    if (this.registeredExams.length !== 0) {
      this.saved = true;
    }
  }
}
