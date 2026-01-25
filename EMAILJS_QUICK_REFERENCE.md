# EmailJS Integration - Quick Reference

## Required Credentials to Configure

You'll need to get these from your EmailJS account:

### 1. Public Key
- Where to find: Dashboard → Account → Public Key
- Format: Numeric string (e.g., `1a2b3c4d5e6f7g8h9i0j`)
- Location in code: Line ~17 of `src/components/Contact.jsx`
- Replace: `emailjs.init("YOUR_EMAILJS_PUBLIC_KEY")`

### 2. Service ID
- Where to find: Dashboard → Email Services → Your Service
- Format: `service_XXXXXXXXX` (alphanumeric)
- Location in code: Line ~29 of `src/components/Contact.jsx`
- Replace: `"YOUR_SERVICE_ID"`

### 3. Template ID
- Where to find: Dashboard → Email Templates → Your Template
- Format: `template_XXXXXXXXX` (alphanumeric)
- Location in code: Line ~31 of `src/components/Contact.jsx`
- Replace: `"YOUR_TEMPLATE_ID"`

## Contact.jsx Code Locations to Update

```javascript
// Line ~17
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); 
// ↓ Change to:
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line ~29
"YOUR_SERVICE_ID",
// ↓ Change to:
"service_abc123def456",

// Line ~31
"YOUR_TEMPLATE_ID",
// ↓ Change to:
"template_xyz789uvm456",
```

## Email Recipients
- **Primary Recipient**: anji275@gmail.com (Line ~24)
  - Can be changed if needed: `to_email: "your.email@example.com"`
- **Sender**: Will be the email address from the contact form

## Template Variables
Your EmailJS template should use these variables:
- `{{from_name}}` - Visitor's full name
- `{{from_email}}` - Visitor's email address
- `{{company}}` - Visitor's company name
- `{{topic}}` - Selected topic of interest
- `{{message}}` - Visitor's detailed message
- `{{to_email}}` - Recipient email (anji275@gmail.com)

## Testing the Integration
1. Start dev server: `npm start`
2. Navigate to Contact section
3. Fill and submit the form
4. Check anji275@gmail.com for the email
5. Check browser console for any errors

## Troubleshooting
- **Email not received?** Check spam/promotions folder
- **CORS errors?** Normal in development, handled by EmailJS
- **Form not submitting?** Check Public Key in browser console
- **Template issues?** Verify variable names match exactly

## Support
- EmailJS Docs: https://www.emailjs.com/docs
- Free tier: 200 emails/month
- No credit card required for free tier

---
**Remember**: Never commit credentials to version control. Use environment variables for production.
