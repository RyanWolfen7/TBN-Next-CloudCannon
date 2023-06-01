const WYSIWYG = ({
    contentHtml
}) => {

    return (
        <div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
        </div>
    )
}
