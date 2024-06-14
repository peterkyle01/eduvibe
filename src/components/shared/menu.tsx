import Link from 'next/link'
import { FaBook, FaCheckSquare, FaEnvelope, FaGamepad } from 'react-icons/fa'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { IoMenu } from 'react-icons/io5'

export function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMenu color="white" size={35} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <p className="text-sky-500 text-3xl font-bold">
              E<span className="text-red-500">D</span>U{' '}
              <span className="text-yellow-500">VIBE</span>
            </p>
          </SheetTitle>
          <SheetDescription>
            The website that helps teachers and learners access cbc lessons with ease.
          </SheetDescription>
          <ul className="text-sky-500 gap-5 w-full h-80 grid">
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
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
