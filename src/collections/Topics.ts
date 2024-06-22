import { CollectionConfig } from 'payload/types'
import { Class } from './Class'

export const Topic: CollectionConfig = {
  slug: 'topics',
  admin: {
    useAsTitle: 'Topic',
    description: 'This are the subject topics',
  },
  fields: [
    {
      name: 'Topic Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Topic',
          type: 'text',
        },
        {
          name: 'Subject',
          type: 'select',
          options: [
            {
              label: 'CRE',
              value: 'cREQuestion',
            },
            {
              label: 'English',
              value: 'englishQuestion',
            },
            {
              label: 'Geography',
              value: 'geographyQuestion',
            },
            {
              label: 'Kiswahili',
              value: 'kiswahiliQuestion',
            },
            {
              label: 'Maths',
              value: 'mathsQuestion',
            },
            {
              label: 'Science',
              value: 'scienceQuestion',
            },
          ],
        },
        {
          name: 'Class',
          type: 'relationship',
          relationTo: [Class.slug],
        },
      ],
    },
  ],
}
