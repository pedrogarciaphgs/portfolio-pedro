import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre" className="border-t border-white/10 py-24">
      <Reveal className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4A72C]">
            Sobre mim
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Tecnologia, experiência e foco em backend
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-zinc-400">
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e atuo na
            construção de aplicações web com foco em backend, APIs REST,
            integração com bancos de dados e organização de código.
          </p>

          <p>
            Antes de direcionar minha carreira para o desenvolvimento de
            software, trabalhei com suporte técnico, redes, servidores e
            infraestrutura de TI na Força Aérea Brasileira. Essa experiência me
            deu uma visão ampla de sistemas, resolução de problemas e ambientes
            corporativos.
          </p>

          <p>
            Atualmente desenvolvo projetos utilizando Node.js, TypeScript,
            Next.js, PostgreSQL, Prisma ORM e Docker, aplicando conceitos de
            Clean Code, validação de dados, autenticação e controle de acesso.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
