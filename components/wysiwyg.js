import { onCloudCannonChanges, stopCloudCannonChanges } from '@cloudcannon/visual-editor-connector';

const WYSIWYG = ({
    contentHtml
}) => {
    onCloudCannonChanges(() => {
        alert('Works')
    })

    return (
        <div>
            <div className="post-content" data-cms-bind="contentHtml" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
    )
}

export default WYSIWYG
