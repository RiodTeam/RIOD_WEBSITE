import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    // Check if already subscribed
    const existing = await payload.find({
      collection: 'newsletter-submissions',
      where: { email: { equals: email } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      return NextResponse.json({ success: true, message: 'Already subscribed.' })
    }

    await payload.create({
      collection: 'newsletter-submissions',
      data: {
        email,
        status: 'active',
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
