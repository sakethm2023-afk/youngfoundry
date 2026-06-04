'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function DashboardPage() {
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    async function loadUser() {
      const { data: userData } = await supabase.auth.getUser()

      if (!userData.user) {
        router.push('/login')
        return
      }

      const { data: account } = await supabase
        .from('accounts')
        .select('role')
        .eq('id', userData.user.id)
        .single()

      if (account?.role === 'admin') router.push('/dashboard/admin')
      else if (account?.role === 'teacher') router.push('/dashboard/teacher')
      else router.push('/dashboard/family')
    }

    loadUser()
  }, [router, supabase])

  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <header className="border-b border-white/10 bg-[#071120]/90 px-8 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            Young<span className="text-amber-300">Foundry</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-bold hover:bg-white/10"
          >
            Home
          </Link>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
        <div className="max-w-md rounded-3xl border border-blue-900/50 bg-[#081426] p-8 text-center shadow-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300 text-3xl">
            ✨
          </div>

          <div className="mb-5 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-amber-300">
            Loading Dashboard
          </div>

          <h1 className="text-4xl font-black">Just a moment...</h1>

          <p className="mt-4 leading-7 text-slate-300">
            We are checking your account type and sending you to the right
            YoungFoundry dashboard.
          </p>
        </div>
      </section>
    </main>
  )
}
