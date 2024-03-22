import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  // templateUrl: '/src/app/views/homepage.html',
  // styleUrl: './app.component.css'
  styleUrl: '/src/assets/homepage.css'
})
export class AppComponent {
  title = 'angular-crud';
constructor(){
    
  }
}
