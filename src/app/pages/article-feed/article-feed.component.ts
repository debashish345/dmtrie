import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article } from '../../types/article.model';
import { Router } from '@angular/router';
import { BackButtonComponent } from "../../shared/back-button/back-button.component";

@Component({
  selector: 'app-article-feed',
  imports: [CommonModule, BackButtonComponent],
  standalone: true,
  templateUrl: './article-feed.component.html',
  styleUrl: './article-feed.component.scss'
})
export class ArticleFeedComponent {
  
  // Mock data for articles
  articles: Article[] = [];

  constructor(private router: Router) { 
    // Initialize with some mock data
    this.articles = [];
    
  }

  ngOnInit(): void {
    // Initialize with some mock data
    this.articles = [
      {
        id: 1,
        title: 'Getting Started with Angular & Tailwind CSS',
        youtubeLink: 'https://www.youtube.com/watch?v=angular-tailwind-tutorial',
        codeLink: 'https://github.com/your-repo/angular-tailwind-code',
        visitedCount: 120,
        likedCount: 45
      },
      {
        id: 2,
        title: 'Building a Responsive Layout with Flexbox',
        youtubeLink: 'https://www.youtube.com/watch?v=flexbox-responsive',
        codeLink: 'https://github.com/your-repo/flexbox-layout-code',
        visitedCount: 85,
        likedCount: 30
      },
      {
        id: 3,
        title: 'State Management in Angular with Signals',
        youtubeLink: 'https://www.youtube.com/watch?v=angular-signals',
        codeLink: 'https://github.com/your-repo/angular-signals-code',
        visitedCount: 210,
        likedCount: 78
      },
      {
        id: 4,
        title: 'Advanced Forms in Angular',
        youtubeLink: 'https://www.youtube.com/watch?v=angular-forms',
        codeLink: 'https://github.com/your-repo/angular-forms-code',
        visitedCount: 95,
        likedCount: 22
      },
      {
        id: 5,
        title: 'Optimizing Angular Performance',
        youtubeLink: 'https://www.youtube.com/watch?v=angular-performance',
        codeLink: 'https://github.com/your-repo/angular-performance-code',
        visitedCount: 150,
        likedCount: 60
      }
    ];
  }

  /**
   * Increments the visited count for a given article.
   * @param article The article object to update.
   */
  visitArticle(article: Article): void {
    article.visitedCount++;
    console.log(`Article "${article.title}" visited. New count: ${article.visitedCount}`);
    // In a real application, you would send this update to a backend service.
    this.router.navigate(['system-design/article']);
    console.log(`Navigating to article: ${this.router.navigated}`);
  }

  /**
   * Increments the liked count for a given article.
   * @param article The article object to update.
   */
  likeArticle(article: Article): void {
    article.likedCount++;
    console.log(`Article "${article.title}" liked. New count: ${article.likedCount}`);
    // In a real application, you would send this update to a backend service.
  }

  /**
   * Opens the YouTube link in a new tab.
   * @param url The YouTube URL.
   */
  openYoutubeLink(url: string): void {
    window.open(url, '_blank');
  }

  /**
   * Opens the Code link in a new tab.
   * @param url The Code URL.
   */
  openCodeLink(url: string): void {
    window.open(url, '_blank');
  }

}
