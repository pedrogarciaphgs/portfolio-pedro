export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Pedro Garcia. Todos os direitos
          reservados.
        </p>

        <a href="#inicio" className="transition hover:text-white">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
