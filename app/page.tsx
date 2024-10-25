import Link from "next/link";
import { ExperienceCard } from "./components/ExperienceCard";
import { Socials } from "./components/Socials";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center md:justify-center h-screen py-12 px-4 md:p-0 md:gap-6 xl:gap-12 font-[family-name:var(--font-geist-sans)] bg-slate-900 overflow-auto">
      <div className="flex flex-col flex-1 w-full md:h-full md:sticky md:top-0 md:py-24 px-5">
        <div className="flex justify-end w-full h-full">
          <div className="flex flex-col items-start w-full md:max-w-lg">
            <h1 className="text-4xl font-bold text-slate-200 mb-2 tracking-wide">Matija Jeras</h1>
            <h2 className="text-xl text-slate-200 mb-4 tracking-wide">Senior Frontend Developer</h2>
            <p className="text-md text-slate-400 max-w-96">With the power of Next.js, my passion is to build eye-pleasing and responsive web applications that offer the best user experience.</p>
            <Navigation />
          </div>
        </div>
        <footer className="sticky md:static top-0 flex md:justify-end md:items-end w-full h-full mt-4">
          <Socials />
        </footer>
      </div>
      <div className="row-span-2 w-full h-full flex-1 px-5">
        <div className="flex flex-col md:max-w-lg pb-20">
          <section id="about" className="flex flex-col gap-5 items-center sm:items-start text-slate-400 pt-24">
            <p>Hello! I am Matija, a web developer based in <Link className="text-slate-200 hover:text-teal-200" href="https://en.wikipedia.org/wiki/Slovenia" target="_blank">Slovenia</Link>, let me tell you a bit about myself.</p>
            <p>My passion for programming started when I was a kid and got bigger throughout my attendance of <Link className="text-slate-200 hover:text-teal-200" href="https://fri.uni-lj.si/" target="_blank">Faculty of Computer and Information Science</Link> from 2013 to 2017.</p>
            <p>After I graduated and received a bachelor's degree in computer and information science, I focused on gaining experience in the web development field, especially frontend. To create something with code and have it be accessible to all the people in the world is something that has always fascinated me.</p>
            <p>Starting with the basics (HTML + CSS, some vanilla JavaScript), I quickly turned to bigger frameworks like <Link className="text-slate-200 hover:text-teal-200" href="https://vuejs.org/" target="_blank">Vue.js</Link>. While working a bit also with server side technologies like <Link className="text-slate-200 hover:text-teal-200" href="hhttps://nodejs.org/en" target="_blank">Node.js</Link> and <Link className="text-slate-200 hover:text-teal-200" href="https://go.dev/" target="_blank">Go</Link>, I decided to go back to the frontend and try working with <Link className="text-slate-200 hover:text-teal-200" href="https://angular.dev/" target="_blank">Angular</Link>.</p>
            <p>A few years passed and my experience and knowledge of <Link className="text-slate-200 hover:text-teal-200" href="https://angular.dev/" target="_blank">Angular</Link> and frontend frameworks kept growing. Then I got the opportunity to join a small team of developers within a large company, that strived to completely recreate a frontend solution for <Link className="text-slate-200 hover:text-teal-200" href="https://en.wikipedia.org/wiki/Content_management_system" target="_blank">CMS</Link> in relation to gaming and gambling - something I was familiar with from before. And what's even better - the framework used will be <Link className="text-slate-200 hover:text-teal-200" href="https://nextjs.org/" target="_blank">Next.js</Link>.</p>
            <p>I've known about <Link className="text-slate-200 hover:text-teal-200" href="https://nextjs.org/" target="_blank">Next.js</Link> and <Link className="text-slate-200 hover:text-teal-200" href="https://react.dev/" target="_blank">React</Link> by then of course, but didn't yet work with it on such a big project. And building it from scratch with latest greatest technologies is something every developer wants. So here I am currently, still working and maintaining this app while leading a small team - we'll see what the future brings.</p>
          </section>
          <section id="experience" className="flex flex-col gap-5 items-center sm:items-start text-slate-400 pt-24">
            <ExperienceCard
              title="Senior Frontend Developer — Bragg"
              description="Built a Next.js app from scratch to render CMS content and integrate data from an external WebSocket. Focused on modular libraries that work both together and independently. Explored Next.js (SSR, routing, prefetching, client/server components) and React (custom hooks, contexts, testing library). Developed a custom form system with tailored validation and state management."
              url="https://bragg.group"
              timeline="2022 — Present"
              technologies={['Next.js', 'React', 'Nx', 'Jest/RTL', 'Cypress']}
            />
            <ExperienceCard
              title="Senior Developer — Endava"
              description="Endava lends developers to other companies as a service, so here I worked on multiple projects. Extending an Angular app for hardware interaction and data visualization with Plotly graphs. Migrating components to React (Next.js - SSR) for better SEO. Optimizing Angular landing page performance using Lighthouse"
              url="https://www.endava.com/"
              timeline="2021 — 2022"
              technologies={['Angular', 'React', 'Plotly', 'Next.js']}
            />
            <ExperienceCard
              title="Full Stack Developer — 1Home"
              description="Startup that focused on selling small devices which bridge the gap between Smart Home and voice assistants. Developed frontend and backend for dashboard app that handles swarms of IoT devices (Raspberry Pi 3&4) (Vue.js, Node.js, and MongoDB). Wrote GoLang code directly on these devices, managing device fleets with Balena and OpenBalena."
              url="https://www.1home.io/"
              timeline="2019 — 2021"
              technologies={['Vue.js', 'Node.js', 'MongoDB', 'Go', 'RPi']}
            />
            <ExperienceCard
              title="Frontend Developer — Oryx Gaming"
              description="I began my career at Oryx Gaming, a company specializing in online gambling solutions, which later rebranded to Bragg. Joining fresh out of college, I initially focused on developing websites using HTML, CSS, and JavaScript, and later expanded my skill set to include Vue.js. I also had the opportunity to dabble a bit in development and maintenance of a custom CMS, built with PHP and Laravel."
              url="https://bragg.group"
              timeline="2017 — 2019"
              technologies={['Vue.js', 'HTML', 'CSS', 'PHP', 'Laravel']}
            />
          </section>
          <section id="info" className="flex justify-end pt-24">
            <p className="text-sm text-slate-600 max-w-sm">Coded in <Link className="text-slate-400 hover:text-teal-200" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</Link> by myself. Built with <Link className="text-slate-400 hover:text-teal-200" href="https://nextjs.org/" target="_blank">Next.js</Link> and <Link className="text-slate-400 hover:text-teal-200" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Link>, deployed with <Link className="text-slate-400 hover:text-teal-200" href="https://vercel.com/" target="_blank">Vercel</Link>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
