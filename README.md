# Bart Rosiecki: Portfolio Website

Source for [bartrosiecki.com](https://bartrosiecki.com), my cloud engineering portfolio. It's a static Next.js site hosted on AWS (S3, CloudFront and Route 53).

## What's on the site

Cloud projects with architecture diagrams, experience, certifications, a CV download and a contact form. Each project links to its own repository and write-up.

## Stack

- Next.js and React, exported as a static site (`output: "export"`)
- TypeScript and Tailwind CSS
- Formspree for the contact form
- AWS S3, CloudFront and Route 53 for hosting

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Run `npm run build` to create the static site in `out/`.

## Deployment

Currently manual:

```bash
npm run build
aws s3 sync out/ s3://<bucket-name> --delete
aws cloudfront create-invalidation --distribution-id <id> --paths "/*"
```

A GitHub Actions pipeline using OIDC (no stored AWS keys) is planned.

## What I changed from the template

I rewrote the content and layout of every section, added the certifications and experience sections, the project cards with architecture diagrams and the "open to roles" and "get in touch" badges (second one is also a link to a Formspree free form). I also added dark mode and introduced changes in navigation to make sure it works correctly.

## Credits and licence

Based on the Typefolio template by [Getnextjstemplates](https://getnextjstemplates.com), distributed by [ThemeWagon](https://themewagon.com/themes/Typefolio/) under the MIT licence. See `LICENSE`.

The text, photographs, CV and project write-ups on the site are my own and aren't covered by the MIT licence. Please don't reuse them without asking.