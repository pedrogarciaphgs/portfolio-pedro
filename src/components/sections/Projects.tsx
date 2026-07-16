import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Projetos
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Aplicações que desenvolvi
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Projetos desenvolvidos para praticar arquitetura, integração com
            bancos de dados, autenticação, validação e construção de interfaces.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/2 p-6 transition hover:border-blue-500/40 md:p-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  {project.featured && (
                    <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                      Projeto em destaque
                    </span>
                  )}

                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      src={project.logo}
                      alt={`Logo do ${project.title}`}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />

                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    <FaGithub size={18} />
                    Código
                  </a>

                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    <ExternalLink size={18} />
                    Ver projeto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
