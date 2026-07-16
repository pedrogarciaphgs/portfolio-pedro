import { Reveal } from "@/components/ui/Reveal";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section id="tecnologias" className="border-t border-white/10 py-24">
      <Reveal className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4A72C]">
            Tecnologias
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ferramentas que utilizo no desenvolvimento
          </h2>

          <p className="mt-5 leading-8 text-zinc-400">
            Tecnologias utilizadas na construção de aplicações web completas,
            APIs, interfaces e integrações com bancos de dados.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {technologies.map((group, index) => (
            <Reveal
              key={group.category}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="h-full rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#D4A72C]/40 hover:bg-white/4">
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>

                <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((technology) => {
                    const Icon = technology.icon;

                    return (
                      <li
                        key={technology.name}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-300 transition hover:border-[#D4A72C]/40
 hover:text-white"
                      >
                        <Icon
                          className={`shrink-0 text-xl ${technology.color}`}
                        />

                        <span>{technology.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
