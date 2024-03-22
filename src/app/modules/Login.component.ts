import { Component, inject, Injectable } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LocalService } from './local.service';
import { Store, select } from "@ngrx/store";
import { login } from "./actions/login.action";
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { userState, selectState } from './reducers/login.reducer';

@Component({
  selector: 'login-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: '/src/app/views/login.html',
  styleUrl: '/src/assets/login.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private localStore: LocalService,
    private readonly store: Store <userState>,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['admin', Validators.compose([
                                                // Validators.email,
                                                Validators.required, 
                                                Validators.minLength(5)
                                              ])
                  ],
      password: ['admin-password', Validators.required],
    });
  }

  ngOnInit(): void {
    this.localStore.saveData('admin', 'admin-password');
    console.log(this.localStore.getData('admin'));
    console.log(this.store.select(selectState))
  }

  login(){
    this.store.dispatch(
      login({
        username: '',
        password: ''
      })
    );
    console.log(this.store.select(selectState))
  }
}
