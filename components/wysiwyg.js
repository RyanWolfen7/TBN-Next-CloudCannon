'use client'
const WYSIWYG = ({
    contentHtml
}) => {

    return (
        <div className="editable">
            <div className="post-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}

export default WYSIWYG
