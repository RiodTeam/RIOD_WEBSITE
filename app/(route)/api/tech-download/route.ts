import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, resource } = body

    if (!name || !email || !resource) {
      return NextResponse.json(
        { error: 'Name, email, and resource are required.' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'tech-downloads',
      data: {
        name,
        email,
        company: company || undefined,
        resource,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Tech download error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
