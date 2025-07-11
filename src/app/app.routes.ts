import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { VerticleScrollBasedArticleComponent } from './shared/verticle-scroll-based-article/verticle-scroll-based-article.component';
import { ArticleFeedComponent } from './pages/article-feed/article-feed.component';
import { ArticleEditorComponent } from './shared/article-editor/article-editor/article-editor.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'system-design', component: ArticleFeedComponent, 
    },
    {
        path: 'system-design/article', component: VerticleScrollBasedArticleComponent, 
    },
    {
        path: 'editor', component: ArticleEditorComponent,
    },
];
