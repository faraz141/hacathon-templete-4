import { Rule } from '@sanity/types';
const ShopGrid = {
  name: 'shopGrid', // Unique identifier for the schema
  title: 'shopGrid', // Display name in Sanity Studio
  type: 'document', // Defines it as a document type
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'img',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping and focus hotspots
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
      // Uncomment if needed
      // options: {
      //   hotspot: true, // Enables cropping and hotspot
      // },
      // fields: [
      //   {
      //     name: 'alt',
      //     title: 'Alt Text',
      //     type: 'string',
      //     description: 'Describe the image for accessibility and SEO.',
      //     validation: (Rule) =>
      //       Rule.required().warning('Alt text is recommended.'),
      //   },
      // ],
    },

    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'oldPrice',
      title: 'oldPrice',
      type: 'string',
    },
  ],
};

export default ShopGrid;
