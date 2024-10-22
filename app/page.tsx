import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-slate-900">
      <div className="flex flex-col flex-1">
        <div className="flex justify-end w-full h-full">
          <div className="w-full max-w-lg">
            <h1 className="text-4xl font-bold text-slate-200 mb-2 tracking-wide">Matija Jeras</h1>
            <h2 className="text-xl text-slate-200 mb-6 tracking-wide">Senior Frontend Developer</h2>
            <p className="text-md text-slate-400 max-w-96">With the power of Next.js, my passion is to build eye-pleasing and responsive web applications that offer the best user experience.</p>
          </div>
        </div>
        <footer className="flex justify-end items-end w-full h-full pb-24">
          <div className="flex items-center w-full gap-4 max-w-lg">
            <Link className="text-slate-400 hover:text-slate-200 transition-all" href="https://github.com/Quattro04?tab=repositories" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 448 512"><path fill="currentColor" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg>
            </Link>
            <Link className="text-slate-400 hover:text-slate-200 transition-all" href="https://www.linkedin.com/in/matija-jeras/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </Link>
            <Link className="text-slate-400 hover:text-slate-200 transition-all" href="https://www.facebook.com/matija.jeras01" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
            </Link>
          </div>
        </footer>
      </div>
      <div className="row-span-2 w-full h-full pt-24 flex-1">
        <main className="flex flex-col max-w-lg gap-8 pb-20">
          <section id="about" className="flex flex-col gap-5 items-center sm:items-start text-slate-400">
            <p>Hello! I am Matija, a web developer based in <Link className="text-slate-200 hover:text-teal-200" href="https://en.wikipedia.org/wiki/Slovenia" target="_blank">Slovenia</Link>, let me tell you a bit about myself.</p>
            <p>My passion for programming started when I was a kid and got bigger throughout my attendance of <Link className="text-slate-200 hover:text-teal-200" href="https://fri.uni-lj.si/" target="_blank">Faculty of Computer and Information Science</Link> from 2013 to 2017.</p>
            <p>After I graduated and received a bachelor's degree in computer and information science, I focused on gaining experience in the web development field, especially frontend. To create something with code and have it be accessible to all the people in the world is something that has always fascinated me.</p>
            <p>Starting with the basics (HTML + CSS, some vanilla JavaScript), I quickly turned to bigger frameworks like <Link className="text-slate-200 hover:text-teal-200" href="https://vuejs.org/" target="_blank">Vue.js</Link>. While working a bit also with server side technologies like <Link className="text-slate-200 hover:text-teal-200" href="hhttps://nodejs.org/en" target="_blank">Node.js</Link> and <Link className="text-slate-200 hover:text-teal-200" href="https://go.dev/" target="_blank">Go</Link>, I decided to go back to the frontend and try working with <Link className="text-slate-200 hover:text-teal-200" href="https://angular.dev/" target="_blank">Angular</Link>.</p>
            <p>A few years passed and my experience and knowledge of <Link className="text-slate-200 hover:text-teal-200" href="https://angular.dev/" target="_blank">Angular</Link> and frontend frameworks kept growing. Then I got the opportunity to join a small team of developers within a large company, that strived to completely recreate a frontend solution for <Link className="text-slate-200 hover:text-teal-200" href="https://en.wikipedia.org/wiki/Content_management_system" target="_blank">CMS</Link> in relation to gaming and gambling - something I was familiar with from before. And what's even better - the framework used will be <Link className="text-slate-200 hover:text-teal-200" href="https://nextjs.org/" target="_blank">Next.js</Link>.</p>
            <p>I've known about <Link className="text-slate-200 hover:text-teal-200" href="https://nextjs.org/" target="_blank">Next.js</Link> and <Link className="text-slate-200 hover:text-teal-200" href="https://react.dev/" target="_blank">React</Link> by then of course, but didn't yet work with it on such a big project. And building it from scratch with latest greatest technologies is something every developer wants. So here I am currently, still working and maintaining this app while leading a small team - we'll see what the future brings.</p>
          </section>
          <section id="experience" className="flex flex-col gap-5 items-center sm:items-start text-slate-400">
            <div className="group relative grid grid-cols-8 gap-2 transition-all">
              <div className="flex col-span-2">
                <span className="text-xs uppercase font-bold tracking-wider mt-1">2022 — Present</span>
              </div>
              <div className="absolute -inset-x-6 -inset-y-4 z-0 rounded-xl group-hover:bg-slate-800/50 group-hover:drop-shadow-lg"></div>
              <div className="flex flex-col col-span-6">
                <Link href="https://bragg.group" target="_blank">
                  <span className="text-slate-200 mb-2 group-hover:text-teal-200">Senior Frontend Developer - Bragg Gaming</span>
                  <div className="absolute -inset-x-6 -inset-y-4"></div>
                </Link>
                <p className="text-sm">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
