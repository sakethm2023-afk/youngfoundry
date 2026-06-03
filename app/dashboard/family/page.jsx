'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function FamilyDashboard() {
  const supabase = createClient()
  const [profiles, setProfiles] = useState([])
  const [studentName, setStudentName] = useState('')

  async function loadProfiles() {
    const { data: userData } = await supabase.auth.getUser()

    const { data } = await supabase
      .from('student_profiles')
      .select('*')
      .eq('family_account_id', userData.user.id)

    setProfiles(data || [])
  }

  async function addProfile(e) {
    e.preventDefault()

    const { data: userData } = await supabase.auth.getUser()

    await supabase.from('student_profiles').insert({
      family_account_id: userData.user.id,
      student_name: studentName
    })

    setStudentName('')
    loadProfiles()
  }

  useEffect(() => {
    loadProfiles()
  }, [])

  return (
    <main>
      <h1>Family Dashboard</h1>

      <h2>Add Student Profile</h2>
      <form onSubmit={addProfile}>
        <input
          placeholder="Student name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="submit">Add Profile</button>
      </form>

      <h2>Who is learning today?</h2>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <a href={`/learn/${profile.id}`}>
            {profile.student_name}
          </a>
        </div>
      ))}
    </main>
  )
}