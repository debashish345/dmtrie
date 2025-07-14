import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// Custom Pipe for Inline Code Highlighting
@Pipe({
  name: 'highlightInlineCode'
})
export class HighlightInlineCodePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null): SafeHtml {
    if (!value) {
      return '';
    }

    // First, escape HTML to prevent XSS and ensure plain text is rendered as is
    let processedValue = value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    
    // Regex to find content wrapped in backticks (`)
    // It captures the content inside the backticks.
    const highlightedText = value.replace(/`([^`]+)`/g, '<code class="inline-code bg-gray-100 p-1 rounded border border-gray-200">$1</code>');

    // Finally, replace newline characters with <br> tags for line breaks in HTML.
    processedValue = processedValue.replace(/\n/g, '<br>');

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}