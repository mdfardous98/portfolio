# 🚀 Portfolio Setup Guide

## Step 1: Add Your Profile Photo

1. **Create a `public` folder** in your project root (same level as `package.json`)
2. **Add your photo** to the `public` folder with the name `profile-photo.jpg`

   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 400x400 pixels or larger (square format works best)
   - Example path: `public/profile-photo.jpg`

3. **If you want to use a different filename**, update line 118 in `components/Hero.tsx`:
   ```typescript
   src = "/your-photo-name.jpg"; // Change this to match your file name
   ```

## Step 2: Add Your Resume

1. **Add your resume PDF** to the `public` folder with the name `resume.pdf`

   - Example path: `public/resume.pdf`

2. **If you want to use a different filename**, update line 10 in `components/Hero.tsx`:

   ```typescript
   link.href = "/your-resume-name.pdf"; // Change this to match your file name
   ```

3. **Customize the download name** (optional) by changing line 11:
   ```typescript
   link.download = "Your_Name_Resume.pdf"; // This is what users will see when downloading
   ```

## Step 3: File Structure Should Look Like This

```
your-portfolio/
├── public/
│   ├── profile-photo.jpg    ← Your photo here
│   └── resume.pdf          ← Your resume here
├── components/
├── app/
├── package.json
└── ...
```

## Step 4: Test Everything

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Open** http://localhost:3000

3. **Check that:**
   - Your photo appears in the hero section
   - The "Download Resume" button downloads your actual resume
   - Everything looks good on mobile and desktop

## 🎨 Optional Customizations

### Change Photo Shape or Size

In `components/Hero.tsx`, line 115, you can modify:

```typescript
className = "w-80 h-80 rounded-full..."; // Change w-80 h-80 for different size
// or change rounded-full to rounded-lg for square corners
```

### Update Social Links

Update your actual social media URLs in `components/Hero.tsx` around lines 75-95:

- GitHub: Already set to `https://github.com/mdfardous98`
- LinkedIn: Update to your actual LinkedIn URL
- Facebook: Already set to your Facebook URL

## 🚨 Common Issues

**Photo not showing?**

- Make sure the file is in the `public` folder
- Check the file name matches exactly (case-sensitive)
- Try refreshing the page

**Resume not downloading?**

- Make sure the PDF file is in the `public` folder
- Check the file name matches exactly
- Make sure it's a PDF file

**Need help?**

- Check the browser console (F12) for any error messages
- Make sure all files are saved
- Restart the development server (`npm run dev`)

---

That's it! Your portfolio is now personalized with your photo and resume. 🎉
