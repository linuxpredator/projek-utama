export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white p-6">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Profil Mini */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter">Helmi</h1>
          <p className="text-zinc-400">Pembangun Web Senior dalam Pembikinan</p>
        </div>

        {/* Senarai Pautan (Linktree Style) */}
        <div className="grid gap-4">
          <a 
            href="https://github.com/linuxpredator" 
            target="_blank"
            className="group rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-colors hover:border-white hover:bg-zinc-800"
          >
            <h2 className="text-xl font-semibold">GitHub Saya</h2>
          </a>

          <a 
            href="#" 
            className="group rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-4 transition-colors hover:border-white hover:bg-zinc-800"
          >
            <h2 className="text-xl font-semibold">Projek Website</h2>
          </a>
        </div>
      </div>
    </main>
  );
}