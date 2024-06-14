import Link from 'next/link'
import { FaBook, FaCheckSquare, FaEnvelope, FaGamepad } from 'react-icons/fa'
import { Menu } from './menu'

export default function Navbar() {
  return (
    <header className="w-full h-16 p-1 fixed top-0 z-20">
      <nav className="w-full h-full bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-between px-4">
        <Link href={'/'}>
          <p className="text-sky-500 text-3xl font-bold">
            E<span className="text-red-500">D</span>U <span className="text-yellow-500">VIBE</span>
          </p>
        </Link>
        <ul className="hidden md:flex text-white gap-5">
          <Link href={'/games'}>
            <li className="flex gap-2 items-center">
              <FaGamepad size={20} /> Games
            </li>
          </Link>
          <Link href={'/lessons'}>
            <li className="flex gap-2 items-center">
              <FaBook size={15} />
              Lessons
            </li>
          </Link>
          <Link href={'/quizzes'}>
            <li className="flex gap-2 items-center">
              <FaCheckSquare size={15} />
              Quizzes
            </li>
          </Link>
          <Link href={'/contacts'}>
            <li className="flex gap-2 items-center">
              <FaEnvelope size={15} />
              Contacts
            </li>
          </Link>
        </ul>
        <div className="md:hidden">
          <Menu />
        </div>
      </nav>
    </header>
  )
}
