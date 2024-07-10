'use client'
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Question } from '@/payload-types'

export default function QuizForm({ quizzes }: { quizzes: Question[] }) {
  let [index, setIndex] = useState(0)
  const [question, setQuestion] = useState<Question>(quizzes[index])
  const [lock, setLock] = useState(false)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  const answerone = useRef<HTMLLIElement | null>(null)
  const answertwo = useRef<HTMLLIElement | null>(null)
  const answerthree = useRef<HTMLLIElement | null>(null)
  const answerfour = useRef<HTMLLIElement | null>(null)

  const answersArray = [answerone, answertwo, answerthree, answerfour]

  const checkAns = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, ans: string) => {
    if (!lock) {
      if (question['Right Answer'] === ans) {
        // @ts-ignore
        e.target.classList.add('bg-green-300')
        setLock(true)
        setScore((prev) => prev + 1)
      } else {
        // @ts-ignore
        e.target.classList.add('bg-red-300')
        setLock(true)

        switch (question['Right Answer']) {
          case 'answerone':
            answersArray[0].current?.classList.add('bg-green-300')
            break
          case 'answertwo':
            answersArray[1].current?.classList.add('bg-green-300')
            break
          case 'answerthree':
            answersArray[2].current?.classList.add('bg-green-300')
            break
          case 'answerfour':
            answersArray[3].current?.classList.add('bg-green-300')
            break
          default:
            break
        }
      }
    }
  }
  const next = () => {
    if (lock == true) {
      if (index === quizzes.length - 1) {
        setResult(true)
        return 0
      }
      setIndex(++index)
      setQuestion(quizzes[index])
      setLock(false)
      answersArray.map((answer) => {
        answer.current?.classList.remove('bg-green-300')
        answer.current?.classList.remove('bg-red-300')
        return null
      })
    }
  }
  if (question == null)
    return (
      <div className="w-full md:w-1/2 mx-auto h-full bg-white rounded-xl p-2 items-center justify-center flex flex-col">
        <p className="text-2xl font-bold text-black ">No Questions</p>
      </div>
    )
  return (
    <div className="w-full md:w-1/2 mx-auto h-auto bg-white rounded-xl p-2 flex flex-col">
      {result ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
          <h2 className="text-black text-3xl font-bold">
            You scored <span className="text-yellow-500">{score}</span> out of
            <span className="text-sky-500"> {quizzes.length}</span>
          </h2>
        </div>
      ) : (
        <>
          <p className="text-black text-center my-2 font-bold tracking-widest">
            {index + 1} of {quizzes.length} Questions
          </p>
          {question['Question Image'] ? (
            <div className="w-full h-[20rem] relative">
              <Image
                unoptimized
                // @ts-ignore
                src={question['Question Image'].url}
                fill
                // @ts-ignore
                alt={question['Question Image'].alt}
              />
            </div>
          ) : (
            <></>
          )}
          <h2 className="font-bold text-2xl text-yellow-500 h-auto my-4">
            {index + 1}. {question.Question}
          </h2>

          <ul className="grid gap-2 h-[20rem]">
            <li
              className="text-blue-500 border-2 border-blue-500 rounded-md text-center flex"
              ref={answerone}
              onClick={(e) => checkAns(e, 'answerone')}
            >
              <p className="m-auto font-semibold">{question.answerone}</p>
            </li>
            <li
              className="text-orange-500  border-2 border-blue-500 rounded-md text-center flex"
              ref={answertwo}
              onClick={(e) => checkAns(e, 'answertwo')}
            >
              <p className="m-auto font-semibold">{question.answertwo}</p>
            </li>
            <li
              className="text-indigo-500  border-2 border-blue-500 rounded-md text-center flex"
              ref={answerthree}
              onClick={(e) => checkAns(e, 'answerthree')}
            >
              <p className="m-auto font-semibold">{question.answerthree}</p>
            </li>
            <li
              className="text-violet-500  border-2 border-blue-500 rounded-md text-center flex"
              ref={answerfour}
              onClick={(e) => checkAns(e, 'answerfour')}
            >
              <p className="m-auto font-semibold">{question.answerfour}</p>
            </li>
          </ul>
          <Button className="my-2 w-1/2 place-self-center" onClick={next} disabled={lock == false}>
            Next
          </Button>
        </>
      )}
    </div>
  )
}
