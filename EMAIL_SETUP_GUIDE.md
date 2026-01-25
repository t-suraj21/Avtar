# Email Setup Guide for Contact Form

Your contact form is now ready to send emails to **avtarvison@gmail.com**! Follow these steps to complete the setup:

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"** (recommended) or any other email provider
4. Click **"Connect Account"**
5. Sign in with your **avtarvison@gmail.com** account
6. Copy the **Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. **IMPORTANT:** Delete all default content and paste this HTML template:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #555;">Full Name:</strong>
      <p style="margin: 5px 0; color: #333;">{{from_name}}</p>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #555;">Email Address:</strong>
      <p style="margin: 5px 0; color: #333;">{{from_email}}</p>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #555;">Phone Number:</strong>
      <p style="margin: 5px 0; color: #333;">{{phone}}</p>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #555;">Service Interested In:</strong>
      <p style="margin: 5px 0; color: #333;">{{service}}</p>
    </div>
    
    <div style="margin-bottom: 15px;">
      <strong style="color: #555;">Message:</strong>
      <p style="margin: 5px 0; color: #333; white-space: pre-wrap;">{{message}}</p>
    </div>
    
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
    
    <p style="color: #888; font-size: 12px; margin: 0;">
      This message was sent from your Avtar website contact form.<br>
      Reply directly to this email to respond to the customer.
    </p>
  </div>
</div>
```

4. **Configure Template Settings** (CRITICAL):
   - **Subject**: `New Contact Form - {{from_name}}`
   - **To Email**: `avtarvison@gmail.com`
   - **From Name**: `Avtar Contact Form`
   - **From Email**: Use your verified EmailJS sender email
   - **Reply To**: `{{from_email}}`
   - **BCC**: Leave empty
   
5. Click **"Test"** to send a test email, then **"Save"** and copy the **Template ID**

### Step 4: Get Public Key

1. Go to **"Account"** → **"General"** in EmailJS dashboard
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)
3. Copy it

### Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Save the file

### Step 6: Restart Development Server

```bash
# Stop the current server (Ctrl + C)
# Then restart:
npm run dev
```

## ✅ Testing

1. Go to `http://localhost:5175/contact`
2. Fill out the contact form
3. Click **"Send Message"**
4. Check **avtarvison@gmail.com** inbox
5. You should receive the contact form submission!

## 🎨 Features Included

✅ Beautiful animated contact form with Framer Motion
✅ Email validation and required fields
✅ Loading spinner while sending
✅ Success/error messages
✅ Sends directly to avtarvison@gmail.com
✅ Professional email template
✅ Phone number field (optional)
✅ Service selection dropdown
✅ Responsive design
✅ Contact information cards with animations

## 📧 Email Template Variables

The following variables are automatically sent in each email:

- `from_name` - Contact's full name
- `from_email` - Contact's email address
- `phone` - Contact's phone number (if provided)
- `service` - Selected service
- `message` - The message content
- `to_email` - Your email (avtarvison@gmail.com)

## 🔒 Security Notes

- The `.env` file is gitignored by default (safe)
- EmailJS public key is safe to use in frontend
- All emails are sent through EmailJS servers
- No backend server required!

## 🆓 EmailJS Free Plan

- **200 emails/month** (upgrade if you need more)
- Unlimited email services
- Unlimited templates
- Free forever

## 🛠️ Troubleshooting

### "Failed to send email" error:
- Check if all environment variables are set correctly
- Make sure you restarted the dev server after updating `.env`
- Verify your EmailJS account is activated
- Check EmailJS dashboard for any service issues

### Not receiving emails:
- Check spam folder in avtarvison@gmail.com
- Verify template has correct `to_email`
- Check EmailJS dashboard → Email Log for delivery status

### Environment variables not working:
- File must be named exactly `.env` (not `.env.local` or `.env.txt`)
- Variables must start with `VITE_` prefix
- Restart dev server after changes
- Make sure there are no spaces around `=` sign

## 📞 Need Help?

If you encounter any issues:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Verify all steps above are completed
3. Check browser console for error messages

---

**Ready to go! Your contact form will now send all messages directly to avtarvison@gmail.com** 🎉
