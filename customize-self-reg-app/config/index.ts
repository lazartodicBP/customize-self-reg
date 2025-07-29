const config = {
  supportedProductType: process.env.NEXT_PUBLIC_PRODUCT_TYPE || 'subscription',
  theme: {
    backgroundImage: process.env.NEXT_PUBLIC_BG_IMAGE || '',
    primaryColor: process.env.NEXT_PUBLIC_COLOR_PRIMARY || '#1e3a8a',
    logoUrl: process.env.NEXT_PUBLIC_LOGO_URL || '',
    thankYouMessage: process.env.NEXT_PUBLIC_THANKYOU_MESSAGE || 'Thank you!',
  },
  hppUrl: process.env.NEXT_PUBLIC_HPP_URL,
  apiUrl: process.env.API_URL,
  hppAuthUrl: process.env.HPP_AUTH_URL,
  userLogin: process.env.USER_LOGIN,
  userPass: process.env.USER_PASS,
  bpKey: process.env.BP_KEY,
  clientId: process.env.CLIENT_ID,
  bpEnvId: process.env.NEXT_PUBLIC_BP_ENV_ID,
};

export default config;
