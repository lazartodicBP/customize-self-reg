export const productTypes = [
  {
    category: 'Metered',
    items: [
      {
        id: 'usage',
        name: 'Usage',
        description: 'Charge for each unit consumed',
        fields: {
          unitName: 'API call',
          unitPrice: 0.01,
        },
      },
      {
        id: 'one_time',
        name: 'One Time Charge',
        description: 'Flat fee once',
        fields: {
          amount: 100,
        },
      },
    ],
  },
  {
    category: 'Recurring',
    items: [
      {
        id: 'subscription',
        name: 'Subscription',
        fields: { interval: 'month', price: 20 },
      },
    ],
  },
];

export default productTypes;
