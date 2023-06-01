
const WYSIWYG = ({
    contentHtml
}) => {
    if (window.inEditorMode) {
        alert('Inside CloudCannon!');
    }

    return (
        <div>
            <div className="post-content" data-cms-bind="contentHtml" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}

export default WYSIWYG
