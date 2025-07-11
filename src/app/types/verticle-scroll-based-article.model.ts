export type VerticleScrollBasedArticleBlock =
  | { type: 'heading'; content: string }
  | { type: 'subheading'; content: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string }
  | { type: 'code'; language: string; content: string }
  | { type: 'link'; href: string; text: string }
  | { type: 'paragraph'; content: string };
