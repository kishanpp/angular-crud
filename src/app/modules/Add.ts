import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-employee',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: '/src/app/views/AddEmployee.html',
  styleUrl: '/src/assets/AddEmployee.css'
})
export class AddEmployee {
  addEmployeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addEmployeeForm = this.fb.group({
      employeeEmail: ['sdkhfk@hfdskfs', Validators.compose([
        Validators.email,
        Validators.required, 
        Validators.minLength(5)
      ])],
      employeeGender: ['male', Validators.required],
      employeeJobRole: ['Developer', Validators.required],
      employeeDescription: ['jasdkjahdk', Validators.minLength(5)],  
    });
  }

  save(){
    let ls:Array<String> = JSON.parse(localStorage.getItem('EmployeeData') as any) || [];
    ls = [...ls, this.addEmployeeForm.value];
    localStorage.setItem(
      'EmployeeData', 
      JSON.stringify( ls )
    )
    this.resetForm();
  }
  resetForm() {
    this.addEmployeeForm.reset();
  }
}
