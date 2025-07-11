import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticleScrollBasedArticleComponent } from './verticle-scroll-based-article.component';

describe('VerticleScrollBasedArticleComponent', () => {
  let component: VerticleScrollBasedArticleComponent;
  let fixture: ComponentFixture<VerticleScrollBasedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticleScrollBasedArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticleScrollBasedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
