const pizza = {
  name: "pizza",
  title: "Pizza",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "array",
      of: [{ 
        name : 'size',
        title : 'Size',
        type : 'number'
       }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export default pizza;
