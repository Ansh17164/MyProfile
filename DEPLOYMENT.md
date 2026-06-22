# Deployment Instructions

## Netlify

1. Create a new site in Netlify.
2. Drag and drop this project folder into Netlify Deploys, or connect a GitHub repository.
3. Set the publish directory to the project root.
4. Replace `https://example.com` in the HTML files, `robots.txt`, and `sitemap.xml` with your Netlify domain or custom domain.
5. Replace the GA4 placeholder `G-XXXXXXXXXX` with your Google Analytics measurement ID.
6. Replace EmailJS placeholders in `js/script.js` with your EmailJS public key, service ID, and template IDs.
7. Replace `assets/ansh-sharma-portfolio.pdf` with your final portfolio PDF.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. Open repository Settings, then Pages.
3. Select the branch and root folder as the publish source.
4. Update canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` with your GitHub Pages URL.
5. Confirm the contact form validation works after deployment.

## EmailJS Setup

Create two EmailJS templates:

- Lead notification template: sends enquiry details to your configured email.
- Portfolio email template: sends the portfolio PDF URL to the user's email.

The static site cannot attach files directly from the browser without a service. Use a hosted PDF URL, EmailJS template variables, or a backend endpoint to send the attachment.
