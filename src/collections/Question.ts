import { CollectionConfig } from 'payload/types'
import { Class } from './Class'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Topic } from './Topics'
import { Subject } from './Subjects'

export const Question: CollectionConfig = {
  slug: 'question',
  admin: {
    useAsTitle: 'question',
    description: 'This are the questions for all the Grade classes.',
  },
  fields: [
    {
      name: 'Question Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'Question',
      type: 'text',
    },
    { label: 'Answer One', type: 'text', name: 'answerone' },
    { label: 'Answer Two', type: 'text', name: 'answertwo' },
    { label: 'Answer Three', type: 'text', name: 'answerthree' },
    { label: 'Answer Four', type: 'text', name: 'answerfour' },
    {
      type: 'row',
      fields: [
        {
          name: 'Class',
          type: 'relationship',
          relationTo: [Class.slug],
        },
        {
          name: 'Subject',
          type: 'relationship',
          relationTo: [Subject.slug],
          filterOptions: ({ data }) => {
            if (data.Class)
              return {
                'Class.value': {
                  equals: data?.Class?.value,
                },
              }
            return {
              'Class.value': {
                equals: 0,
              },
            }
          },
        },
        {
          name: 'Topic',
          type: 'relationship',
          relationTo: [Topic.slug],
          filterOptions: ({ data }) => {
            console.log(data)
            if (data.Subject)
              return {
                'Subject.value': {
                  equals: data?.Subject?.value,
                },
              }
            return {
              'Subject.value': {
                equals: 0,
              },
            }
          },
        },
        {
          name: 'Right Answer',
          type: 'select',
          options: [
            {
              label: 'Answer One',
              value: 'answerone',
            },
            {
              label: 'Answer Two',
              value: 'answertwo',
            },
            {
              label: 'Answer Three',
              value: 'answerthree',
            },
            {
              label: 'Answer Four',
              value: 'answerfour',
            },
          ],
        },
      ],
    },
  ],
}
