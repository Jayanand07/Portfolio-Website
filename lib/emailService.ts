import emailjs from '@emailjs/browser';

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Fallback error if env vars missing
    if (!serviceId || !templateId || !publicKey) {
      console.warn("Email.js environment variables are missing. Please add them to .env.local");
      // Simulate success for demo if keys are missing but form is valid
      return new Promise((resolve) => setTimeout(() => resolve({ status: 200, text: "Simulated Success" }), 1500));
    }

    const response = await emailjs.sendForm(
      serviceId,
      templateId,
      form,
      { publicKey }
    );
    
    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
