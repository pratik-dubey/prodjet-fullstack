import { NextRequest, NextResponse } from "next/server"

const users: any[] = []

export async function POST(req: NextRequest) {
  const body = await req.json()

  if (!body.fullName || !body.email || !body.phone || !body.userType) {
    return NextResponse.json({ error: "Please fill all fields" }, { status: 400 })
  }

  if (body.userType === "STUDENT") {
    if (!body.collegeName || !body.course || !body.graduationYear || !body.city) {
      return NextResponse.json({ error: "Please fill all fields" }, { status: 400 })
    }
  }

  if (body.userType === "BRAND") {
    if (!body.brandName || !body.industry || !body.companySize || !body.website || !body.contactPersonName) {
      return NextResponse.json({ error: "Please fill all fields" }, { status: 400 })
    }
  }

  if (body.userType === "COLLEGE") {
    if (!body.collegeName || !body.designation || !body.numberOfStudents || !body.city || !body.officialEmail) {
      return NextResponse.json({ error: "Please fill all fields" }, { status: 400 })
    }
  }

  const already = users.find(u => u.email === body.email)
  if (already) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 })
  }

  const waitlistNumber = users.length + 1
  const referralCode = `USR${waitlistNumber}`

  users.push({ ...body, waitlistNumber, referralCode })

  return NextResponse.json({ waitlistNumber, referralCode })
}