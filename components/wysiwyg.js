'use client'
const WYSIWYG = ({
    contentHtml
}) => {

    return (
        <div className="editable w-full h-10">
            <div className="post-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}

export default WYSIWYG
