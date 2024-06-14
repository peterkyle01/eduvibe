import { CollectionConfig } from 'payload/types'

export const Science: CollectionConfig = {
  slug: 'scienceQuestion',
  admin: {
    useAsTitle: 'Question',
    description: 'This is the Science subject for all the Grade classes.',
  },
  fields: [
    {
      name: 'Topic',
      type: 'select',
      options: [
        {
          label: 'Plants',
          value: 'plants',
        },
      ],
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
          name: 'Grades',
          type: 'radio',
          defaultValue: 'gradeone',
          options: [
            {
              label: 'Grade One',
              value: 'gradeone',
            },
            {
              label: 'Grade Two',
              value: 'gradetwo',
            },
            {
              label: 'Grade Three',
              value: 'gradethree',
            },
            {
              label: 'Grade Four',
              value: 'gradefour',
            },
            {
              label: 'Grade Five',
              value: 'gradefive',
            },
            {
              label: 'Grade Six',
              value: 'gradesix',
            },
          ],
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
