# Step-by-Step Guide: How to Update Your Live Website

## Overview
When you make changes to your website, Vercel **automatically** redeploys it! Here's how the process works:

1. Make changes locally (on your computer)
2. Push changes to GitHub
3. Vercel automatically detects the changes
4. Vercel rebuilds and redeploys your site
5. Your changes go live in 1-2 minutes!

---

## Method 1: Using Terminal (Recommended) 🖥️

### Step 1: Make Your Changes
1. Open your project in your code editor (VS Code, Cursor, etc.)
2. Edit any files you want to change:
   - `src/components/` - Change components
   - `src/App.tsx` - Change main app
   - `public/` - Add/change images
   - `src/index.css` - Change styles
   - Any other files

### Step 2: Test Locally (Optional but Recommended)
```bash
cd /Users/apple/Desktop/project
npm run dev
```
- Open `http://localhost:5173` in your browser
- Check that your changes look good
- Press `Ctrl+C` to stop the dev server when done

### Step 3: Save Your Changes
- All files are automatically saved when you edit them
- Or press `Cmd+S` (Mac) or `Ctrl+S` (Windows) to save manually

### Step 4: Commit Your Changes to Git
Open Terminal and run these commands:

```bash
# 1. Navigate to your project
cd /Users/apple/Desktop/project

# 2. Check what files you changed
git status

# 3. Add all your changes
git add .

# 4. Create a commit with a message describing your changes
git commit -m "Updated hero section text"

# 5. Push to GitHub
git push
```

**Example commit messages:**
- `"Updated contact information"`
- `"Changed product descriptions"`
- `"Added new images"`
- `"Fixed navigation menu"`
- `"Updated company logo"`

### Step 5: Wait for Automatic Deployment
1. Go to your Vercel dashboard: [vercel.com](https://vercel.com)
2. Click on your project: `rohith-group-website`
3. Go to the **"Deployments"** tab
4. You'll see a new deployment starting automatically!
5. Wait 1-2 minutes for it to finish
6. When it says "Ready", your changes are live! 🎉

---

## Method 2: Using GitHub Website (Alternative) 🌐

If you prefer not to use Terminal:

### Step 1: Make Changes Locally
- Edit files in your code editor
- Save your changes

### Step 2: Upload to GitHub via Website
1. Go to [github.com](https://github.com)
2. Navigate to your repository: `PenPandaworks/rohith-group-website`
3. Click on the file you want to change
4. Click the **pencil icon** (Edit)
5. Make your changes
6. Scroll down and click **"Commit changes"**
7. Add a commit message
8. Click **"Commit changes"**

### Step 3: Vercel Auto-Deploys
- Vercel automatically detects the GitHub update
- It will redeploy your site in 1-2 minutes

---

## Common Update Scenarios

### Scenario 1: Change Text Content
**Example:** Update company description

1. Open `src/components/Heritage.tsx`
2. Find the text you want to change
3. Edit it
4. Save the file
5. Follow Step 4-5 from Method 1 above

### Scenario 2: Change Images
**Example:** Replace a product image

1. Add new image to `public/` folder
2. Update the image path in your component:
   ```tsx
   // Change from:
   image: '/old-image.png'
   // To:
   image: '/new-image.png'
   ```
3. Save and commit (Step 4-5 from Method 1)

### Scenario 3: Change Colors/Styles
**Example:** Change brand color

1. Open `tailwind.config.js`
2. Change the brand color:
   ```js
   brand: '#EFBF04', // Change this hex code
   ```
3. Or edit `src/index.css` for custom styles
4. Save and commit

### Scenario 4: Add New Section
**Example:** Add a new "About Us" section

1. Create new component: `src/components/About.tsx`
2. Add it to `src/App.tsx`:
   ```tsx
   import About from './components/About';
   // ... in your JSX:
   <About />
   ```
3. Save and commit

### Scenario 5: Update Contact Information
**Example:** Change phone number or email

1. Open `src/components/Contact.tsx`
2. Find the contact info section
3. Update the phone/email
4. Save and commit

---

## Important Notes 📝

### ⚠️ Always Test First
- Run `npm run dev` locally before pushing
- Make sure everything works correctly
- Check for errors in the terminal

### ⚠️ Commit Messages Matter
- Write clear commit messages
- Examples:
  - ✅ Good: `"Updated hero section with new tagline"`
  - ❌ Bad: `"changes"` or `"update"`

### ⚠️ Don't Break the Build
- Make sure `npm run build` works before pushing
- Check for TypeScript errors
- Fix any linting errors

### ⚠️ Deployment Time
- Small changes: 1-2 minutes
- Large changes: 2-5 minutes
- You can watch progress in Vercel dashboard

---

## Troubleshooting 🔧

### Problem: Changes Not Showing Up
**Solution:**
1. Check Vercel dashboard - is deployment successful?
2. Clear your browser cache (Cmd+Shift+R or Ctrl+Shift+R)
3. Wait a few more minutes for CDN to update

### Problem: Build Failed
**Solution:**
1. Check the error in Vercel dashboard
2. Run `npm run build` locally to see the error
3. Fix the error
4. Commit and push again

### Problem: Git Push Failed
**Solution:**
```bash
# Pull latest changes first
git pull

# Then push again
git push
```

### Problem: Forgot to Commit
**Solution:**
```bash
git add .
git commit -m "Your message"
git push
```

---

## Quick Reference Card 📋

### Daily Workflow:
```
1. Make changes → 2. Test locally → 3. Commit → 4. Push → 5. Wait 2 min → 6. Live!
```

### Essential Commands:
```bash
# Start dev server
npm run dev

# Test build
npm run build

# Check git status
git status

# Add all changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub
git push
```

---

## Pro Tips 💡

1. **Use Branches for Big Changes**
   - Create a branch: `git checkout -b new-feature`
   - Make changes
   - Test thoroughly
   - Merge to main when ready

2. **Preview Deployments**
   - Vercel creates preview URLs for branches
   - Test changes before merging to main

3. **Monitor Deployments**
   - Check Vercel dashboard regularly
   - Set up email notifications for failed builds

4. **Keep Backups**
   - GitHub is your backup
   - Always commit before making big changes

---

## Need Help?

- **Git Issues:** Check [Git Documentation](https://git-scm.com/doc)
- **Vercel Issues:** Check [Vercel Docs](https://vercel.com/docs)
- **React Issues:** Check [React Docs](https://react.dev)

---

**Remember:** Every time you push to GitHub, Vercel automatically deploys your changes. It's that simple! 🚀

