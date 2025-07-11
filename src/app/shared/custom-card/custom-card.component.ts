import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Might be needed for projected content
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss'
})
export class CustomCardComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() totalVisits: number = 0;
  @Input() totalContentCount: number = 0;
  @Input() latestUpdate: string = '';
  @Input() route: string = '';
  
  constructor(private router: Router) {}

  // Fallback image for error
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://placehold.co/400x200/E0F2FE/1E40AF?text=Image+Not+Found';
  }


  ngOnInit(): void {
  }

  navigateToLink(): void {
    this.router.navigate([this.route]);
  }
}
