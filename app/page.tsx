const roleCards = [
  {
    icon: "👩‍🏫",
    title: "Teacher",
    color: "text-amber-300",
    border: "border-t-amber-300",
    description:
      "Create classrooms, design custom learning paths, assign activities, and track every student's progress in real time.",
    bullets: [
      "Create class via invite code or link",
      "Design & assign custom learning plans",
      "Real-time student analytics dashboard",
      "Grade activities and give feedback",
      "Batch management up to 30 per class",
      "Blog space to share lessons & tips",
    ],
  },
  {
    icon: "👧🏽",
    title: "Student",
    color: "text-blue-400",
    border: "border-t-blue-400",
    description:
      "Learn algorithms through interactive apps, build flowcharts, earn badges, level up from Sequencer to Collector!",
    bullets: [
      "Gamified learning with 5 progressive levels",
      "Drag-and-drop flowchart builder",
      "Quizzes to unlock new concepts",
      "Personal progress dashboard",
      "Badges, streaks, and achievements",
      "Self-paced or teacher-guided tracks",
    ],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parent",
    color: "text-pink-400",
    border: "border-t-pink-400",
    description:
      "Stay in the loop — see what your child is learning, how they're progressing, and what's next in their journey.",
    bullets: [
      "Register child & link to teacher",
      "Weekly progress email summaries",
      "Score & accuracy trends over time",
      "Activity completion reports",
      "Family plan for multiple children",
      "Purchase & manage subscriptions",
    ],
  },
];

const mainApps = [
  {
    eyebrow: "FLAGSHIP APP",
    title: "FlowChart Quest",
    icon: "🧩",
    color: "text-amber-300",
    description:
      "5-level progression from simple sequences to arrays. Drag-and-drop flowchart builder with quiz gates at 85% accuracy.",
    href: "/apps/flowchart-quest.html",
  },
  {
    eyebrow: "ALGORITHM TRACK",
    title: "AlgoLab",
    icon: "🧪",
    color: "text-emerald-400",
    description:
      "Master algorithms through hands-on modules. Earn XP, climb the belt system from White to Black belt, and prove your skills.",
    href: "/apps/algolab.html",
  },
  {
    eyebrow: "THINKING TRACK",
    title: "ThinkFirst",
    icon: "🧠",
    color: "text-pink-400",
    description:
      "Build computational thinking through structured challenges — sequential thinking, pattern recognition, decomposition, and abstraction.",
    href: "/apps/thinkfirst.html",
  },
  {
    eyebrow: "BINARY & DATA",
    title: "Binary Decoder Ring",
    icon: "💡",
    color: "text-blue-400",
    description:
      "Convert between text, numbers, and binary. Encode images and files into 1s and 0s — see how computers really store data.",
    href: "/apps/yf-binary-converter.html",
  },
  {
    eyebrow: "LOGIC & FLOW",
    title: "Logic Flow Designer",
    icon: "🔗",
    color: "text-purple-400",
    description:
      "Full visual flowchart designer with Start, Action, Decision, and three kinds of Loops. Drag nodes, connect them, and build real program logic.",
    href: "/apps/yf-logic-flow-designer.html",
  },
  {
    eyebrow: "ARRAYS & QUEST",
    title: "Arrays-Quest",
    icon: "🐍",
    color: "text-slate-400",
    description:
      "Master arrays through puzzles, quests, and coding adventures!",
    href: "/apps/Arrays-Quest.html",
  },
];

const freeApps = [
  {
    eyebrow: "CREATIVE WRITING",
    title: "MyFirstChapter",
    icon: "✍️",
    color: "text-pink-400",
    description:
      "A narrative writing studio for young authors. Pick a genre, roll the plot dice, build chapters, track word count, and export your story to Word.",
    href: "/apps/MyFirstChapter.html",
  },
  {
    eyebrow: "TELUGU LITERACY",
    title: "Telugu Velugu",
    icon: "అ",
    color: "text-amber-300",
    description:
      "A gamified, AI-powered Telugu literacy app for kids. Timed adaptive lessons across letters, words, sentences, guninthalu & vottulu, and grammar.",
    href: "/apps/TeluguVillage.html",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#071120]/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-5">
          <div className="text-2xl font-black tracking-tight">
            Young<span className="text-amber-300">Foundry</span>
          </div>

          <nav className="hidden gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#roles" className="hover:text-white">
              Who It's For
            </a>
            <a href="#apps" className="hover:text-white">
              App Showcase
            </a>
            <a href="#free-apps" className="hover:text-white">
              Free Apps
            </a>
          </nav>
        </div>
      </header>

      <section className="px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-amber-300">
              AI-powered learning experiences for ages 9–14
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Helping kids think,
              <br />
              build, explain,
              <br />
              and grow.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              YoungFoundry combines computational thinking, structured problem
              solving, storytelling, creativity, and interactive learning apps
              into a modern experience for students, parents, and educators.
            </p>
          </div>
        </div>
      </section>

      <section id="roles" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-300">
            Built for Everyone
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Three roles. One platform.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Teachers create classes and design learning paths. Students build,
            play, and level up. Parents monitor progress and celebrate wins.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {roleCards.map((role) => (
              <div
                key={role.title}
                className={`rounded-2xl border border-blue-900/50 ${role.border} bg-[#081426] p-8`}
              >
                <div className="text-4xl">{role.icon}</div>

                <h3 className={`mt-6 text-2xl font-black ${role.color}`}>
                  {role.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {role.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm font-bold text-slate-300">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className={role.color}>✦</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-300">
            Interactive Learning Apps
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Explore the YoungFoundry ecosystem
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Six interactive educational experiences focused on logic,
            algorithms, computational thinking, binary systems, arrays, and flow
            design.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {mainApps.map((app) => (
              <a
                key={app.href}
                href={app.href}
                className="group rounded-3xl border border-blue-900/40 bg-gradient-to-b from-[#101d33] to-[#091426] p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:shadow-2xl"
              >
                <div className="mb-16 flex justify-center text-6xl">
                  {app.icon}
                </div>

                <p
                  className={`text-xs font-extrabold uppercase tracking-[0.2em] ${app.color}`}
                >
                  {app.eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {app.title}
                </h3>

                <p className="mt-3 min-h-[104px] leading-7 text-slate-300">
                  {app.description}
                </p>

                <div className="mt-6 font-extrabold text-amber-300 transition group-hover:text-amber-200">
                  Launch App →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="free-apps" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-300">
            Free Apps
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
            Creative tools. Completely free.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            No sign-up needed — open, play, and create. Great for creative
            writing, storytelling, and learning Telugu.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {freeApps.map((app) => (
              <a
                key={app.href}
                href={app.href}
                className="group rounded-3xl border border-blue-900/40 bg-gradient-to-b from-[#2b1745] to-[#091426] p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:shadow-2xl"
              >
                <div className="mb-16 flex justify-center text-6xl">
                  {app.icon}
                </div>

                <p
                  className={`text-xs font-extrabold uppercase tracking-[0.2em] ${app.color}`}
                >
                  {app.eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {app.title}
                </h3>

                <p className="mt-3 min-h-[128px] leading-7 text-slate-300">
                  {app.description}
                </p>

                <div className="mt-6 font-extrabold text-amber-300 transition group-hover:text-amber-200">
                  Launch App →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}