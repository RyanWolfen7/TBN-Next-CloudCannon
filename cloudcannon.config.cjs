module.exports = {
    generator: {
        metadata: {
            markdown: "markdown-it",
            "markdown-it": {
                html: true,
                linkify: true,
                block: true
            }
        }
    },
    _inputs: {
        title: {
            comment: 'The title of your page.'
        },
        url: {

        },
        description: {
            comment: 'description of the page'
        },
        _select_data: {
            categories: ['static', 'blog', 'video']
        },
    },
    _editables: {
        text: {
            italic: true
        },
        block: {
            format: "p h3",
            undo: true,
            redo: true
        },
        content: {
            blockquote: true,
            bold: true,
            format: "p h1 h2 h3 h4 h5 h6 pre address div",
            italic: true,
            strike: true,
            subscript: true,
            superscript: true,
            underline: true,
            link: true,
            bulletedlist: true,
            indent: true,
            numberedlist: true,
            outdent: true,
            code: true,
            embed: true,
            horizontalrule: true,
            image: true,
            table: true,
            undo: true,
            redo: true,
            removeformat: true,
            copyformatting: true,
            styles: "/styles/editor.css",
            left: "align-left",
            center: "align-center",
            right: "align-right",
            justify: "align-justify",
            image_size_attributes: true,
            snippet: true
        },
        imgage: {
            image_size_attributes: true
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
        webpages: {
            path: './content/pages',
            output: true,
            url: '/[slug]',
            name: 'Static Pages',
            icon: 'wysiwyg',
            _enabled_editors: ['visual', 'content', 'data'],
            schemas: {
                default: {
                    path: 'schemas/pages/default.md'
                },
                landing: {
                    path: 'schemas/pages/landing.md'
                },
                listIndex: {
                    path: "schema/pages/listIndex.md"
                } 
            },
            add_options: [
                {
                    name: "Add Page",
                    options: [
                        {
                            name: "Default",
                            schema: "default",
                        },
                        {
                            name: "Landing",
                            schema: "landing",
                        },
                        {
                            name: "List Index",
                            schema: 'listIndex'
                        }
                    ],
                }
            ]
        },
        guests: {
            path: './content/guests',
            output: true,
            url: '/our-guests/[slug]',
            name: "Guests",
            icon: 'person',
            disable_add_folder: true,
            create: {
                path: "[relative_base_path]/{title|slugify}.md"
            },
            _enabled_editors: ['visual', 'content', 'data'],
            schemas: {
                default: {
                    path: 'schemas/guests/default.md'
                }
            },
            sort: {
                key: 'name'
            },
            sort_options: [
                {
                    key: 'name'
                },
                {
                    key: 'name',
                    order: 'desc'
                }
            ],
            add_options: [
                {
                    name: "Add Guest",
                    schema: "default"
                }
            ]
        }
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
                'webpages',
                'guests'
            ]
        },

    ],
    data_config: {

    }
}
