import { Link } from 'react-router'
import GithubIcon from '@/components/icons/githubIcon'
import SignInIcon from '@/components/icons/signInIcon'

export function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl bg-white px-4 py-8 text-center lg:py-16 dark:bg-gray-900">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          FIFO Challenge React
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-400">
          Este proyecto consiste en la creación de una aplicación web para la gestión de tareas
          mediante un esquema <em className="italic">FIFO</em> (
          <strong className="font-semibold">First In, First Out</strong>). Utiliza{' '}
          <strong className="font-semibold text-cyan-400">React</strong>,{' '}
          <strong className="font-semibold text-red-600">Firebase</strong>,
          <strong className="font-semibold text-blue-500">TypeScript</strong> y{' '}
          <strong className="font-semibold text-cyan-500">Tailwind CSS</strong>.
        </p>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-400">
          Se centra en la autenticación de usuarios, almacenamiento de datos seguro y un diseño
          responsivo, respetando reglas de negocio como evitar la duplicación de tareas y el
          procesamiento de las mismas según su orden de inserción.
        </p>
        <div className="flex flex-col space-x-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to="/login"
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
