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
        pages: {
            path: './content/pages',
            output: true,
            url: '/[slug]',
            name: 'Pages',
            icon: 'wysiwyg',
            _enabled_editors: ['visual', 'content']
        }
    },
    data_config: {

    }
}
