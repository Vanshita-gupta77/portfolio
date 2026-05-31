import React from "react";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { Link } from "react-scroll";
import { profile, stats } from "../data/portfolioData";

const Home = () => {
  return (
    <section id="home" name="home" className="section-shell flex min-h-screen items-center pt-32">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-bold text-cyan-700 shadow-sm dark:border-cyan-400/25 dark:bg-cyan-300/10 dark:text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {profile.availability}
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.04] text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="block pb-2 leading-[1.12] bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              {profile.title}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="projects"
              smooth
              duration={850}
              offset={-82}
              className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 dark:bg-cyan-300 dark:text-slate-900"
            >
              View Work
              <FaArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white/80 px-6 py-4 text-sm font-black text-slate-900 transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: FaGithub, href: profile.github, label: "GitHub" },
              { icon: MdEmail, href: `mailto:${profile.email}`, label: "Email" },
              { icon: FaWhatsapp, href: profile.whatsappHref, label: "WhatsApp" },
              { icon: MdLocalPhone, href: profile.phoneHref, label: "Call" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:text-cyan-200"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-float lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-emerald-300/10 to-transparent blur-2xl" />
          <div className="glass-panel interactive-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
              Profile Snapshot
            </p>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-700 dark:text-slate-200">
              {profile.summary}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-2xl font-black text-slate-900 dark:text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
