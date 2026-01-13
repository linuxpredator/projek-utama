import { ArrowUpRight } from 'lucide-react';

interface LinkItem {
  readonly href: string;
  readonly title: string;
  readonly description: string;
}

function LinkCard({ href, title, description }: LinkItem) {
  return (
    
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-zinc-800 rounded-lg p-5 transition-all hover:border-zinc-600 hover:bg-zinc-950"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-white font-medium mb-1">{title}</h3>
          <p className="text-zinc-400 text-sm">{description}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}

export default function Home() {
  const links: readonly LinkItem[] = [
    {
      href: 'https://github.com/linuxpredator',
      title: 'Github Saya',
      description: 'Projects and open source contributions',
    },
    {
      href: 'https://projek-utama.vercel.app',
      title: 'Projek Website',
      description: 'Web development portfolio',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Helmi</h1>
          <p className="text-zinc-400 text-lg">
            Developer and creator building projects on the web
          </p>
        </header>

        <section className="space-y-3">
          {links.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
        </section>

        <footer className="mt-16 pt-8 border-t border-zinc-900">
          <p className="text-zinc-500 text-sm text-center">
            Available for new projects
          </p>
        </footer>
      </div>
    </main>
  );
}