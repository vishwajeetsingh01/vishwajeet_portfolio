const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const projectRoot = path.resolve(__dirname, '..');
    const srcAssets = path.join(projectRoot, 'src', 'assets');
    const publicDir = path.join(projectRoot, 'public');
    if (!fs.existsSync(srcAssets)) fs.mkdirSync(srcAssets, { recursive: true });

    const inputJpg = path.join(srcAssets, 'profile.jpg');
    if (!fs.existsSync(inputJpg)) {
      console.error('source profile.jpg not found at', inputJpg);
      process.exit(1);
    }

    console.log('Generating profile.avif and profile.webp (optimized)...');
    await sharp(inputJpg)
      .resize(320)
      .avif({ quality: 50 })
      .toFile(path.join(srcAssets, 'profile.avif'));

    await sharp(inputJpg)
      .resize(320)
      .webp({ quality: 75 })
      .toFile(path.join(srcAssets, 'profile.webp'));

    await sharp(inputJpg)
      .resize(160)
      .jpeg({ quality: 75 })
      .toFile(path.join(srcAssets, 'profile-160.jpg'));

    await sharp(inputJpg)
      .resize(80)
      .jpeg({ quality: 72 })
      .toFile(path.join(srcAssets, 'profile-80.jpg'));

    // Create favicon 32px png from svg if present
    const faviconSvg = path.join(publicDir, 'favicon.svg');
    if (fs.existsSync(faviconSvg)) {
      console.log('Generating public/favicon-32.png from favicon.svg...');
      await sharp(faviconSvg).resize(32, 32).png({ quality: 90 }).toFile(path.join(publicDir, 'favicon-32.png'));
    } else {
      console.log('favicon.svg not found; skipping favicon generation.');
    }

    console.log('Image optimization completed.');
  } catch (err) {
    console.error('Error during image optimization', err);
    process.exit(1);
  }
})();
