export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-proterra-navy-500 via-proterra-navy-400 to-proterra-blue-500">
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="mb-6 text-6xl font-extrabold text-white md:text-8xl">
          Proterra Environnement
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-xl text-white/90 md:text-2xl">
          Expert en étanchéité par géosynthétiques
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/admin"
            className="inline-flex items-center justify-center rounded-lg bg-proterra-lime-500 px-8 py-4 text-lg font-semibold text-proterra-navy-900 transition-all hover:bg-proterra-lime-400 hover:scale-105"
          >
            🚀 Accéder au CMS Admin
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            📚 Documentation
          </a>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-4 text-5xl">🎨</div>
            <h3 className="mb-2 text-xl font-bold text-white">Design System</h3>
            <p className="text-white/80">Charte graphique Proterra intégrée</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-4 text-5xl">🎛️</div>
            <h3 className="mb-2 text-xl font-bold text-white">CMS Payload</h3>
            <p className="text-white/80">Panel d'administration complet</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-4 text-5xl">🚀</div>
            <h3 className="mb-2 text-xl font-bold text-white">Next.js 15</h3>
            <p className="text-white/80">Performance et SEO optimaux</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-4 text-5xl">📦</div>
            <h3 className="mb-2 text-xl font-bold text-white">Page Builder</h3>
            <p className="text-white/80">10+ blocs flexibles</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-4 text-5xl">🔍</div>
            <h3 className="mb-2 text-xl font-bold text-white">SEO Avancé</h3>
            <p className="text-white/80">Optimisé Google et IA</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="mb-4 text-5xl">♿</div>
            <h3 className="mb-2 text-xl font-bold text-white">Accessible</h3>
            <p className="text-white/80">WCAG 2.1 AA conforme</p>
          </div>
        </div>

        <div className="mt-24 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-bold text-white">🛠️ En construction</h2>
          <p className="text-lg text-white/80">
            Site en cours de développement avec Next.js 15, Payload CMS et Page Builder.
            <br />
            Cette page temporaire sera remplacée par le site complet très prochainement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-white/70">
            <span className="rounded-full bg-white/10 px-4 py-2">✅ Config Next.js</span>
            <span className="rounded-full bg-white/10 px-4 py-2">✅ Design System</span>
            <span className="rounded-full bg-white/10 px-4 py-2">✅ TypeScript</span>
            <span className="rounded-full bg-white/10 px-4 py-2">⏳ Payload CMS</span>
            <span className="rounded-full bg-white/10 px-4 py-2">⏳ Components</span>
            <span className="rounded-full bg-white/10 px-4 py-2">⏳ Pages</span>
          </div>
        </div>
      </div>
    </main>
  )
}
