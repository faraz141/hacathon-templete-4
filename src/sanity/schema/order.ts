import { defineType } from 'sanity';

const Order = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    // {
    //   name: 'customer',
    //   title: 'Customer',
    //   type: 'reference',
    //   to: [{ type: 'customer' }],
    // },
    // {
    //   name: 'items',
    //   title: 'Items',
    //   type: 'array',
    //   of: [{ type: 'orderItem' }],
    // },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Completed', value: 'completed' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
    },
  ],
};
export default Order;
