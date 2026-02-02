# Image Optimization Guide - SEO Best Practices

> **Last Updated:** 2026-02-02  
> **Purpose:** Track image formats and conversion commands for optimal SEO performance

---

## Current Image Structure

### Logo Images
**Location:** `/public/pics/logo/`

| Filename | Format | Size | Dimensions | Status |
|----------|--------|------|------------|--------|
| `et-logo.svg` | SVG | Target: <10KB | Scalable | **TO CREATE** |
| `et-logo.webp` | WebP | 12KB | 500x500 | **CREATED** |
| `et-logo.png` | PNG | 48KB | 500x500 | Exists (fallback) |
| `et-logo-192.png` | PNG | 12KB | 192x192 | **CREATED** |
| `et-logo-192.webp` | WebP | 4KB | 192x192 | **CREATED** |
| `et-logo-512.png` | PNG | 40KB | 512x512 | **CREATED** |
| `et-logo-512.webp` | WebP | 12KB | 512x512 | **CREATED** |

### Profile Images
**Location:** `/public/pics/profil/`

| Filename | Format | Size | Dimensions | Status |
|----------|--------|------|------------|--------|
| `emery-tossavi.avif` | AVIF | 56KB | 1200x1280 | **CREATED** |
| `emery-tossavi.webp` | WebP | 92KB | 1200x1280 | **CREATED** |
| `emery-tossavi.jpg` | JPEG | 112KB | 1200x1280 | Exists (fallback) |

### Open Graph / Social Media Images
**Location:** `/public/pics/og/`

| Filename | Format | Size | Dimensions | Status |
|----------|--------|------|------------|--------|
| `og-image.webp` | WebP | 60KB | 1200x630 | **CREATED** |
| `og-image.jpg` | JPEG | 36KB | 1200x630 | **CREATED** |

---

## Conversion Commands

### Quick Start (Automated)
```bash
# Run the automated conversion script
./scripts/optimize-images.sh
```

This script will automatically:
- Check all prerequisites
- Convert logo to WebP and multiple sizes
- Convert profile image to WebP and AVIF
- Create optimized OG image (1200x630)
- Generate summary report

### Prerequisites (Manual Installation)
```bash
# Install required tools
sudo apt-get install webp imagemagick
# For AVIF support
sudo apt-get install libavif-bin
```

### Manual Conversion (Alternative)

Use these commands if you prefer manual control or need to re-convert specific images:

#### Logo Conversions

#### 1. SVG (if you have vector source)
```bash
# If you have AI/Sketch/Figma file, export as SVG
# Or convert existing PNG (not ideal, but possible)
# Manual: Use online tool like vectormagic.com or Inkscape
```

#### 2. WebP Format
```bash
cd public/pics/logo/
cwebp -q 90 -resize 500 500 et-logo.png -o et-logo.webp
```

#### 3. Multiple Sizes for PWA/iOS
```bash
cd public/pics/logo/

# 192x192 (Android)
convert et-logo.png -resize 192x192 et-logo-192.png
cwebp -q 90 et-logo-192.png -o et-logo-192.webp

# 512x512 (PWA)
convert et-logo.png -resize 512x512 et-logo-512.png
cwebp -q 90 et-logo-512.png -o et-logo-512.webp
```

### Profile Image Conversions

#### 1. WebP Format
```bash
cd public/pics/profil/
cwebp -q 85 emery-tossavi.jpg -o emery-tossavi.webp
```

#### 2. AVIF Format (Next-Gen)
```bash
cd public/pics/profil/
avifenc -s 6 -j 8 emery-tossavi.jpg emery-tossavi.avif
```

### Open Graph Image (1200x630)

#### 1. Create Cropped Version
```bash
cd public/pics/profil/
mkdir -p ../og/

# Crop to 1200x630 (recommended OG ratio 1.91:1)
convert emery-tossavi.jpg \
  -resize 1200x630^ \
  -gravity center \
  -extent 1200x630 \
  ../og/og-image.jpg
```

#### 2. Convert to WebP
```bash
cd public/pics/og/
cwebp -q 90 og-image.jpg -o og-image.webp
```

---

## Verification Checklist

### After Conversion (Automated via Script)
```bash
# Run the optimization script
./scripts/optimize-images.sh

# Verify output
ls -lh public/pics/**/*.{webp,avif}
```

### Testing
- [ ] All images created and in correct directories **DONE**
- [ ] File sizes meet targets (see tables above) **DONE**
- [ ] Dimensions are correct **DONE**
- [ ] Visual quality is acceptable
- [ ] Build project: `npm run build` **DONE**
- [ ] Check `dist/pics/` for all images **DONE**
- [ ] Test favicon in browser
- [ ] Validate OG tags: https://www.opengraph.xyz/
- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Lighthouse audit score >95

### SEO Testing Tools
```bash
# Local test with Lighthouse
npx lighthouse https://emery-tossavi.dev --view

# Check image sizes
ls -lh public/pics/**/*.{png,jpg,webp,avif,svg}
```

---

## Expected Performance Gains

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Logo Size | 48KB (PNG) | 12KB (WebP) | **-75%** |
| Profile Size | 112KB (JPG) | 56KB (AVIF) | **-50%** |
| OG Image Size | - | 60KB (WebP) | **Optimal** |
| **Total Savings** | 160KB | 128KB | **-20%** |
| LCP (Largest Contentful Paint) | ~2.5s | ~1.5s | **-40%** |
| Lighthouse Performance | 75-85 | 95+ | **+10-20pts** |

---

## Maintenance

### When to Update
- Logo redesign
- New profile photo
- Branding changes
- New image format support (e.g., JPEG XL)

### Update Process
1. Replace source images in `/public/pics/`
2. Run conversion commands (see above)
3. Update this document with new sizes
4. Build and test
5. Deploy

---

## Resources

- [WebP Guide](https://developers.google.com/speed/webp)
- [AVIF Format](https://jakearchibald.com/2020/avif-has-landed/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)
- [Open Graph Image Guide](https://www.opengraph.xyz/)
- [Lighthouse Performance](https://developer.chrome.com/docs/lighthouse/performance/)

---

**Note:** Always keep original high-quality images as masters for future conversions.
