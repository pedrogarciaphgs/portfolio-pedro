import Image from "next/image";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";

export default function Home() {
  return (
    <>
      <Header />

      <main id="inicio" className="min-h-screen pt-16">
        <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Olá, meu nome é
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
              Pedro Garcia
            </h1>

            <h2 className="mt-4 text-2xl font-semibold leading-tight text-zinc-400 md:text-4xl">
              Desenvolvedor Full Stack com foco em backend
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Desenvolvo aplicações web, APIs REST e sistemas integrados a
              bancos de dados utilizando Node.js, TypeScript, Next.js e
              PostgreSQL.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projetos"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="rounded-lg border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Entrar em contato
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/pedrogarciaphgs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Pedro Garcia"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/pedrogarciaphgs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Pedro Garcia"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="pedrogarciaphg@outlook.com"
                aria-label="Enviar e-mail para Pedro Garcia"
                className="text-zinc-400 transition hover:text-white"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-zinc-900 md:h-72 md:w-72">
              <Image
                src="/images/pedro-profile.png"
                alt="Pedro Garcia"
                width={500}
                height={500}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
        <About />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
