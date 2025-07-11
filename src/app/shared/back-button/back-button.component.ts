import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Import Location

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss',
})
export class BackButtonComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
