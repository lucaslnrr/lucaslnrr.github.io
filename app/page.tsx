import Image from "next/image";
import HeroBackground from "./components/HeroBackground";

const services = [
  {
    key: "gestao-ti",
    title: (
      <>
        Gestão de <span className="text-accent">TI</span>
      </>
    ),
    description:
      "Consultoria estratégica para infraestrutura, segurança da informação e suporte corporativo.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.4 2.2A3.6 3.6 0 0 0 7 18Z" />
      </svg>
    ),
  },
  {
    key: "dev-sistemas",
    title: (
      <>
        Desenvolvimento <span className="text-accent">de Sistemas</span>
      </>
    ),
    description:
      "Desenvolvimento em Node.js, PHP, Python, PowerApps e Google Script, com foco em integração e automação.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 18 4-4-4-4" />
        <path d="m8 6-4 4 4 4" />
      </svg>
    ),
  },
  {
    key: "edicao-imagens",
    title: (
      <>
        Edição de <span className="text-accent">Imagens</span>
      </>
    ),
    description:
      "Criação e edição de artes visuais profissionais para redes sociais, impulsionando a presença digital da sua marca.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 7h4l2-2h6l2 2h4v12H4Z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    ),
  },
  {
    key: "dashboards",
    title: (
      <>
        Dashboards <span className="text-accent">e Análises</span>
      </>
    ),
    description:
      "Relatórios interativos com Power BI e MySQL para decisões mais inteligentes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19H2" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M23 4a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16 3a4.48 4.48 0 0 0-4.47 4.47c0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3 4s-4 9 5 13a13.07 13.07 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 4Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8h5v16H0ZM8 8h5v2.2h.07c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.7 1.8-2.7 3.8V24H8Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-dark/10 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <a className="flex items-center" href="#home">
            <Image
              src="/images/brand/logo-horizontal-orange.png"
              alt="siereFire"
              width={180}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </a>
          <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            <a className="transition hover:text-foreground" href="#home">
              Início
            </a>
            <a className="transition hover:text-foreground" href="#services">
              Serviços
            </a>
            <a className="transition hover:text-foreground" href="#aboutUs">
              Sobre Nós
            </a>
            <a className="transition hover:text-foreground" href="#contactUs">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden text-white"
        >
          <HeroBackground />
          <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-16 sm:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6 animate-fade-up">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
                  Soluções em Tecnologia
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">
                  Soluções em <span className="text-accent">Tecnologia</span>
                </h1>
                <p className="max-w-xl text-base text-white/80 sm:text-lg">
                  Nosso objetivo é transformar processos empresariais com
                  inovação, eficiência e personalização.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-accent2"
                    href="#contactUs"
                  >
                    Fazer um orçamento
                  </a>
                  <a
                    className="rounded-full border border-white/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white"
                    href="#services"
                  >
                    Ver serviços
                  </a>
                </div>
              </div>
              <div className="animate-fade-up">
                <Image
                  src="/images/notebook-home.png"
                  alt="Apresentação dos serviços siereFire"
                  width={520}
                  height={420}
                  className="panel-shadow mx-auto w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-24 bg-dark py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex flex-col gap-3 text-center sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Serviços
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Soluções inteligentes para sua empresa
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.key}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 font-display text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="aboutUs"
          className="scroll-mt-24 bg-background py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                Sobre Nós
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">Quem Somos</h2>
              <p className="text-base text-muted">
                A <strong className="text-foreground">siereFire</strong> é
                especializada em soluções tecnológicas para empresas. Atuamos
                com desenvolvimento web, automações, consultoria em TI e análise
                de dados.
              </p>
              <p className="text-base text-muted">
                Nosso objetivo é transformar processos empresariais com
                inovação, eficiência e personalização, alinhando a tecnologia às
                necessidades do seu negócio.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-3xl bg-accent/10 sm:block" />
              <Image
                src="/images/textute_sierefire_fundo.png"
                alt="imagem institucional"
                width={520}
                height={420}
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-surface py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/notebook-3.png"
                alt="Sistemas personalizados"
                width={520}
                height={420}
                className="panel-shadow mx-auto w-full max-w-md"
              />
            </div>
            <div className="order-1 space-y-4 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">
                Sistemas Personalizados
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">
                Soluções sob medida
              </h2>
              <p className="text-base text-muted">
                O desenvolvimento de sistemas é o processo de criar soluções de
                software para atender às necessidades de usuários ou
                organizações, envolvendo análise, projeto, implementação e
                manutenção de sistemas computacionais.
              </p>
              <a
                className="inline-flex rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-accent2"
                href="#contactUs"
              >
                Fazer um orçamento
              </a>
            </div>
          </div>
        </section>

        <section className="bg-background py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="mb-12 font-display text-3xl sm:text-4xl">
              Empresas Parceiras
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 md:gap-20">
              <Image
                src="/images/pgr-5.png"
                alt="PGR"
                width={180}
                height={80}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/images/logo.svg"
                alt="Parceiro"
                width={180}
                height={80}
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </section>

        <section
          id="contactUs"
          className="scroll-mt-24 relative overflow-hidden bg-[url('/images/banner-bg.jpg')] bg-cover bg-center py-20 text-white"
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <h2 className="font-display text-3xl sm:text-4xl">Fale Conosco</h2>
              <p className="text-white/80">
                Entre em contato e descubra como a siereFire pode transformar
                sua empresa com tecnologia.
              </p>
              <Image
                src="/images/textute_sierefire.png"
                alt="Contato"
                width={420}
                height={360}
                className="hidden w-full max-w-sm sm:block"
              />
            </div>
            <form
              className="grid gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur"
              action="#"
              method="post"
            >
              <label className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Nome
                <input
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-accent"
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                />
              </label>
              <label className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                E-mail
                <input
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-accent"
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                />
              </label>
              <label className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Mensagem
                <textarea
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-accent"
                  name="comment"
                  rows={5}
                  placeholder="Sua mensagem..."
                />
              </label>
              <button
                className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-accent2"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/70">
            2026 siereFire - Soluções em Tecnologia. Todos os direitos
            reservados.
          </div>
          <div className="flex items-center gap-4 text-white/70">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition hover:text-accent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pb-10 pt-6 text-center text-xs text-white/50">
          comercial@sierefire.com | (27) 9.9856-3697
        </div>
      </footer>
    </div>
  );
}
