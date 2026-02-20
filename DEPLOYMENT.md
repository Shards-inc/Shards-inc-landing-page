# Deployment Guide - Shards Inc Landing Page

This guide covers deploying the Shards Inc landing page to both Vercel and GitHub Pages.

## Quick Start

The project is production-ready and can be deployed with zero configuration to either platform.

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is the optimal choice for this project—it provides automatic deployments, preview URLs, and edge caching.

### Method A: Using Vercel Dashboard

1. **Create a Vercel account** at https://vercel.com/signup
2. **Import the project**:
   - Go to https://vercel.com/new
   - Select "Import Git Repository"
   - Paste the GitHub repository URL
   - Click "Import"
3. **Configure**:
   - Framework: Auto-detected (Vite)
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Node Version: 22.x
4. **Deploy**: Click "Deploy"

Vercel automatically deploys on every push to the main branch.

### Method B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd /path/to/shards-landing-page
vercel deploy --prod
```

### Environment Variables

No environment variables are required. Manus-provided analytics variables are automatically injected.

### Custom Domain

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain (e.g., `shards.inc`)
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

---

## Option 2: Deploy to GitHub Pages

GitHub Pages provides free hosting directly from your repository.

### Prerequisites

- GitHub account
- Repository pushed to GitHub

### Method A: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys on every push to `main`.

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to Repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Click "Save"

3. **Configure custom domain** (optional):
   - In Pages settings, add your custom domain
   - Update DNS records to point to GitHub Pages
   - GitHub automatically provisions SSL

The site will be available at:
- `https://username.github.io/shards-landing-page` (project site)
- Or your custom domain if configured

### Method B: Manual Deployment

```bash
# Build the project
pnpm build

# Deploy dist/public to gh-pages branch
git subtree push --prefix dist/public origin gh-pages
```

Then enable GitHub Pages with source set to `gh-pages` branch.

---

## Deployment Comparison

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| **Setup Time** | ~2 minutes | ~1 minute |
| **Cost** | Free tier available | Always free |
| **Custom Domain** | Yes | Yes |
| **SSL Certificate** | Automatic | Automatic |
| **Preview URLs** | Yes (pull requests) | No |
| **Edge Caching** | Yes | Limited |
| **Build Speed** | Fast (~30s) | Fast (~30s) |
| **Recommended** | ✅ Yes | ✅ Yes |

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads without errors
- [ ] All links work (GitHub, documentation, etc.)
- [ ] Responsive design works on mobile
- [ ] Hero images load correctly
- [ ] Animations are smooth
- [ ] Navigation scrolls to sections
- [ ] Footer links are functional
- [ ] Analytics tracking is active

---

## Troubleshooting

### Build Fails

**Problem**: Build fails with "Module not found"

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Images Not Loading

**Problem**: Background images appear broken

**Solution**: Images use CDN URLs. Verify:
- Internet connection is active
- CDN URLs in `Home.tsx` are correct
- Browser console shows no 404 errors

### Deployment Stuck

**Problem**: Deployment hangs or times out

**Solution**:
- Check GitHub Actions logs
- Verify Node.js version is 22+
- Ensure `pnpm-lock.yaml` is committed
- Try manual deployment

---

## Monitoring & Analytics

The site includes Umami analytics tracking. View traffic at:
- Dashboard provided by Manus
- Real-time page views and user interactions
- No additional setup required

---

## Updating After Deployment

### Update Content

1. Edit files locally
2. Commit and push to main branch
3. Deployment automatically triggers
4. Site updates within 1-2 minutes

### Update Design

1. Modify CSS in `client/src/index.css`
2. Update components in `client/src/components/`
3. Commit and push
4. Automatic deployment

### Update Dependencies

```bash
# Update packages
pnpm update

# Test locally
pnpm dev

# Commit and push
git add pnpm-lock.yaml
git commit -m "Update dependencies"
git push origin main
```

---

## Performance Optimization

The site is already optimized, but you can further improve:

### Enable Compression

Both Vercel and GitHub Pages automatically compress responses.

### Image Optimization

Images are already served via CDN with WebP format. No additional optimization needed.

### Caching

- Vercel: Automatic edge caching
- GitHub Pages: Browser caching via headers

---

## Security

- **HTTPS**: Automatic on both platforms
- **Headers**: Configured in Vercel/GitHub
- **Dependencies**: Regular updates via `pnpm update`
- **Secrets**: No sensitive data in repository

---

## Support

For deployment issues:

1. Check platform documentation:
   - Vercel: https://vercel.com/docs
   - GitHub Pages: https://docs.github.com/pages

2. Review build logs in platform dashboard

3. Contact Shards team: shards-inc@engineer.com

---

**Happy deploying! 🚀**
