'use client'

import Link from 'next/link'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [message, setMessage] = useState('')

  async function handleSignup(e) {
    e.preventDefault()
    setMessage('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'family',
        },
      },
    })

    if (error) setMessage(error.message)
    else setMessage('Account created. You can now log in.')
  }

  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <header className="border-b border-white/10 bg-[#071120]/90 px-8 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            Young<span className="text-amber-300">Foundry</span>
          </Link>

          <Link
            href="/login"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-bold hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl border border-blue-900/50 bg-[#081426] p-8 shadow-2xl">
          <div className="mb-6 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-amber-300">
            Create Family Account
          </div>

          <h1 className="text-4xl font-black">Get Started</h1>

          <p className="mt-3 leading-7 text-slate-300">
            Create one parent account, then add separate student profiles inside
            your dashboard.
          </p>

          <form onSubmit={handleSignup} className="mt-8 space-y-5">
            <input
              className="w-full rounded-2xl border border-white/10 bg-[#0d1b2f] px-5 py-4 text-white outline-none focus:border-amber-300"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              className="w-full rounded-2xl border border-white/10 bg-[#0d1b2f] px-5 py-4 text-white outline-none focus:border-amber-300"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="w-full rounded-2xl border border-white/10 bg-[#0d1b2f] px-5 py-4 text-white outline-none focus:border-amber-300"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full rounded-full bg-amber-300 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-200"
            >
              Create Account
            </button>
          </form>

          {message && (
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-amber-300">
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}