'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function FamilyDashboard() {
  const supabase = createClient()

  const [profiles, setProfiles] = useState([])
  const [studentName, setStudentName] = useState('')
  const [message, setMessage] = useState('')

  async function loadProfiles() {
    const { data: userData } = await supabase.auth.getUser()

    if (!userData.user) {
      window.location.href = '/login'
      return
    }

    const { data } = await supabase
      .from('student_profiles')
      .select('*')
      .eq('family_account_id', userData.user.id)
      .order('created_at', { ascending: true })

    setProfiles(data || [])
  }

  async function addProfile(e) {
    e.preventDefault()
    setMessage('')

    const { data: userData } = await supabase.auth.getUser()

    const { error } = await supabase.from('student_profiles').insert({
      family_account_id: userData.user.id,
      student_name: studentName,
    })

    if (error) {
      setMessage(error.message)
      return
    }

    setStudentName('')
    setMessage('Student profile added.')
    loadProfiles()
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  useEffect(() => {
    loadProfiles()
  }, [])

  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <header className="border-b border-white/10 bg-[#071120]/90 px-8 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            Young<span className="text-amber-300">Foundry</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-bold hover:bg-white/10"
            >
              Home
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-full bg-amber-300 px-5 py-2 text-sm font-black text-slate-950 hover:bg-amber-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <div className="mb-6 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-5 py-2 text-sm font-black uppercase tracking-widest text-amber-300">
              Family Dashboard
            </div>

            <h1 className="text-5xl font-black tracking-tight">
              Who is learning today?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Add separate student profiles under one family account, then
              choose a learner to begin activities and track progress.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
            <div className="rounded-3xl border border-blue-900/50 bg-[#081426] p-8 shadow-2xl">
              <h2 className="text-2xl font-black">Add Student Profile</h2>

              <p className="mt-3 leading-7 text-slate-300">
                You can add multiple student profiles.
              </p>

              <form onSubmit={addProfile} className="mt-7 space-y-5">
                <input
                  className="w-full rounded-2xl border border-white/10 bg-[#0d1b2f] px-5 py-4 text-white outline-none focus:border-amber-300"
                  placeholder="Student name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-300 px-6 py-4 font-black text-slate-950 transition hover:bg-amber-200"
                >
                  Add Profile
                </button>
              </form>

              {message && (
                <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                  {message}
                </p>
              )}
            </div>

            <div className="rounded-3xl border border-blue-900/50 bg-[#081426] p-8 shadow-2xl">
              <h2 className="text-2xl font-black">Student Profiles</h2>

              {profiles.length === 0 ? (
                <div className="mt-8 rounded-3xl border border-dashed border-white/20 bg-[#0d1b2f] p-10 text-center">
                  <div className="text-5xl">👧🏽</div>
                  <h3 className="mt-5 text-2xl font-black">
                    No profiles yet
                  </h3>
                  <p className="mt-3 text-slate-300">
                    Add your first student profile to begin.
                  </p>
                </div>
              ) : (
                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {profiles.map((profile) => (
                    <Link
                      key={profile.id}
                      href={`/learn/${profile.id}`}
                      className="group rounded-3xl border border-white/10 bg-[#0d1b2f] p-6 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-[#10213a]"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-300 text-3xl">
                        👧🏽
                      </div>

                      <h3 className="mt-5 text-2xl font-black text-white">
                        {profile.student_name}
                      </h3>

                      <p className="mt-2 text-sm font-bold text-slate-400">
                        Student Profile
                      </p>

                      <div className="mt-6 font-extrabold text-amber-300">
                        Start Learning →
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
