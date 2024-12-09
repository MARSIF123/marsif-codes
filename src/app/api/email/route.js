import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const { email, name, message } = await request.json();
    console.log({ email, name, message });

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} ${email}`,
      text: message,
    };

    await transport.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email.",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
