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
            parser: 'frontmatter',
            output: true,
            url: '/[slug]',
            name: 'Pages',
            icon: 'wysiwyg',
            _enabled_editors: ['visual', 'content'],
        },
    },
    collection_groups: [
        {
            heading: "Data",
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
