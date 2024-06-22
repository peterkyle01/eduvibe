import { getClasses } from '@/lib/actions'
import Image from 'next/image'
import Link from 'next/link'

export default async function Grade() {
  const classes = await getClasses()
  console.log(classes)
  return (
    <section className="w-full h-full relative">
      <Image src={'/img2.webp'} fill alt="grade-page-image" className="object-cover" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col">
          <h1 className="text-5xl font-bold text-red-500 text-center">Choose Your Class</h1>
          <div className="grow grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
            {classes.map((oneClass) => (
              <Link href={`/quizzes/${oneClass.Class}`} key={oneClass.id}>
                <div className="w-full h-full bg-fuchsia-200 rounded-lg flex relative">
                  <Image
                    //@ts-ignore
                    src={oneClass['Class Image'].url}
                    fill
                    //@ts-ignore
                    alt={oneClass['Class Image'].alt}
                    className="object-cover rounded-lg"
                  />
                  <div className="w-full h-full absolute top-0 bg-sky-500/20"></div>
                  <p className="m-auto z-10 text-4xl font-bold text-yellow-500">{oneClass.Class}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
