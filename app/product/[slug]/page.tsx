import ProductClient from './ProductClient';
import products from '@/data/products.json'; 
import { Product } from '@/types/product';

export async function generateStaticParams() {
  return products.map((product: Product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage() {
  return <ProductClient />;
}
