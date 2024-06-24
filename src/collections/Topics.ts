import { CollectionConfig } from 'payload/types'
import { Class } from './Class'
import { Subject } from './Subjects'

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
          type: 'relationship',
          relationTo: [Subject.slug],
        },
      ],
    },
  ],
}
