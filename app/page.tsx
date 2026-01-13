import React from 'react';
import { ArrowUpRight, Github, Instagram, Twitter, Mail, Globe } from 'lucide-react';

// Jenis data untuk pautan bagi memastikan kod jenis 'Type-Safe'
interface LinkItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function Home() {
  const links: LinkItem[] = [
    {
      title: "Projects",
      description: "Koleksi aplikasi dan sistem yang saya bina.",
      href: "https://github.com/yourusername",
      icon: <Github className="w-5 h-5" />,
    },
    {
      title: "Instagram",
      description: "Perkongsian visual dan aktiviti harian.",
      href: "https://instagram.com/yourusername",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      title: "Twitter / X",
      description: "Luahan idea dan kemas kini teknologi.",
      href: "https://twitter.com/yourusername",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      title: "Portfolio Utama",
      description: "Laman web rasmi saya yang lebih mendalam.",
      href: "https://yourwebsite.com",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Hubungi Saya",
      description: "Hantar e-mel untuk kolaborasi atau pertanyaan.",
      href: "mailto:hello@example.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-zinc-800 selection:text-zinc-200 font-sans">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-32 flex flex-col min-h-screen">
        
        {/* Header Section */}
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Omar Thing
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
            Pembangun web yang fokus kepada estetika minimalis dan fungsi yang mantap. 
            Berasas di Kuala Lumpur, Malaysia.
          </p>
        </header>

        {/* Links Section */}
        <main className="flex-grow space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900 hover:border-zinc-800 transition-all duration-300 ease-out"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h2 className="font-medium text-zinc-100">{link.title}</h2>
                  <p className="text-sm text-zinc-500">{link.description}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </main>

        {/* Footer Section */}
        <footer className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 uppercase tracking-widest animate-in fade-in duration-1000 delay-500">
          <p>© 2024 Nama Anda. Hak Cipta Terpelihara.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}