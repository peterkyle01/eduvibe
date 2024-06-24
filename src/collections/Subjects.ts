import { CollectionConfig } from 'payload/types'
import { Class } from './Class'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Topic } from './Topics'

export const Subject: CollectionConfig = {
  slug: 'subject',
  admin: {
    useAsTitle: 'Subject',
    description: 'This are the subjects for all the Grade classes.',
  },
  fields: [
    {
      name: 'Subject Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'Subject',
          type: 'text',
          hooks: {
            beforeChange: [
              ({ value }) => {
                return value.replace(/ +/g, '')
              },
            ],
          },
        },
        {
          name: 'Class',
          type: 'relationship',
          relationTo: [Class.slug],
          hasMany: true,
        },
      ],
    },
  ],
}
