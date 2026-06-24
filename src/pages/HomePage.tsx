export default function HomePage() {
  const buildSteps = [
    { label: 'Pages', value: 'Mapped' },
    { label: 'Data', value: 'Ready' },
    { label: 'Auth', value: 'Optional' },
  ];

  const promptIdeas = [
    'Launch a storefront',
    'Create a booking app',
    'Build a client portal',
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fb] text-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
              S
            </div>
            <div>
              <p className="text-sm font-bold leading-none">Sparkly</p>
              <p className="mt-1 text-[11px] font-medium text-slate-500">
                Workspace starter
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-xs font-semibold text-slate-500 sm:flex">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            In Progress
          </div>
        </header>

        <section className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-600">
              Sparkly app canvas
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Your app is building.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Describe the product you want in chat and Sparkly will replace this
              starter with real pages, components, auth, database logic, and deploy
              settings.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {promptIdeas.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
              <div className="rounded-lg bg-slate-950 p-4 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-slate-200">
                    Live preview
                  </span>
                </div>

                <div className="grid gap-4 py-5 sm:grid-cols-3">
                  {buildSteps.map((step) => (
                    <div key={step.label} className="rounded-lg bg-white/[0.07] p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        {step.label}
                      </p>
                      <p className="mt-3 text-lg font-black">{step.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg bg-white p-4 text-slate-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                        Next build
                      </p>
                      <h2 className="mt-2 text-2xl font-black tracking-tight">
                        Turn an idea into a working app
                      </h2>
                    </div>
                    <div className="hidden h-14 w-14 rounded-lg bg-blue-600 shadow-lg shadow-blue-600/30 sm:block" />
                  </div>
                  <div className="mt-5 grid gap-3">
                    <div className="h-3 rounded bg-slate-100" />
                    <div className="h-3 w-4/5 rounded bg-slate-100" />
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-lg bg-slate-100" />
                      <div className="h-24 rounded-lg bg-slate-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
