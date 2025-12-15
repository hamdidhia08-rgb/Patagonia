import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, message, newsletter } =
      await req.json();

  const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "dhiahamedi01@gmail.com",
        pass: "yibeypktjntijbuz",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlContent = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Newsletter:</strong> ${newsletter ? "Yes" : "No"}</p>
    `;

    await transporter.sendMail({
      from: `"PTG Tourism" <${process.env.EMAIL_USER}>`,
      to: "hamdidhia08@gmail.com",
      subject: "New Contact Form Message",
      html: htmlContent,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 500 }
    );
  }
}
