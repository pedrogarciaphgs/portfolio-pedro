const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="text-lg font-bold tracking-tight text-white"
        >
          Pedro<span className="text-blue-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-lg border border-blue-500/50 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-500 hover:text-white"
        >
          Fale comigo
        </a>
      </div>
    </header>
  );
}
