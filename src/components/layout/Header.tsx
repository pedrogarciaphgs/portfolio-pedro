"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Voltar ao início"
          className="flex items-center"
        >
          <Image
            src="/images/pedro-garcia-logo.png"
            alt="Pedro Garcia"
            width={220}
            height={60}
            priority
            className="h-16 w-auto object-contain"
          />
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
          className="hidden rounded-lg border border-[#D4A72C]/40 px-4 py-2 text-sm font-medium text-[#D4A72C] transition hover:bg-[#D4A72C] hover:text-white md:inline-flex"
        >
          Fale comigo
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/5 hover:text-white md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-zinc-950 px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
