'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import config from '../../config';

export default function Checkout() {
  const params = useSearchParams();
  const product = params.get('product');

  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-xl">Checkout for {product}</h1>
      {/* Placeholder for embedded checkout form */}
      <div className="border p-4">Embedded checkout goes here</div>
      <Link href="/thank-you" className="px-4 py-2 text-white" style={{ backgroundColor: config.theme.primaryColor }}>
        Complete Purchase
      </Link>
    </main>
  );
}
