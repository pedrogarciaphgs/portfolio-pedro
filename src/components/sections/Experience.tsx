import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const experiences = [
  {
    role: "Infraestrutura e Suporte de TI",
    company: "Força Aérea Brasileira",
    description:
      "Atuação com suporte técnico, redes, servidores, administração de ambientes corporativos, resolução de incidentes e atendimento a usuários.",
    highlights: [
      "Suporte técnico e manutenção de equipamentos",
      "Administração de redes, servidores e acessos",
      "Diagnóstico e resolução de problemas",
      "Atendimento em ambiente corporativo",
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-white/10 py-24">
      <Reveal className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4A72C]">
            Experiência
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Experiência profissional em tecnologia
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Minha experiência anterior em infraestrutura complementa minha
            atuação como Desenvolvedor Full Stack e amplia minha visão sobre
            sistemas, redes e ambientes corporativos.
          </p>
        </div>

        <div className="mt-12">
          {experiences.map((experience) => (
            <article
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4A72C]/40 hover:bg-white/[0.04] md:p-8"
              key={`${experience.role}-${experience.company}`}
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                      <Image
                        src="/images/fab-logo.png"
                        alt="Logo da Força Aérea Brasileira"
                        width={64}
                        height={64}
                        className="h-16 w-16 object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-[#D4A72C]">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="leading-8 text-zinc-400">
                    {experience.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-300"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
