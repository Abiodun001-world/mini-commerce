# Mini-Commerce

A simple e-commerce prototype built with Next.js 14, React Query, Zustand, and Tailwind CSS.

## Features

- **Product Catalog**: Browse 8 products with images, names, and prices
- **Product Details**: Individual product pages with full information
- **Shopping Cart**: Add, remove, and modify quantities with persistence
- **Checkout Flow**: Complete order process with confirmation
- **Responsive Design**: Mobile-first approach

## Tech Stack

- **Next.js 14** with App Router
- **React Query** for data fetching
- **Zustand** for cart state management
- **Tailwind CSS** for styling
- **TypeScript** in strict mode

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

4. Live demo available at [Mini-Commerce Demo](https://mini-commerce-mu.vercel.app/)

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── cart/              # Cart page
│   ├── checkout/          # Checkout flow
│   ├── product/[slug]/    # Dynamic product pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── data/                  # Product data
├── hooks/                 # Custom hooks
├── store/                 # Zustand stores
└── types/                 # TypeScript types
```

## Key Features

### State Management
- Cart state managed with Zustand
- Persistent storage using localStorage
- Automatic cart total calculations

### Data Fetching
- React Query for product data
- Loading and error states
- Automatic caching

### Responsive Design
- Mobile-first Tailwind CSS
- Clean, modern interface
- Accessible components

## Testing

Run tests with:
```bash
npm test
```

## Build

Build for production:
```bash
npm run build
```
