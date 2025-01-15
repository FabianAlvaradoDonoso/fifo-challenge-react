import { Link } from 'react-router'
import { paths } from '@/routes/paths'
import { Fragment } from 'react/jsx-runtime'
import GithubIcon from '@/components/icons/githubIcon'
import SignInIcon from '@/components/icons/signInIcon'

const technologies = [
  {
    name: 'React',
    color: 'text-blue-700',
    link: 'https://react.dev/',
  },
  {
    name: 'Firebase',
    color: 'text-red-600',
    link: 'https://firebase.google.com/',
  },
  {
    name: 'TypeScript',
    color: 'text-blue-500',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind CSS',
    color: 'text-cyan-500',
    link: 'https://tailwindcss.com/',
  },
]

export function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl bg-white px-4 py-8 text-center lg:py-16 dark:bg-gray-900">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          FIFO Challenge
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-400">
          This project consists of creating a web application for task management using a{' '}
          <em className="italic">FIFO</em> (
          <strong className="font-semibold">First In, First Out</strong>) approach. It uses{' '}
          {technologies.map((tech, index) => (
            <Fragment key={index}>
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noreferrer"
                className={`font-semibold ${tech.color}`}
              >
                {tech.name}
              </a>
              {index < technologies.length - 1 ? ', ' : ''}
            </Fragment>
          ))}
          .
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-400">
          It focuses on user authentication, secure data storage, and a responsive design,
          respecting business rules such as preventing duplicate tasks and processing them according
          to their insertion order.
        </p>
        <div className="flex flex-col space-x-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to={paths.auth.login}
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Sign In
            <SignInIcon height={24} width={24} className="ml-2" />
          </Link>
          <a
            href="https://github.com/FabianAlvaradoDonoso/fifo-challenge-react"
            className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708] dark:focus:ring-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon height={24} width={24} className="mr-2" />
            GitHub Repo
          </a>
        </div>
      </div>
    </section>
  )
}
