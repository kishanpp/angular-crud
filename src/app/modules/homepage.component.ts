import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule /* CommonModule */],
  templateUrl: '/src/app/views/homepage.html',
  styleUrl: '/src/assets/homepage.css'
})
export class HomepageComponent {

}
