import { Component } from '@angular/core';
import { VerticleScrollBasedArticleBlock } from '../../../types/verticle-scroll-based-article.model';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-editor',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './article-editor.component.html',
  styleUrl: './article-editor.component.scss',
})
export class ArticleEditorComponent {articleForm!: FormGroup;

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      blocks: new FormArray([])
    });
  }

  get blocks(): FormArray {
    return this.articleForm.get('blocks') as FormArray;
  }

  createBlock(type: VerticleScrollBasedArticleBlock['type']): FormGroup {
    switch (type) {
      case 'heading':
        return new FormGroup({
          type: new FormControl('heading'),
          content: new FormControl('', Validators.required)
        });
      case 'subheading':
        return new FormGroup({
          type: new FormControl('subheading'),
          content: new FormControl('', Validators.required)
        });
      case 'image':
        return new FormGroup({
          type: new FormControl('image'),
          src: new FormControl('', Validators.required),
          alt: new FormControl('')
        });
      case 'video':
        return new FormGroup({
          type: new FormControl('video'),
          src: new FormControl('', Validators.required)
        });
      case 'code':
        return new FormGroup({
          type: new FormControl('code'),
          language: new FormControl('', Validators.required),
          content: new FormControl('', Validators.required)
        });
      case 'link':
        return new FormGroup({
          type: new FormControl('link'),
          href: new FormControl('', [Validators.required, Validators.pattern('^(http|https)://[^ "]+$')]),
          text: new FormControl('', Validators.required)
        });
      case 'paragraph':
        return new FormGroup({
          type: new FormControl('paragraph'),
          content: new FormControl('', Validators.required)
        });
      default:
        return new FormGroup({ type: new FormControl('paragraph'), content: new FormControl('') });
    }
  }

  addBlock(type: VerticleScrollBasedArticleBlock['type'], index?: number) {
    const newBlock = this.createBlock(type);
    if (index !== undefined && index >= 0 && index <= this.blocks.length) {
      this.blocks.insert(index, newBlock); // Insert at a specific index
    } else {
      this.blocks.push(newBlock); // Add to the end
    }
  }

  removeBlock(index: number) {
    this.blocks.removeAt(index);
  }

  moveBlockUp(index: number) {
    if (index > 0) {
      const currentBlock = this.blocks.at(index);
      this.blocks.removeAt(index);
      this.blocks.insert(index - 1, currentBlock);
    }
  }

  moveBlockDown(index: number) {
    if (index < this.blocks.length - 1) {
      const currentBlock = this.blocks.at(index);
      this.blocks.removeAt(index);
      this.blocks.insert(index + 1, currentBlock);
    }
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Article Data:', this.articleForm.value);
    } else {
      console.log('Form is invalid. Please check all fields.');
      this.markAllAsTouched(this.articleForm);
    }
  }

  private markAllAsTouched(control: AbstractControl) {
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup || control instanceof FormArray) {
      Object.values(control.controls).forEach(c => this.markAllAsTouched(c));
    }
  }

  loadExistingBlocks(data: VerticleScrollBasedArticleBlock[]) {
    this.blocks.clear();
    data.forEach(block => {
      const blockFormGroup = this.createBlock(block.type);
      blockFormGroup.patchValue(block);
      this.blocks.push(blockFormGroup);
    });
  }
}
