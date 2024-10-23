import Link from "next/link"

interface ExperienceCardProps {
  title: string;
  description: string;
  url: string;
  timeline: string;
  technologies?: string[];
}

export const ExperienceCard = ({ title, description, url, timeline, technologies }: ExperienceCardProps) => {
  return (
    <div className="group relative w-full grid grid-cols-8 gap-5 transition-all mb-8">
      <div className="flex col-span-2 z-10">
        <span className="text-xs uppercase font-bold tracking-wider mt-1">{timeline}</span>
      </div>
      <div className="absolute -inset-x-8 -inset-y-6 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-8 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="flex flex-col col-span-6 z-10">
        <Link href={url} target="_blank" className="group-hover:text-teal-300 mb-1">
          <span className="text-slate-200 group-hover:text-teal-300">{title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
          <div className="absolute -inset-x-8 -inset-y-2.5 hidden rounded md:-inset-x-8 md:-inset-y-6 lg:block"></div>
        </Link>
        <p className="text-sm">{description}</p>
        <ul className="flex gap-2 mt-3 -ml-1 flex-wrap">
          {technologies && technologies.map(technology => (
            <li className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              <span>{technology}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}