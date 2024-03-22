import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Route, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'update-employee',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: '/src/app/views/UpdateEmployee.html',
  styleUrl: '/src/assets/UpdateEmployee.css'
})
export class UpdateEmployee implements OnInit  {
  employees:Array<any> = [];
  updateEmployeeForm: FormGroup;


  constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private router: Router,
    ) {
    this.updateEmployeeForm = this.fb.group({
      employeeEmail: ['', Validators.compose([
        Validators.email,
        Validators.required, 
        Validators.minLength(5)
      ])],
      employeeGender: ['', Validators.required],
      employeeJobRole: ['', Validators.required],
      employeeDescription: ['', Validators.minLength(5)],  
    });
  }

  ngOnInit() {
    this.employees = JSON.parse(localStorage.getItem('EmployeeData') as any) || [];

    this.route.params.subscribe(params => {
      this.employees = this.employees.filter(emp => emp.employeeEmail === params['emailId']);
    });

    this.updateEmployeeForm.patchValue({
      employeeEmail: this.employees[0].employeeEmail,
      employeeGender: this.employees[0].employeeGender,
      employeeJobRole: this.employees[0].employeeJobRole,
      employeeDescription: this.employees[0].employeeDescription,
    });
  }

  update(){
    let ls:Array<any> = JSON.parse(localStorage.getItem('EmployeeData') as any) || [];

      ls = ls.map((emp, i) => {
        if (emp.employeeEmail === this.employees[0].employeeEmail){
          return {
            ...emp,
            employeeEmail : this.updateEmployeeForm.value.employeeEmail,
            employeeGender : this.updateEmployeeForm.value.employeeGender,
            employeeJobRole : this.updateEmployeeForm.value.employeeJobRole,
            employeeDescription : this.updateEmployeeForm.value.employeeDescription,
          }
        }
      });

    localStorage.setItem(
      'EmployeeData', 
      JSON.stringify( ls )
    )

    this.router.navigate(['view']);
  }

  resetForm() {
    this.updateEmployeeForm.reset();
  }

  ngOnDestroy() {
    // this.paramsSubscription.unsubscribe();
  }

}
