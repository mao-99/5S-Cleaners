// pages/api/sendForm.js

import {IncomingForm} from 'formidable';
import { createTransport } from 'nodemailer';

export const config = {
  api: {
    bodyParser: false, // Disable default bodyParser to handle it manually
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ success: false, message: 'Failed to parse form data' });
    }

    console.log('Parsed fields', fields);

    // Access form fields here (e.g., fields.category, fields.fName, etc.)
    const selectedService = fields.category;
    const serviceName = selectedService[0] === '1' ? 'Home + Residential Cleaning' :
                            selectedService[0] === '2' ? 'Office + Industrial Cleaning' :
                            selectedService[0] === '3' ? 'Event + Social Cleaning' :
                            'Unknown Service';

    console.log('Selected Service:', serviceName);
    console.log('First Name', fields.fName);
    console.log('Last Name', fields.lName);
    console.log('Email', fields.email);
    console.log('Phone', fields.phone);
    console.log('Date', fields.date);
    console.log('Location', fields.location);
    console.log('Length', fields.length);
    console.log('Width', fields.width);
    console.log('unitsCount', fields.units);
    console.log('Message', fields.message);

    // Configure nodemailer transporter
    const transporter = createTransport({
      host: 'smtp.mailgun.org', // Replace with your SMTP host
      port: 587, // Replace with your SMTP port
      secure: false, // Set to true if using SSL/TLS
      auth: {
        user: 'postmaster@sandboxd8827c6eee3b476fa22b93a093fd25c2.mailgun.org', // Replace with your SMTP username
        pass: '97ce7d614357d4bc315878849c61dadc-1900dca6-b11137a3', // Replace with your SMTP password
      },
    });

    // Compose email message
    const mailOptions = {
      from: 'postmaster@sandboxd8827c6eee3b476fa22b93a093fd25c2.mailgun.org', // Replace with your email
      to: '5scleanersllc@gmail.com', // Replace with your business email
      subject: 'New Booking Inquiry',
      text: `
        Category: ${serviceName}
        Name: ${fields.fName} ${fields.lName}
        Email: ${fields.email}
        Phone: ${fields.phone}
        Date: ${fields.date}
        Location: ${fields.location}
        Dimensions: ${fields.length} x ${fields.width}
        Units Count: ${fields.units}
        Message: ${fields.message}
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  });
}
