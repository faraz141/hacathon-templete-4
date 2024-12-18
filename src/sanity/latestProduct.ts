// import { Rule } from '@sanity/types';
const LatestProduct = {
  name: 'latestProduct', // Unique identifier for the schema
  title: 'latestProduct', // Display name in Sanity Studio
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

export default LatestProduct;
