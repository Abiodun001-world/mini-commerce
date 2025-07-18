'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get('orderId') || 'Unknown';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center py-12">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 mb-4" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You for Your Order!
        </h1>
        
        <p className="text-gray-600 mb-2">
          Your order has been successfully placed.
        </p>
        
        <p className="text-lg font-semibold text-blue-600 mb-8">
          Order ID: {orderId}
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            You will receive an email confirmation shortly with your order details.
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}