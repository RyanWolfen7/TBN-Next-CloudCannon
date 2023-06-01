const WYSIWYG = ({
    contentHtml
}) => {

    return (
        <div>
            <div className="post-content"  data-cms-bind="contentHtml" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}

export default WYSIWYG
