import QuizForm from '@/components/shared/quiz-form'
import { getQuestions } from '@/lib/actions'
import Image from 'next/image'

export default async function TopicDetails({
  params,
}: {
  params: { grade: string; subject: string; topic: string }
}) {
  const { grade, subject, topic } = params
  const questions = await getQuestions({ grade, subject, topic })
  return (
    <section className="w-full h-full relative">
      <Image src={'/img2.webp'} fill alt="grade-page-image" className="object-cover" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col">
          <h1 className="text-2xl font-bold text-sky-500 text-center">{topic.toUpperCase()}</h1>
          <div className="grow p-1 flex">
            {/* @ts-ignore */}
            <QuizForm quizzes={questions} />
          </div>
        </div>
      </div>
    </section>
  )
}
