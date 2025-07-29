# customize-self-reg

This project allows you to generate a simple e‑commerce app with customizable pages and API configuration.

## Setup

1. Copy `.env.example` to `.env.local` and adjust the values to match your environment.
2. Install dependencies and start the development server:
   ```bash
   npm install
   npm run dev
   ```

The generated application lives in `customize-self-reg-app/` and supports two product modes: subscription or one-time charge. Pages use the values from environment variables to apply theme colors, logo and thank you message.
