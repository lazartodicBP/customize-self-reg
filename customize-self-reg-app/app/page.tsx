import Link from 'next/link';
import config from '../config';

const subscriptionProducts = [
  { id: 'basic', name: 'Basic', price: 10 },
  { id: 'silver', name: 'Silver', price: 20 },
  { id: 'gold', name: 'Gold', price: 30 },
];

export default function Page() {
  const products = config.supportedProductType === 'subscription'
    ? subscriptionProducts
    : [{ id: 'one_time', name: 'Standard Product', price: 100 }];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${config.theme.backgroundImage})` }}>
      {config.theme.logoUrl && (
        <img src={config.theme.logoUrl} alt="logo" className="h-24 mb-8" />
      )}
      <div className="space-y-4">
        {products.map(p => (
          <Link key={p.id} href={`/checkout?product=${p.id}`} className="block px-4 py-2 rounded border text-white" style={{ backgroundColor: config.theme.primaryColor }}>
            {p.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
