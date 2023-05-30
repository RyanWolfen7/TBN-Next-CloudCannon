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
            _enabled_editors: ['visual', 'content'],
            create: {
                path: "[relative_base_path]/{title|slugify}.md"
            }
        },
    },
    collection_groups: [
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
