# Freaky Quiz

A Nuxt 4 application for collecting quiz responses about artificial intelligence and emotions.

## Prerequisites

- Node.js 18+
- pnpm (preferred) or npm

## Setup

1. Install dependencies:
   ```fish
   cd freaky-quiz
   pnpm install
   ```
2. Create an `.env` file in the project root and provide the following Cloudflare Turnstile credentials:
   ```env
   TURNSTILE_SITE_KEY=your_public_site_key
   TURNSTILE_SECRET_KEY=your_private_secret_key
   ```
   You can generate these keys from the [Cloudflare Turnstile dashboard](https://dash.cloudflare.com/).
3. Run the development server:
   ```fish
   pnpm dev
   ```

## Cloudflare Turnstile Integration

- The quiz page now requires a valid Turnstile token before submissions are accepted.
- The front-end widget renders automatically once the `TURNSTILE_SITE_KEY` is supplied.
- The server verifies each submission with Cloudflare using the `TURNSTILE_SECRET_KEY`; invalid or missing tokens are rejected with a 400 response.

## Data Storage

Quiz responses are saved under `.data/kv/quiz-responses-YYYY-MM.json`. Duplicate submissions from the same session are automatically filtered out.

## Troubleshooting

- **Widget not loading**: Ensure the Turnstile script is reachable and the site key is correct.
- **Submissions rejected**: Check the server logs for the reported Turnstile error codes and confirm the secret key is valid.
