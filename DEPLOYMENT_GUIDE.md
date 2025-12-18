# Step-by-Step Guide: Deploy Your Website to Vercel

## What is Vercel?
Vercel is a platform that makes it super easy to host your website for free. It's perfect for React apps like yours!

---

## Method 1: Deploy Using Vercel Website (Easiest for Beginners) 🌟

### Step 1: Prepare Your Project
✅ Your project is already set up correctly! The `vercel.json` file has been created.

### Step 2: Create a GitHub Account (if you don't have one)
1. Go to [github.com](https://github.com)
2. Click "Sign up" in the top right
3. Create a free account

### Step 3: Upload Your Project to GitHub

#### Option A: Using GitHub Website (Easiest)
1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it: `rohith-group-website` (or any name you like)
4. Make it **Public** (free accounts can use public repos)
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

7. You'll see a page with instructions. Follow these steps in your terminal:
   ```bash
   cd /Users/apple/Desktop/project
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rohith-group-website.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your actual GitHub username)

#### Option B: Using GitHub Desktop (Visual Tool)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in
3. Click **"File"** → **"Add Local Repository"**
4. Select your project folder: `/Users/apple/Desktop/project`
5. Click **"Publish repository"** to upload to GitHub

### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** (top right)
3. Choose **"Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your GitHub account
5. After signing in, click **"Add New..."** → **"Project"**
6. You'll see your GitHub repositories. Find your project (`rohith-group-website`)
7. Click **"Import"** next to your project
8. Vercel will automatically detect it's a Vite project
9. **Don't change any settings** - they're already correct!
10. Click **"Deploy"**

### Step 5: Wait for Deployment
- Vercel will build your website (takes 1-2 minutes)
- You'll see a progress bar
- When it says "Ready", your site is live! 🎉

### Step 6: Access Your Website
- Vercel will give you a URL like: `https://rohith-group-website.vercel.app`
- Click it to see your live website!
- You can share this URL with anyone

---

## Method 2: Deploy Using Vercel CLI (Command Line)

If you prefer using the terminal:

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to sign in.

### Step 3: Deploy
```bash
cd /Users/apple/Desktop/project
vercel
```

### Step 4: Follow the Prompts
- It will ask some questions - just press Enter for defaults
- Your site will deploy automatically!

---

## Important Notes 📝

### Automatic Updates
- Every time you push code to GitHub, Vercel will automatically redeploy your site
- No need to manually deploy again!

### Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (if you have one)

### Environment Variables (If Needed Later)
If you add API keys or secrets later:
1. Go to your project in Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Add your variables there

---

## Troubleshooting 🔧

### Build Fails?
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try running `npm run build` locally first

### Images Not Showing?
- Make sure all images are in the `public` folder
- Check that image paths start with `/` (like `/image.png`)

### Can't Find Your Repository?
- Make sure your GitHub repo is **Public** (or you have Vercel Pro)
- Refresh the Vercel import page

---

## Quick Checklist ✅

Before deploying, make sure:
- [x] `vercel.json` file exists (already created!)
- [x] `package.json` has build script (already has it!)
- [x] Project builds locally (`npm run build` works)
- [ ] Project is on GitHub
- [ ] You have a Vercel account

---

## Need Help?
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

Good luck! Your website will be live in minutes! 🚀

