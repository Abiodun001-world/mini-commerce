import ProductClient from './ProdutClient';
import { Product } from '@/types/product';

export async function generateStaticParams() {
  try {
    const response = await fetch('http://localhost:3000/data/products.json');
    const products: Product[] = await response.json();
    
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}

export default function ProductPage() {
  return <ProductClient />;
}
