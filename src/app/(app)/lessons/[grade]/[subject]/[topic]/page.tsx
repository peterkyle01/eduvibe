import Image from 'next/image'
import Link from 'next/link'

export default function TopicDetails({ params }: { params: { topic: string } }) {
  const { topic } = params
  return (
    <section className="w-full h-full relative">
      <Image src={'/img2.webp'} fill alt="grade-page-image" className="object-cover" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col">
          <h1 className="text-3xl md:text-5xl font-bold text-sky-500 text-center">{topic}</h1>
        </div>
      </div>
    </section>
  )
}
