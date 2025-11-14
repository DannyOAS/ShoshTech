# Deployment Guide for shoshtech.ca

This document outlines how to deploy the Next.js static export site to the production server.

## Site Architecture

- **Frontend**: Next.js with static export (`output: "export"` in next.config.js)
- **Web Server**: nginx serving static files
- **Domain**: shoshtech.ca (SSL via Let's Encrypt)
- **Server**: Production server with nginx reverse proxy

## Production Server Setup

The site is deployed as static files served by nginx:

- **Nginx config**: `/etc/nginx/sites-available/shoshtech.ca`
- **Document root**: `/var/www/shoshtech/`
- **SSL**: Let's Encrypt certificates
- **Static files**: Built files from Next.js export

## Deployment Process

### 1. Development & Build

Make your changes in the development codebase at `/opt/ShoshTech`:

```bash
cd /opt/ShoshTech

# Make your changes to components, content, etc.
# Test locally if needed: npm run dev

# Build the static export
npm run build
```

This creates the static files in the `/opt/ShoshTech/out/` directory.

### 2. Commit Changes (Optional but Recommended)

```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "Your deployment message"

# Push to repository (if authentication is set up)
git push origin main
```

### 3. Deploy to Production

Copy the built static files to the nginx document root:

```bash
# Deploy the built files to the web server directory
cp -r /opt/ShoshTech/out/* /var/www/shoshtech/

# Verify the files were copied
ls -la /var/www/shoshtech/assets/

# Test nginx configuration
nginx -t

# Reload nginx to pick up any changes
systemctl reload nginx
```

### 4. Verify Deployment

```bash
# Test site accessibility
curl -s -I https://shoshtech.ca

# Check for specific content updates
grep -r "your-search-term" /var/www/shoshtech/
```

## Example: Logo and Email Update Deployment

Here's the exact process used to update the company logo and contact email:

### Changes Made:
1. **Logo Update**: Added new `Shosh-logo.png` and updated references
   - Updated `app/layout.tsx` favicon references
   - Updated `components/Logo.tsx` to use single logo file
   - Copied logo to `app/icon.jpg` and `app/apple-icon.jpg`

2. **Contact Email Update**: Changed to `daniel.sarpong@shoshtech.ca`
   - Updated `components/ContactSection.tsx`
   - Updated `components/ContactForm.tsx`

### Deployment Commands:
```bash
cd /opt/ShoshTech

# Build the static export
npm run build

# Deploy to production
cp -r /opt/ShoshTech/out/* /var/www/shoshtech/

# Verify deployment
ls -la /var/www/shoshtech/assets/
grep -r "daniel.sarpong@shoshtech.ca" /var/www/shoshtech/ | head -2

# Reload nginx
nginx -t
systemctl reload nginx

# Test live site
curl -s -I https://shoshtech.ca
```

## File Structure

```
/opt/ShoshTech/                 # Development/source code
├── components/                 # React components
├── app/                       # Next.js app directory
├── public/assets/             # Static assets (images, etc.)
├── out/                       # Built static files (generated)
└── package.json               # Dependencies and scripts

/var/www/shoshtech/            # Production static files
├── index.html                 # Main page
├── assets/                    # Images and static assets
├── _next/                     # Next.js optimized assets
└── blog/                      # Blog pages
```

## nginx Configuration

The nginx configuration at `/etc/nginx/sites-available/shoshtech.ca`:

```nginx
server {
    server_name shoshtech.ca www.shoshtech.ca;
    root /var/www/shoshtech;
    index index.html;

    # Serve the static export directly
    location / {
        try_files $uri $uri/ /index.html;
    }

    location /blog/ {
        try_files $uri $uri/ /blog/index.html;
    }

    location = /blog {
        return 301 /blog/;
    }

    # SSL configuration managed by Certbot
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/shoshtech.ca/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/shoshtech.ca/privkey.pem;
}
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`
- Clear Next.js cache: `rm -rf .next`

### Deployment Issues
- Verify file permissions: `ls -la /var/www/shoshtech/`
- Check nginx logs: `tail -f /var/log/nginx/error.log`
- Test nginx config: `nginx -t`

### Site Not Updating
- Clear browser cache
- Check if files were actually copied: `ls -la /var/www/shoshtech/`
- Verify nginx reload: `systemctl status nginx`

## Quick Deploy Script

You can create a simple deployment script:

```bash
#!/bin/bash
# deploy.sh

cd /opt/ShoshTech
echo "Building site..."
npm run build

echo "Deploying to production..."
cp -r out/* /var/www/shoshtech/

echo "Reloading nginx..."
nginx -t && systemctl reload nginx

echo "Deployment complete!"
echo "Site: https://shoshtech.ca"
```

Make it executable: `chmod +x deploy.sh`

## Notes

- The site uses Next.js static export, not a live Node.js server
- No database or server-side functionality - purely static files
- SSL certificates are managed by Let's Encrypt/Certbot
- The development code at `/opt/ShoshTech` is separate from the deployed files at `/var/www/shoshtech`