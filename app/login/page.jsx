'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const supabase = createClient()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setMessage('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setMessage(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <header className="border-b border-white/10 bg-[#071120]/90 px-8 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            Young<span className="text-amber-300">Foundry</span>
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-amber-300 px-5 py-2 text-sm font-black text-slate-950 hover:bg-amber-200"
          >
            Get Started
          </Link>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl border border-blue-900/50 bg-[#081426] p-8 shadow-2xl">
          <div className="mb-6 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-amber-300">
            Welcome Back
          </div>

          <h1 className="text-4xl font-black">Login</h1>

          <p className="mt-3 leading-7 text-slate-300">
            Sign in to access your dashboard, student profiles, progress, and
            learning activities.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
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
              Login
            </button>
          </form>

          {message && (
            <p className="mt-5 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-slate-400">
            New to YoungFoundry?{' '}
            <Link href="/signup" className="font-bold text-amber-300">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}