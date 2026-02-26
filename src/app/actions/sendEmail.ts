"use server";

export async function sendContactEmail(prevState: any, formData: FormData) {
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("📨 [Email Simulation] New Contact Form Submission:");
    console.log(JSON.stringify(rawData, null, 2));

    // Here you would implement the actual email sending logic using nodemailer, Resend, etc.
    // Example: await transporter.sendMail({ ... });

    return {
        success: true,
        message: "¡Gracias! Su mensaje ha sido recibido. Nos pondremos en contacto con usted a la brevedad."
    };
}
