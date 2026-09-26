export type FAQCategory = 'General' | 'Services' | 'Projects' | 'Technical';

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}
