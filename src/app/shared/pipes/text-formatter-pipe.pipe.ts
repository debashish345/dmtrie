import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'textFormatter',
  // A pure pipe is generally preferred for performance.
  // Set to false if you need it to re-run on every change detection cycle,
  // but be mindful of performance implications.
  pure: true
})
export class TextFormatterPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined): SafeHtml {
    if (!value) {
      return this.sanitizer.bypassSecurityTrustHtml('');
    }

    let formattedText = value;

    // Bold: **text** or *text*
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<strong>$1</strong>'); // For single asterisk too

    // Italic: _text_
    formattedText = formattedText.replace(/_(.*?)_/g, '<em>$1</em>');

    // Underline: ~text~
    formattedText = formattedText.replace(/~(.*?)~/g, '<u>$1</u>');

    // Add more formatting rules here (e.g., strikethrough, monospace)
    // Example: Monospace `code`
    formattedText = formattedText.replace(/`(.*?)`/g, '<code>$1</code>');

    // Handle new lines for display in HTML
    formattedText = formattedText.replace(/\n/g, '<br>');

    // Safely bypass security for the generated HTML
    return this.sanitizer.bypassSecurityTrustHtml(formattedText);
  }
}