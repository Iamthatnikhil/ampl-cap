const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // Use `false` for TLS
    auth: {
        user: "it@credentglobal.com", // Replace with your client's Microsoft 365 email
        pass: "arshal@321",
    }
});

// Send email function
async function sendMail() {
    try {
        const recipientEmail = "client@example.com"; // Define the variable first

        let info = await transporter.sendMail({
            from: '"Credent IT" <it@credentglobal.com>', // Sender address
            to: "nikhilasssudani@gmail.com", // Use the defined variable
            subject: "Test Email",
            text: "Hello! This is a test email from Microsoft 365 SMTP.",
        });

        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

// Call function to send mail
sendMail().catch(console.error);
