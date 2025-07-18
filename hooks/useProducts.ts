import { useQuery } from '@tanstack/react-query';
import { Product } from '@/types/product';

const fetchProducts = async (): Promise<Product[]> => {
  // Simple fetch from JSON file
  const response = await fetch('/data/products.json');
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  const products = await response.json();
  
  return products;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async (): Promise<Product | null> => {
      const products = await fetchProducts();
      return products.find(product => product.slug === slug) || null;
    },
  });
};