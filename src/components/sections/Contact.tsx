import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contato" className="border-t border-white/10 py-24">
      <Reveal className="mx-auto w-full max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D4A72C]/40 hover:bg-white/[0.04] md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4A72C]">
            Contato
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Vamos construir algo juntos?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            Estou aberto a oportunidades em desenvolvimento Full Stack,
            especialmente em projetos com foco em backend, Node.js e TypeScript.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:pedrogarciaphg@outlook.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B88A1B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D4A72C]"
            >
              <Mail size={18} />
              Enviar e-mail
            </a>

            <a
              href="https://www.linkedin.com/in/pedrogarciaphgs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4A72C]/40 hover:bg-white/5"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/pedrogarciaphgs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4A72C]/40 hover:bg-white/5"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
