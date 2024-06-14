import Image from 'next/image'
import Link from 'next/link'

export default function GradeDetails({ params }: { params: { grade: string } }) {
  const { grade } = params
  return (
    <section className="w-full h-full relative">
      <Image src={'/img2.webp'} fill alt="grade-page-image" className="object-cover" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col">
          <h1 className="text-5xl font-bold text-sky-500 text-center">{grade}</h1>
          <div className="grow grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
            {[
              'englishQuestion',
              'kiswahiliQuestion',
              'mathsQuestion',
              'scienceQuestion',
              'geographyQuestion',
              'cREQuestion',
            ].map((index) => (
              <Link href={`/quizzes/${grade}/${index}`} key={index}>
                <div className="w-full h-full bg-fuchsia-200 rounded-lg flex relative">
                  <Image
                    src={'/img2.webp'}
                    fill
                    alt="grade-page-image"
                    className="object-cover rounded-lg"
                  />
                  <div className="w-full h-full absolute top-0 bg-sky-500/20"></div>
                  <p className="m-auto z-10 text-4xl font-bold text-yellow-500">
                    {index.toUpperCase()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
