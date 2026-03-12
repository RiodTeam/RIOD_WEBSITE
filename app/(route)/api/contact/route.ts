import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { sendDiscordNotification } from '@/app/lib/discord'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, type, message, formSource } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contact-submissions',
      data: {
        name,
        email,
        phone: phone || undefined,
        company: company || undefined,
        type: type || 'general',
        message,
        status: 'new',
      },
    })

    const title = formSource === 'lead-popup'
      ? 'Lead Popup Enquiry'
      : 'Contact Form Enquiry'

    await sendDiscordNotification({
      formTitle: title,
      page: formSource === 'lead-popup' ? 'Lead Popup (Auto)' : '/contact',
      data: { name, email, phone, company, message },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
