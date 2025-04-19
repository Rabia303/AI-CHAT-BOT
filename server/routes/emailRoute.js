const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // set in .env
    pass: process.env.EMAIL_PASS, // app password
  },
});

// Send email with chat link
router.post("/send", async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Dr. AI Assistant" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: `<p>Here's a chat shared with you from Dr. AI:</p><pre>${text}</pre>`,
    });

    console.log("Email sent:", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
