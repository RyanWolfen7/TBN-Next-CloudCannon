const { useRef } = require("react");
const { useEffect } = require("react");

const useDynamicColor = ({
    setColor,
    defaultColor,
    updatedColor
}) => {
    const ref = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const elementRect = ref.current.getBoundingClientRect();
            const elementBottom = elementRect.bottom;

            // Find the first element below the element with a background color, excluding spans
            const elements = document.elementsFromPoint(elementRect.left + (elementRect.width / 2), elementBottom + 1);

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];

                if (element.tagName.toLowerCase() === 'span') {
                    continue; // Ignore spans
                }
                if (element.className == 'p-20 bg-tan') {
                    continue // Ignores rgb(247,241,237)
                }
                const computedStyle = window.getComputedStyle(element);
                const backgroundColor = computedStyle.backgroundColor;
                if (backgroundColor == 'rgb(247,241,237)') {
                    continue // just in case
                }

                // Check if the element has a background color
                if (backgroundColor !== 'rgba(0, 0, 0, 0)' && backgroundColor !== 'transparent') {
                    setColor(updatedColor);
                    break;
                }
                setColor(defaultColor);
            }
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [defaultColor, setColor, updatedColor]);

    return ref
}

export default useDynamicColor
