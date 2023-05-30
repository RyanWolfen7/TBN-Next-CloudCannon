module.exports = {
    generator: {
        metadata: {
            markdown: "markdown-it",
            "markdown-it": {
                html: true,
                linkify: true
            }
        }
    },
    _inputs: { 
        title: {
            comment: 'The title of your page.'
        },
        description: {
            comment: 'description of the page'
        },
        _select_data: {
            categories: ['static', 'blog', 'video']
        },
    },
    paths: {
        collections: 'content',
        data: 'data',
        static: 'public',
        uploads: 'public/uploads'
    },
    collections_config: {
        data: {
            path: 'data',
            output: true
        },
        webpages: {
            path: './content/pages',
            output: true,
            url: '/[slug]',
            name: 'Pages',
            icon: 'wysiwyg',
            _enabled_editors: ['visual', 'content', 'data'],
            add_options: [
                {
                    name: "Add Page",
                    editor: "visual",
                    schema: {
                        path: 'schemas/pages/default.md'
                    }
                }
            ]
        },
    },
    collection_groups: [
        {
            heading: "System",
            collections: [
                'data'
            ]
        },
        {
            heading: 'Pages',
            collections: [
                'webpages'
            ]
        },
        
    ],
    data_config: {

    }
}
