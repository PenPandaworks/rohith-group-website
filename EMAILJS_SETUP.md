# EmailJS Setup Guide - Make Contact Form Send Emails

## Step 1: Install the Package

Run this command in your terminal:

```bash
cd /Users/apple/Desktop/project
npm install
```

This will install the `@emailjs/browser` package that was added to your `package.json`.

---

## Step 2: Create EmailJS Account (Free)

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click **"Sign Up"** (top right)
3. Create a free account (you can use Google/GitHub to sign up quickly)
4. Verify your email address

---

## Step 3: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Follow the setup instructions for your email provider
5. **Copy the Service ID** (you'll need this later)

---

## Step 4: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Choose a template or start from scratch
4. Set up your template:

   **Template Name:** `contact_form` (or any name you like)

   **Subject:** `New Contact Form Submission from {{from_name}}`

   **Content:**
   ```
   You have received a new message from your website contact form.

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}

   ---
   This email was sent from your website contact form.
   ```

5. **Save the template**
6. **Copy the Template ID** (you'll need this later)

---

## Step 5: Get Your Public Key

1. Go to **"Account"** → **"General"** in the left sidebar
2. Find **"Public Key"** section
3. **Copy your Public Key** (you'll need this later)

---

## Step 6: Update Your Contact Component

1. Open `src/components/Contact.tsx`
2. Find these lines (around line 25-27):
   ```tsx
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

3. Replace them with your actual values:
   ```tsx
   const serviceId = 'service_abc123'; // Your Service ID from Step 3
   const templateId = 'template_xyz789'; // Your Template ID from Step 4
   const publicKey = 'your_public_key_here'; // Your Public Key from Step 5
   ```

4. **Update the recipient email** (around line 30):
   ```tsx
   to_email: 'info@rohitgroup.com', // Change this to YOUR email address
   ```

5. Save the file

---

## Step 7: Test It!

1. Run your dev server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:5173`
3. Navigate to the Contact section
4. Fill out the form and click "Send Message"
5. Check your email inbox - you should receive the message!

---

## Step 8: Deploy to Production

Once it works locally:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Added email functionality to contact form"
   git push
   ```

2. Vercel will automatically deploy
3. Test on your live website: `https://rohitgroup.in`

---

## Troubleshooting

### Email Not Sending?

1. **Check your EmailJS credentials:**
   - Make sure Service ID, Template ID, and Public Key are correct
   - No extra spaces or quotes

2. **Check browser console:**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for any error messages

3. **Check EmailJS dashboard:**
   - Go to "Logs" in EmailJS dashboard
   - See if there are any errors

4. **Verify email service:**
   - Make sure your email service is connected correctly
   - Check if you need to enable "Less secure app access" for Gmail

### Free Tier Limits

- EmailJS free tier: **200 emails per month**
- Perfect for small websites
- Upgrade to paid plan if you need more

---

## Security Note

The Public Key is safe to use in frontend code. It's designed to be public. However, for production, consider:
- Setting up rate limiting
- Adding a CAPTCHA to prevent spam
- Using environment variables for sensitive data

---

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- EmailJS Support: Check their help center

---

**That's it! Your contact form will now send emails directly to your inbox!** 🎉

