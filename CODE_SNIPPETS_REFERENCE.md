# Code Snippets & Configuration Reference

## EmailJS Credentials Location in Contact.jsx

### Current Placeholder Code (Lines 14-31)
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage("");

  try {
    // Initialize EmailJS (use your actual service ID and public key)
    emailjs.init("YOUR_EMAILJS_PUBLIC_KEY"); // ← REPLACE THIS

    const formData = {
      from_name: formRef.current.name.value,
      from_email: formRef.current.email.value,
      company: formRef.current.company.value,
      topic: formRef.current.topic.value,
      message: formRef.current.message.value,
      to_email: "anji275@gmail.com",
    };

    // Send email
    await emailjs.send(
      "YOUR_SERVICE_ID",    // ← REPLACE THIS
      "YOUR_TEMPLATE_ID",   // ← REPLACE THIS
      formData
    );
```

### After Configuration (Example)
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage("");

  try {
    // Initialize EmailJS with your actual public key
    emailjs.init("1a2b3c4d5e6f7g8h9i0j"); // Your public key

    const formData = {
      from_name: formRef.current.name.value,
      from_email: formRef.current.email.value,
      company: formRef.current.company.value,
      topic: formRef.current.topic.value,
      message: formRef.current.message.value,
      to_email: "anji275@gmail.com",
    };

    // Send email
    await emailjs.send(
      "service_abc123def456",     // Your service ID
      "template_xyz789uvm456",    // Your template ID
      formData
    );
```

---

## Production Environment Variables Setup

### .env.local (Development)
```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=service_abc123def456
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789uvm456
REACT_APP_EMAIL_RECIPIENT=anji275@gmail.com
```

### .env.production (Production)
```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=service_abc123def456
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789uvm456
REACT_APP_EMAIL_RECIPIENT=anji275@gmail.com
```

### Updated Contact.jsx with Environment Variables
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage("");

  try {
    // Initialize EmailJS with environment variable
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    const formData = {
      from_name: formRef.current.name.value,
      from_email: formRef.current.email.value,
      company: formRef.current.company.value,
      topic: formRef.current.topic.value,
      message: formRef.current.message.value,
      to_email: process.env.REACT_APP_EMAIL_RECIPIENT,
    };

    // Send email with environment variables
    await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData
    );

    setMessageType("success");
    setSubmitMessage("Thank you! Your inquiry has been sent successfully. We'll get back to you soon.");
    formRef.current.reset();
  } catch (error) {
    console.error("Email send error:", error);
    setMessageType("error");
    setSubmitMessage("Failed to send your inquiry. Please try again or contact us directly.");
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## EmailJS Email Template Example

### Template Name: SHR_Contact_Form

### Template Content:
```html
<h2>New Inquiry from {{from_name}}</h2>

<table style="width: 100%; border-collapse: collapse;">
  <tr style="background-color: #f5f5f5;">
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{from_name}}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{from_email}}</td>
  </tr>
  <tr style="background-color: #f5f5f5;">
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Company:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{company}}</td>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd;"><strong>Topic:</strong></td>
    <td style="padding: 10px; border: 1px solid #ddd;">{{topic}}</td>
  </tr>
</table>

<h3>Message:</h3>
<p>{{message}}</p>

<hr />
<p><strong>Reply to:</strong> {{from_email}}</p>
```

---

## Form Topic Options
```javascript
const topicOptions = [
  "Skilled Resources & Staff Augmentation",
  "Enterprise Software Development",
  "Cloud Architecture & Digital Transformation",
  "AI & Machine Learning Solutions",
  "DevOps, Automation & Infrastructure",
  "Technical Consulting & Advisory",
  "Banking & Financial Services",
  "Insurance Industry Solutions",
  "General Inquiry"
];
```

---

## CSS Classes for Form Styling

### Success Message
```css
.form-message.success {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%);
  border: 1px solid rgba(34, 197, 94, 0.5);
  color: #86efac;
  margin-top: 16px;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  animation: slideDown 0.3s ease;
}
```

### Error Message
```css
.form-message.error {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 100%);
  border: 1px solid rgba(239, 68, 68, 0.5);
  color: #fca5a5;
  margin-top: 16px;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  animation: slideDown 0.3s ease;
}
```

### Animation
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## Industry Section HTML (Services.jsx)

```jsx
<div className="industry-section">
  <h3>Proven Track Record in Key Industries</h3>
  <div className="industry-list">
    <div className="industry-item">
      <strong>Banking & Finance:</strong> Core banking systems, payment gateways, 
      trading platforms, and investment management solutions with regulatory compliance.
    </div>
    <div className="industry-item">
      <strong>Insurance:</strong> Policy administration systems, claims management, 
      underwriting platforms, and digital customer engagement solutions.
    </div>
    <div className="industry-item">
      <strong>Enterprise & FinTech:</strong> Digital transformation, microservices 
      migration, cloud modernization, and secure API development.
    </div>
  </div>
</div>
```

---

## NPM Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Install EmailJS (already done)
npm install emailjs-com --save

# Install environment variable support (optional)
npm install dotenv --save
```

---

## Testing the Form Submission

### Browser Console Test
```javascript
// Check if EmailJS is initialized
console.log(window.emailjs);

// Manually send a test email
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  {
    from_name: "Test User",
    from_email: "test@example.com",
    company: "Test Company",
    topic: "General Inquiry",
    message: "This is a test message",
    to_email: "anji275@gmail.com"
  }
).then(response => {
  console.log("Email sent successfully:", response);
}).catch(error => {
  console.error("Error sending email:", error);
});
```

---

## Common Issues & Solutions

### Issue: "Invalid Public Key"
**Solution**: Verify the public key format and ensure you copied it correctly from EmailJS dashboard.

### Issue: "Service ID not found"
**Solution**: Ensure your email service is activated in EmailJS dashboard and the Service ID is correct.

### Issue: "Template ID not found"
**Solution**: Verify the template exists in EmailJS dashboard and the Template ID is correct.

### Issue: "CORS Error"
**Solution**: This is normal in development. EmailJS handles CORS. Check if credentials are correct.

### Issue: "Email not received"
**Solution**: 
1. Check spam folder
2. Verify email address in EmailJS service settings
3. Check email service is connected properly
4. Test with EmailJS dashboard template editor first

---

## Deployment Checklist

- [ ] All EmailJS credentials configured
- [ ] Form tested locally with real email
- [ ] Environment variables set for production
- [ ] No hardcoded credentials in source code
- [ ] Build passes without errors: `npm run build`
- [ ] All images load correctly
- [ ] Responsive design tested on mobile/tablet
- [ ] Form validation working
- [ ] Success/error messages display correctly
- [ ] Email received at recipient address

---

**Last Updated**: January 24, 2026
**Version**: 1.0
**Status**: Ready for Implementation
