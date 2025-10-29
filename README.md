# Uncap Finance Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, and deployed using Cloudflare Pages with Wrangler.

## Installation

```bash
pnpm install
```

## Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory optimized for production deployment.

## Preview

### Local Preview (Development Build)

```bash
pnpm preview
```

This builds the site with local-friendly settings (`baseUrl: "/"`) and serves it using Wrangler for local testing.

### Production Preview

```bash
pnpm run preview:prod
```

This builds the site with production settings (`baseUrl: "/resources"`) and serves it locally using Wrangler to test the exact production build.

## Deployment

Deploy to Cloudflare Pages:

```bash
pnpm deploy
```

This command builds the website for production and deploys it to Cloudflare Pages using Wrangler.

## Other Commands

### Development Tools

```bash
# Clear Docusaurus cache
pnpm clear

# Type checking
pnpm typecheck

# Serve built files locally
pnpm serve
```

### Content Management

```bash
# Generate translation files
pnpm run write-translations

# Generate heading IDs for markdown files
pnpm run write-heading-ids
```

### Customization

```bash
# Swizzle Docusaurus components for customization
pnpm swizzle
```

## Project Structure

- `/docs` - Documentation content
- `/blog` - Blog posts
- `/src` - Custom React components and pages
- `/static` - Static assets (images, files)
- `docusaurus.config.ts` - Site configuration
- `sidebars.ts` - Documentation sidebar configuration

## Environment Configuration

The site uses different base URLs for different environments:

- **Development** (`pnpm start`): `baseUrl: "/"`
- **Local Preview** (`pnpm preview`): `baseUrl: "/"`
- **Production** (`pnpm deploy`): `baseUrl: "/resources"`

This ensures the site works correctly both locally and when deployed to `https://uncap.finance/resources/`.
