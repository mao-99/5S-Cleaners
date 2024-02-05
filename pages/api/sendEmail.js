import { createTransport } from "nodemailer";

export default async function handler(req, res){

    if (req.method !== 'POST'){
        return res.status(405).end();
    }

    console.log('Request Body:', req.body);
    const [ category, fName, lName, email, phone, date, location, length, width, unitsCount, message ] = req.body;

    const selectedService = category;
    const serviceName = selectedService === '1' ? 'Home + Residential Cleaning' :
                            selectedService === '2' ? 'Office + Industrial Cleaning' :
                            selectedService === '3' ? 'Event + Social Cleaning' :
                            'Unknown Service';


  // Validate form data here if needed

  console.log('Selected Service:', serviceName);
  console.log('First Name', fName);
  console.log('Last Name', lName);
  console.log('Email', email);
  console.log('Phone', phone);
  console.log('Date', date);
  console.log('Location', location);
  console.log('Length', length);
  console.log('Width', width);
  console.log('unitsCount', unitsCount);
  console.log('Message', message);

  // Configure nodemailer transporter
  const transporter = createTransport({
    host: 'smtp.mailgun.org', // Replace with your SMTP host
    port: 587, // Replace with your SMTP port
    secure: false, // Set to true if using SSL/TLS
    auth: {
      user:  // Replace with your SMTP username
      pass:  // Replace with your SMTP password
    },
  });

  // Compose email message
  const mailOptions = {
    from:  // Replace with your email
    to:  // Replace with your business email
    subject: 'New Booking Inquiry',
    text: `
      Category: ${serviceName}
      Name: ${fName} ${lName}
      Email: ${email}
      Phone: ${phone}
      Date: ${date}
      Location: ${location}
      Dimensions: ${length} x ${width}
      Units Count: ${unitsCount}
      Message: ${message}
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
}