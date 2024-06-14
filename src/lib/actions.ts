'use server'
import _ from 'lodash'

import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export async function getQuestions({
  grade,
  subject,
  topic,
}: {
  grade: string
  subject: string
  topic: string
}) {
  const payload = await getPayloadHMR({ config })
  const { docs: questions } = await payload.find({
    //@ts-ignore
    collection: subject,
    where: {
      Grades: {
        equals: grade.toLowerCase(),
      },
      Topic: {
        equals: topic,
      },
    },
  })
  return questions
}

export async function getTopics(subject: string, grade: string) {
  const payload = await getPayloadHMR({ config })
  const { docs: topics } = await payload.find({
    //@ts-ignore
    collection: subject,
    where: {
      Grades: {
        equals: grade.toLowerCase(),
      },
    },
  })

  return topics.reduce((acc, obj) => {
    //@ts-ignore
    if (!acc.includes(obj.Topic)) {
      //@ts-ignore
      acc.push(obj.Topic)
    }
    return acc
  }, [])
}
