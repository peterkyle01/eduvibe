import { getSubjects } from '@/lib/actions'
import { unstable_noStore } from 'next/cache'
import Link from 'next/link'

export default async function GradeDetails({ params }: { params: { grade: string } }) {
  unstable_noStore()
  const { grade } = params
  const subjects = await getSubjects({ grade })
  return (
    <section className="w-full h-full relative">
      <img src={'/img2.webp'} alt="grade-page-image" className="object-cover w-full h-full" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col">
          <h1 className="text-3xl md:text-5xl  font-bold text-sky-500 text-center">{grade}</h1>
          <div className="grow grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-2 p-2">
            {subjects.map((subject) => (
              <Link href={`/quizzes/${grade}/${subject.Subject}`} key={subject.id}>
                <div className="w-full h-full bg-fuchsia-200 rounded-lg flex relative">
                  <img
                    //@ts-ignore
                    src={subject['Subject Image'].url}
                    //@ts-ignore
                    alt={subject['Subject Image'].alt}
                    className="object-cover rounded-lg w-full h-full absolute"
                  />
                  <div className="w-full h-full absolute top-0 bg-sky-500/20"></div>
                  <p className="m-auto z-10 text-xl md:text-4xl font-bold text-yellow-500 line-clamp-1">
                    {subject.Subject?.toUpperCase()}
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
