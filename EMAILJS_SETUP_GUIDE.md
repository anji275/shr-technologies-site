# EmailJS Configuration Guide for SHR Technologies Website

## Overview
This document provides step-by-step instructions to configure EmailJS for the contact form to send emails to anji275@gmail.com.

## Prerequisites
- EmailJS package is already installed (`npm install emailjs-com`)
- An EmailJS account (free tier available at https://www.emailjs.com)

## Step 1: Create an EmailJS Account
1. Visit https://www.emailjs.com
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Your Email Service
1. Go to Dashboard → Email Services
2. Click "Add New Service"
3. Select your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. Copy your **Service ID** (looks like: service_XXXXXXXXX)

## Step 3: Create an Email Template
1. Go to Dashboard → Email Templates
2. Click "Create New Template"
3. Use these template variables for your form:
   - {{from_name}} - User's full name
   - {{from_email}} - User's email
   - {{company}} - Company name
   - {{topic}} - Topic of interest
   - {{message}} - Project details/message

4. Example template content:
```
New Inquiry from {{from_name}}

Company: {{company}}
Email: {{from_email}}
Topic: {{topic}}

Message:
{{message}}

---
Please respond to: {{from_email}}
```

5. Copy your **Template ID** (looks like: template_XXXXXXXXX)

## Step 4: Get Your Public Key
1. Go to Dashboard → Account
2. Copy your **Public Key** (starts with numbers)

## Step 5: Update Contact.jsx
In `src/components/Contact.jsx`, replace the following placeholders:

```javascript
// Line ~17: Replace YOUR_EMAILJS_PUBLIC_KEY
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
// With your actual public key:
emailjs.init("1a2b3c4d5e6f7g8h9i0j");

// Line ~29: Replace YOUR_SERVICE_ID
"YOUR_SERVICE_ID"
// With your service ID:
"service_XXXXXXXXX"

// Line ~31: Replace YOUR_TEMPLATE_ID
"YOUR_TEMPLATE_ID"
// With your template ID:
"template_XXXXXXXXX"
```

## Step 6: Update Recipient Email (Optional)
The contact form currently sends to anji275@gmail.com. To change this:
1. Update line ~24 in Contact.jsx:
```javascript
to_email: "anji275@gmail.com" // Change email here
```

Or configure it in your EmailJS template settings.

## Step 7: Test the Form
1. Start the development server: `npm start`
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check anji275@gmail.com for the email

## Troubleshooting

### Emails not sending
- Verify Service ID and Template ID are correct
- Check Public Key is accurate
- Ensure email service is properly connected in EmailJS dashboard
- Check browser console for error messages

### CORS Errors
- This is normal for development. EmailJS handles CORS on their servers
- Make sure you're using the correct Public Key

### Email Template Issues
- Verify template variables match form field names exactly
- Test the template in EmailJS dashboard before using in production

## Production Deployment
When deploying to production:
1. Keep credentials in environment variables (.env file)
2. Never commit credentials to version control
3. Use `.env.local` or `.env.production` for different environments
4. Update Contact.jsx to use environment variables:

```javascript
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// In send email:
await emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  formData
);
```

## Additional Resources
- EmailJS Documentation: https://www.emailjs.com/docs
- EmailJS Pricing: https://www.emailjs.com/pricing (Free tier: 200 emails/month)

---
**Note**: For production use, consider upgrading to a paid EmailJS plan or integrating a backend service for better security and reliability.
