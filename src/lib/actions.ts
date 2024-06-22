'use server'
import _ from 'lodash'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { CREQuestion, MathsQuestion, Topic } from '@/payload-types'
import { Users } from '@/collections/Users'

export async function getClasses() {
  const payload = await getPayloadHMR({ config })
  const { docs } = await payload.find({
    collection: 'class',
  })
  return docs
}

export async function getTopics(subject: string, grade: string): Promise<Topic[]> {
  const data = await fetch(`${process.env.WEB_API}/api/topics`, {
    headers: {
      Authorization: `${Users.slug} API-Key ${process.env.API_KEY}`,
    },
  })

  const topics = await data.json()

  return topics.docs.filter(
    // @ts-ignore
    (topic: Topic) => topic.Subject === subject && topic.Class?.value.Class === grade,
  )
}

export async function getQuestions({
  grade,
  subject,
  topic,
}: {
  grade: string
  subject: string
  topic: string
}): Promise<CREQuestion[]> {
  const data = await fetch(`${process.env.WEB_API}/api/${subject}`, {
    headers: {
      Authorization: `${Users.slug} API-Key ${process.env.API_KEY}`,
    },
  })

  const questions = await data.json()

  return questions.docs.filter(
    // @ts-ignore
    (question: MathsQuestion) =>
      // @ts-ignore
      question.Topic.value.id === Number(topic),
  )
}
