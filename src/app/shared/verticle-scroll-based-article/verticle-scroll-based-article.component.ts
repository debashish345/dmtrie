import { Component, Input } from '@angular/core';
import { VerticleScrollBasedArticleBlock } from '../../types/verticle-scroll-based-article.model';

@Component({
  selector: 'app-verticle-scroll-based-article',
  imports: [],
  templateUrl: './verticle-scroll-based-article.component.html',
  styleUrl: './verticle-scroll-based-article.component.scss'
})
export class VerticleScrollBasedArticleComponent {

  constructor() { 
    console.log('VerticleScrollBasedArticleComponent initialized');
  }
  
articleBlocks: VerticleScrollBasedArticleBlock[] = [
  { type: 'heading', content: 'Designing a Scalable Log Aggregation System' },
  { type: 'paragraph', content: 'In modern distributed systems, effectively collecting, processing, and analyzing logs is paramount for monitoring, debugging, and security. This article delves into the system design considerations for building a robust and scalable log aggregation platform, often referred to as a "logger system".' },
  { type: 'subheading', content: 'Key Components of a Log Aggregation System' },
  { type: 'paragraph', content: 'A typical log aggregation system consists of several interconnected components, each playing a crucial role in the lifecycle of a log message.' },
  { type: 'image', src: 'https://miro.medium.com/v2/resize:fit:1080/1*DaEbWvv7HZcipc-_KdNJVg.png', alt: 'High-Level Architecture of a Log Aggregation System' }, // Example diagram, often found on tech blogs
  { type: 'paragraph', content: 'From log producers to storage and visualization, each stage requires careful design to ensure high throughput, low latency, and fault tolerance.' },
  { type: 'subheading', content: 'Log Ingestion and Transport' },
  { type: 'paragraph', content: 'The first step involves getting logs from various services into the aggregation system. This can be achieved through agents (e.g., Fluentd, Logstash), direct SDKs, or syslog.' },
  { type: 'code', language: 'json', content: `{\n  "timestamp": "2025-07-09T09:30:00Z",\n  "level": "INFO",\n  ""message": "User 'john_doe' logged in successfully.",\n  "service": "authentication-service",\n  "correlationId": "abc-123-xyz"\n}` },
  { type: 'paragraph', content: 'For reliable and scalable transport, message queues like Apache Kafka or RabbitMQ are commonly used.' },
  { type: 'link', href: 'https://kafka.apache.org/intro', text: 'Learn more about Apache Kafka' },
  { type: 'subheading', content: 'Processing and Indexing' },
  { type: 'paragraph', content: 'Once ingested, logs are often processed to extract meaningful information, transform their format, and enrich them with additional context. This processed data is then indexed for efficient searching and analysis.' },
  { type: 'code', language: 'python', content: `def process_log(log_entry):\n    # Parse timestamp, level, message\n    # Add geographic data based on IP\n    # Normalize service names\n    return processed_log_entry` },
  { type: 'paragraph', content: 'Elasticsearch is a popular choice for indexing and searching logs due to its distributed nature and powerful query capabilities.' },
  { type: 'link', href: 'https://www.elastic.co/what-is/elasticsearch', text: 'What is Elasticsearch?' },
  { type: 'image', src: 'https://www.educative.io/cdn-cgi/image/f=auto,fit=contain,w=600/api/page/5387431417534464/image/6231904121542656', alt: 'Elasticsearch Log Indexing Flow' }, // Another example diagram
  { type: 'subheading', content: 'Storage and Retention' },
  { type: 'paragraph', content: 'Logs need to be stored efficiently for both real-time access (hot storage) and long-term archival (cold storage). Object storage services like AWS S3 or Google Cloud Storage are often used for cost-effective cold storage.' },
  { type: 'video', src: 'https://www.youtube.com/embed/yv_i4h29Q0Q?si=fX2H0YpT03U-o58B', }, // YouTube embed example
  { type: 'subheading', content: 'Visualization and Alerting' },
  { type: 'paragraph', content: 'Finally, aggregated logs are made accessible to users through dashboards and interfaces for monitoring system health, troubleshooting issues, and setting up alerts based on predefined criteria.' },
  { type: 'link', href: 'https://grafana.com/docs/grafana/latest/fundamentals/what-is-grafana/', text: 'Explore Grafana for log visualization' },
  { type: 'paragraph', content: 'This comprehensive approach to log aggregation is vital for maintaining the health and performance of large-scale distributed applications.' }
];
  
}
