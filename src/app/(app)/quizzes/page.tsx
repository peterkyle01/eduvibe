import { getClasses } from '@/lib/actions'
import { unstable_noStore } from 'next/cache'
import Link from 'next/link'

export default async function Grade() {
  unstable_noStore()
  const classes = await getClasses()
  return (
    <section className="w-full h-full relative">
      <img src={'/img2.webp'} alt="grade-page-image" className="object-cover w-full h-full" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col">
          <h1 className="text-3xl md:text-5xl font-bold text-red-500 text-center">
            Choose Your Class
          </h1>
          <div className="grow grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-2 p-2 overflow-y-scroll">
            {classes.map((oneClass) => (
              <Link href={`/quizzes/${oneClass.Class}`} key={oneClass.id}>
                <div className="w-full h-full bg-fuchsia-200 rounded-lg flex relative">
                  <img
                    //@ts-ignore
                    src={oneClass['Class Image'].url}
                   
                    //@ts-ignore
                    alt={oneClass['Class Image'].alt}
                    className="object-cover rounded-lg w-full h-full"
                  />
                  <div className="w-full h-full absolute top-0 bg-sky-500/20"></div>
                  <p className="m-auto z-10 text-xl md:text-4xl font-bold text-yellow-500 line-clamp-1">
                    {oneClass.Class}
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
