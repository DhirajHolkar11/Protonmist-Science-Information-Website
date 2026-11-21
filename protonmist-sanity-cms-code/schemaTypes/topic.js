export default {
    name: 'topic',
    title: 'Topic',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      { 
        name: 'mainImage', 
        title: 'mainImage', 
        type: 'image' 
      },
      {
        name: 'intro',
        title: 'Intro Text',
        type: 'text',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },         

      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block', // normal text block
          },
          {
            type: 'image', // image block
            options: { hotspot: true },
          },
          {
            type: 'object', // list block
            name: 'listBlock',
            title: 'List',
            fields: [
              {
                name: 'items',
                type: 'array',
                of: [{ type: 'string' }],
                title: 'List Items',
              },
            ],
          },
          {
            type: 'object', // video block
            name: 'videoBlock',
            title: 'Video',
            fields: [
              {
                name: 'videoUrl',
                type: 'url',
                title: 'Video URL',
              },
            ],
          },
        ],
      },
      {
        'name':'source',
        'title':'Source',
        'type':'text',
      },
    ],
  };
  