import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { naam, email, bericht } = body

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Velden ontbreken' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'website@hybrid-performance.nl',
      to: process.env.CONTACT_EMAIL ?? 'info@hybrid-performance.nl',
      subject: `Nieuw contactformulier van ${naam}`,
      html: `
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${bericht.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
