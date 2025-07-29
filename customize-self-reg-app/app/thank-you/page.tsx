import config from '../../config';

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${config.theme.backgroundImage})` }}>
      <h1 className="text-2xl text-center" style={{ color: config.theme.primaryColor }}>
        {config.theme.thankYouMessage}
      </h1>
    </main>
  );
}
