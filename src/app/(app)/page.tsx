import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-full h-full relative">
      <Image src={'/img1.webp'} fill alt="home-page-image" className="object-cover" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl grid place-items-center">
          <div className="w-full md:w-1/3 relative h-60">
            <Image
              src={'/blink.gif'}
              fill
              alt="home-page-image"
              priority
              className="object-cover"
              unoptimized
            />
          </div>

          <h1 className="text-6xl font-bold text-yellow-500 text-center">Welcome to Edu Vibe</h1>
          <h3 className="text-lg text-center">
            The website that helps teachers and learners access cbc lessons with ease.
          </h3>
          <Link href={'/quizzes'}>
            <Button size={'lg'}>Start Your Learning Journey</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
