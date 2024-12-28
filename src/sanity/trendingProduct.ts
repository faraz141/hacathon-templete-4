// import { Rule } from '@sanity/types';
const TrandingProduct = {
  name: 'trandingProduct', // Unique identifier for the schema
  title: 'trandingProduct', // Display name in Sanity Studio
  type: 'document', // Defines it as a document type
  fields: [
    {
      name: 'id',
      title: 'Product ID',
      type: 'string',
    },
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

export default TrandingProduct;
