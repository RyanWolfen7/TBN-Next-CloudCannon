'use client'
const WYSIWYG = ({
    contentHtml
}) => {

    return (
        <div>
            <div className="editable post-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}

export default WYSIWYG
