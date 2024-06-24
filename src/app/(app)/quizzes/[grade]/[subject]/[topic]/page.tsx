import QuizForm from '@/components/shared/quiz-form'
import { getQuestions } from '@/lib/actions'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'

export default async function TopicDetails({
  params,
}: {
  params: { grade: string; subject: string; topic: string }
}) {
  unstable_noStore()
  const { grade, subject, topic } = params
  const questions = await getQuestions({ grade, subject, topic })
  console.log(questions)
  return (
    <section className="w-full h-full relative">
      <Image src={'/img2.webp'} fill alt="grade-page-image" className="object-cover" />
      <div className="absolute w-full h-full top-0 z-10  bg-black/15 py-16 px-1">
        <div className="w-full h-full overflow-hidden overflow-y-scroll bg-black/50 backdrop-blur-sm text-white rounded-xl flex flex-col">
          <div className="grow p-1 flex">
            <QuizForm quizzes={questions} />
          </div>
        </div>
      </div>
    </section>
  )
}
