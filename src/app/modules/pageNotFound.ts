import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-not-found',
  standalone: true,
  imports: [],
  templateUrl: '/src/app/views/pageNotFound.html',
  styleUrl: '/src/assets/pageNotFound.css'
})
export class pageNotFoundComponent {
  constructor(private router: Router) {}

  redirect(){
    this.router.navigate(['/']);
  }
}
