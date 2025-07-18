import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '@/components/ProductCard';
import { useCartStore } from '@/store/cartStore';
import { Product } from '@/types/product';

// Mock the cart store
jest.mock('@/store/cartStore');
const mockUseCartStore = useCartStore as jest.MockedFunction<typeof useCartStore>;

// Mock Next.js components
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

jest.mock('next/image', () => {
  return ({ src, alt, width, height, className }: any) => (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );
});

const mockProduct: Product = {
  id: 1,
  name: "Wireless Headphones",
  slug: "wireless-headphones",
  price: 79.99,
  image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
  description: "High-quality wireless headphones with noise cancellation and long battery life.",
  category: "Electronics",
  inStock: true,
  rating: 4.5,
  reviews: 128,
};

describe('ProductCard', () => {
  const mockAddItem = jest.fn();

  beforeEach(() => {
    mockUseCartStore.mockReturnValue(mockAddItem);
    jest.clearAllMocks();
  });

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('$79.99')).toBeInTheDocument();
    expect(screen.getByText('High-quality wireless headphones with noise cancellation and long battery life.')).toBeInTheDocument();
    expect(screen.getByText('(128)')).toBeInTheDocument();
    expect(screen.getByAltText('Wireless Headphones')).toBeInTheDocument();
  });

  it('calls addItem when Add to Cart button is clicked', () => {
    render(<ProductCard product={mockProduct} />);

    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);

    expect(mockAddItem).toHaveBeenCalledWith(mockProduct);
  });

  /*it('displays correct number of stars based on rating', () => {
    render(<ProductCard product={mockProduct} />);

    const stars = screen.getAllByTestId('star-icon');
    expect(stars).toHaveLength(5);
    expect(stars.filter(star => star.classList.contains('filled'))).toHaveLength(4);
  });*/
});
