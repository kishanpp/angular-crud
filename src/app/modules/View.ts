import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: '',
  standalone: true,
  imports: [RouterOutlet,RouterModule, ReactiveFormsModule],
  templateUrl: '/src/app/views/ViewEmployee.html',
  styleUrl: '/src/assets/ViewEmployee.css'
})
export class ViewEmployee {
  employees = JSON.parse(localStorage.getItem('EmployeeData') as any) || [];


  constructor(){

  }
}
