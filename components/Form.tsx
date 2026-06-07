"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
type UserType = "STUDENT" | "BRAND" | "COLLEGE"
type Result = { waitlistNumber: number; referralCode: string }

interface Props {
  userType: UserType
  onBack: () => void
}

const titles: Record<UserType, string> = {
  STUDENT: "Student Details",
  BRAND: "Brand Details",
  COLLEGE: "College Details",
}

export default function Form({ userType, onBack }: Props) {
  const [fields, setFields] = useState<any>({})
  const [result, setResult] = useState<Result | null>(null)
    const [error, setError] = useState("")
    const router = useRouter()
  function set(key: string, val: string) {
    setFields({ ...fields, [key]: val })
  }

    function input(label: string, key: string, type = "text") {
        return (
        
      <div key={key} className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">{label}</label>
        <input
          type={type}
          required
          value={fields[key] ?? ""}
          onChange={e => set(key, e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1a1a2e] outline-none focus:border-[#6c47ff]"
        />
      </div>
    )
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const res = await fetch("/api/waitlist/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...fields, userType }),
    })

    const data = await res.json()
    if (!res.ok) {
      setError(data.error)
      return
    }
    setResult(data)
  }

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-sm px-6 py-10 flex flex-col">
        <button type="button" onClick={onBack} className="text-gray-400 text-sm mb-6 text-left">
          ← Back
        </button>

        <h1 className="text-2xl font-bold text-[#6c47ff] mb-6">PRODJET</h1>
        <h2 className="text-lg font-bold text-[#1a1a2e] mb-1">{titles[userType]}</h2>
        <p className="text-gray-600 text-sm mb-6">Please fill in your details</p>

        <form onSubmit={submit} className="flex flex-col gap-4">
          {input("Full Name", "fullName")}
          {input("Email", "email", "email")}
          {input("Phone Number", "phone")}

          {userType === "STUDENT" && <>
            {input("College Name", "collegeName")}
            {input("Course", "course")}
            {input("Graduation Year", "graduationYear", "number")}
            {input("City", "city")}
          </>}

          {userType === "BRAND" && <>
            {input("Brand Name", "brandName")}
            {input("Industry", "industry")}
            {input("Company Size", "companySize")}
            {input("Website", "website", "url")}
            {input("Contact Person Name", "contactPersonName")}
          </>}

          {userType === "COLLEGE" && <>
            {input("College Name", "collegeName")}
            {input("Designation", "designation")}
            {input("Number of Students", "numberOfStudents", "number")}
            {input("City", "city")}
            {input("Official Email", "officialEmail", "email")}
          </>}

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-[#6c47ff] text-white font-semibold text-sm mt-2"
          >
            Submit
          </button>
        </form>
      </div>

      {error && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <span className="text-red-500">✕</span>
            </div>
            <h3 className="font-bold text-[#1a1a2e] mb-1">Something went wrong</h3>
            <p className="text-gray-400 text-sm mb-6">{error}</p>
            <button
              onClick={() => setError("")}
              className="w-full py-3 rounded-xl bg-[#6c47ff] text-white font-semibold text-sm"
            >
              Please ,Try Again
            </button>
          </div>
        </div>
      )}

      {result && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-green-500">✓</span>
            </div>
            <h3 className="font-bold text-[#1a1a2e] mb-1">Registration Complete!</h3>
            <p className="text-gray-400 text-sm mb-6">You are on the PRODJET waitlist.</p>
            <div className="border border-gray-200 rounded-xl p-4 text-center mb-6">
              <p className="text-xs text-gray-400 mb-1">Waitlist Number</p>
              <p className="text-3xl font-bold text-[#6c47ff] mb-3">#{result.waitlistNumber}</p>
              <p className="text-xs text-gray-400 mb-1">Referral Code</p>
              <p className="text-xl font-bold text-[#6c47ff]">{result.referralCode}</p>
            </div>
            <button
              onClick={onBack}
              className="w-full py-3 rounded-xl bg-[#6c47ff] text-white font-semibold text-sm"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}