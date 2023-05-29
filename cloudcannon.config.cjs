module.exports = {
    // Global CloudCannon configuration
    _inputs: {
        title: {
            type: 'text',
            comment: 'The title of your page.'
        }
    },
    _select_data: {
        colors: ['white', 'black'],
        categories: ['sales', 'tips', 'marketing', 'growth']
    },
    paths: {
        collections: 'content',
        data: 'data',
        static: 'public',
        uploads: 'public/uploads'
    },
    output: 'output',
    collections_config: {
        data: {
            path: 'data',
            disable_add: true,
            disable_add_folder: true
        },
        webpages: {
            path: 'content/pages',
            url: '/[slug]',
            'output': true,
            name: 'Pages',
            icon: 'wysiwyg',
            _enabled_editors: ['visual', 'content']
        },
        landing: {
            path: 'content/landing',
            url: '/',
            output: true,
            name: 'Home',
            _enabled_editors: ['source', 'visual', 'content']
        },
        collection_groups: [
            {
                heading: 'Pages',
                collections: [
                    'webpages'
                ]
            },
        ]
    },
    data_config: {

    },

    source_editor: {
        tab_size: 2,
        theme: "dawn"
    }
}
