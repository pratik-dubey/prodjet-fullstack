"use client"

import { useState } from "react"
import Form from "@/components/Form"

type UserType = "STUDENT" | "BRAND" | "COLLEGE"

export default function Home() {
  const [userType, setUserType] = useState<UserType | null>(null)

  if (userType) return <Form userType={userType} onBack={() => setUserType(null)} />

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-sm px-6 py-10 flex flex-col">
        <h1 className="text-2xl font-bold text-[#6c47ff]">PRODJET</h1>

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-[#1a1a2e] leading-tight">Join the Waitlist</h2>
          <p className="text-gray-600 text-sm mt-3">
            PRODJET connects students, brands, and colleges on one platform.
            Get early access before we launch.
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-10 mb-4">I am a...</p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setUserType("STUDENT")}
            className="flex items-center gap-4 px-4 py-4 rounded-xl border-2 border-gray-200 hover:border-[#6c47ff] hover:bg-[#f5f2ff] transition-all text-left"
          >
            <span className="text-2xl">🎓</span>
            <div>
              <p className="font-semibold text-[#1a1a2e] text-sm">Student</p>
              <p className="text-gray-400 text-xs">Join as a student</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setUserType("BRAND")}
            className="flex items-center gap-4 px-4 py-4 rounded-xl border-2 border-gray-200 hover:border-[#6c47ff] hover:bg-[#f5f2ff] transition-all text-left"
          >
            <span className="text-2xl">💼</span>
            <div>
              <p className="font-semibold text-[#1a1a2e] text-sm">Brand</p>
              <p className="text-gray-400 text-xs">Join as a brand</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setUserType("COLLEGE")}
            className="flex items-center gap-4 px-4 py-4 rounded-xl border-2 border-gray-200 hover:border-[#6c47ff] hover:bg-[#f5f2ff] transition-all text-left"
          >
            <span className="text-2xl">🏛️</span>
            <div>
              <p className="font-semibold text-[#1a1a2e] text-sm">College</p>
              <p className="text-gray-400 text-xs">Join as a college</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}