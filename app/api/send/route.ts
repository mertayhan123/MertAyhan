import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request) {
  try {
    // Gelen JSON verisini al
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);

    // Gerekli kontrol
    if (!fromEmail) {
      throw new Error("From email is required");
    }

    // Email gönderme işlemi
    const data = await resend.emails.send({
      from: `Acme <${fromEmail}>`,
      to: [email], // Gelen email'e gönderiyoruz
      subject: subject,
      html: `<p>Email: ${email}</p><p>Message: ${message}</p><p>Subject: ${subject}</p>`
    });

    // Başarılı yanıt döndürme
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    // 'error' türü 'unknown' olduğundan önce kontrol ediyoruz
    if (error instanceof Error) {
      // Hata nesnesini güvenle kullanabiliriz
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    } else {
      // Eğer hata nesnesi bir Error değilse, genel bir hata mesajı döndür
      return new Response(JSON.stringify({ error: "An unknown error occurred" }), { status: 500 });
    }
  }
}
