import { Rule } from '@sanity/types';
import { SanityDocument } from '@sanity/client';
// import sanityClient from 'part:@sanity/base/client'; // Import the Sanity client

const LatestProduct = {
  name: 'latestProduct', // Unique identifier for the schema
  title: 'latestProduct', // Display name in Sanity Studio
  type: 'document', // Defines it as a document type
  fields: [
    {
      name: 'id',
      title: 'Product ID',
      type: 'string',
    },
    //   description: 'Unique identifier for this product',
    //   validation: (Rule: Rule) =>
    //     Rule.required().custom(
    //       async (id: string, context: { document: SanityDocument }) => {
    //         if (!id) {
    //           return 'ID is required.';
    //         }
    //         // Fetch using the Sanity client
    //         const existing = await sanityClient.fetch(
    //           `count(*[_type == "latestProduct" && id == $id && _id != $currentId])`,
    //           { id, currentId: context.document._id },
    //         );
    //         return existing > 0 ? 'This ID is already in use.' : true;
    //       },
    //     ),
    // },
    // ,
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
      type: 'number',
    },
    {
      name: 'oldPrice',
      title: 'oldPrice',
      type: 'number',
    },
    {
      name: 'description',
      title: 'description',
      type: 'string',
    },
  ],
};

export default LatestProduct;
