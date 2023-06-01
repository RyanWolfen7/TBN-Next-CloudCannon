'use client'
const WYSIWYG = ({
    contentHtml
}) => {

    return (
        <div>
            <div className="editable w-full z-40 post-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}

export default WYSIWYG
