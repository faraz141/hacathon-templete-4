const Product = {
  name: 'latestProduct',
  title: 'latestProduct',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'description', type: 'string', title: 'Description' },
    { name: 'categories', type: 'string', title: 'Categories Name' },
    { name: 'tags', type: 'string', title: 'Tags' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'stock', type: 'number', title: 'Stock Level' },
    { name: 'ratings', type: 'number', title: 'Ratings' },
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
  ],
};
export default Product;
