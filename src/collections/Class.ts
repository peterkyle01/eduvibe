import { CollectionConfig } from 'payload/types'

export const Class: CollectionConfig = {
  slug: 'class',
  admin: {
    useAsTitle: 'Class',
    description: 'This are all the classes.',
  },
  fields: [
    {
      name: 'Class',
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
      name: 'Class Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
