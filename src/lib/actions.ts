'use server'
import _ from 'lodash'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Question, Topic } from '@/payload-types'
import { Users } from '@/collections/Users'

export async function getClasses() {
  const payload = await getPayloadHMR({ config })
  const { docs } = await payload.find({
    collection: 'class',
  })
  return docs
}

export async function getSubjects({ grade }: { grade: string }) {
  const payload = await getPayloadHMR({ config })
  const { docs } = await payload.find({
    collection: 'subject',
  })

  return docs.filter((doc) =>
    doc.Class?.every(
      (singleDoc) => typeof singleDoc.value !== 'number' && singleDoc.value.Class === grade,
    ),
  )
}

export async function getTopics({ subject }: { subject: string }): Promise<Topic[]> {
  const data = await fetch(`${process.env.WEB_API}/api/topics`, {
    headers: {
      Authorization: `${Users.slug} API-Key ${process.env.API_KEY}`,
    },
  })

  const topics = await data.json()
  //@ts-ignore
  return topics.docs.filter((doc) => doc.Subject.value.Subject === subject)
}

export async function getQuestions({
  grade,
  subject,
  topic,
}: {
  grade: string
  subject: string
  topic: string
}): Promise<Question[]> {
  const data = await fetch(`${process.env.WEB_API}/api/question`, {
    headers: {
      Authorization: `${Users.slug} API-Key ${process.env.API_KEY}`,
    },
  })

  const questions = await data.json()

  return questions.docs.filter(
    //@ts-ignore
    (doc) =>
      doc.Class.value.Class === grade &&
      doc.Subject.value.Subject === subject &&
      doc.Topic.value.Topic === topic,
  )
}
