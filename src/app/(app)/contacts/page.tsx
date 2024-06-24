import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Contacts() {
  return (
    <section className="w-full h-full relative">
      <Image src={'/img2.webp'} fill alt="grade-page-image" className="object-cover" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col justify-center items-center">
          <Link href={'tel:+254769972540'} className="flex text-4xl items-center gap-2">
            <FaPhoneAlt size={25} />
            0769972540
          </Link>
        </div>
      </div>
    </section>
  )
}
