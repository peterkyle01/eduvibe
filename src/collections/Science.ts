import { CollectionConfig } from 'payload/types'
import { Topic } from './Topics'
import { Class } from './Class'

export const Science: CollectionConfig = {
  slug: 'scienceQuestion',
  admin: {
    useAsTitle: 'Question',
    description: 'This is the Science subject for all the Grade classes.',
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
          name: 'Topic',
          type: 'relationship',
          relationTo: [Topic.slug],
          filterOptions: ({ siblingData }) => {
            console.log(siblingData)
            return {
              Subject: {
                equals: 'scienceQuestion',
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
