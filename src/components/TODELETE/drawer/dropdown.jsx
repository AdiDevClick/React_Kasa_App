import PropTypes from 'prop-types';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import 'assets/css/DropDown.scss';
import arrow from 'assets/images/dropdown-arrow.svg';

/**
 * Render un dropdown avec un bouton sur la droite
 * @param {object} param0
 * @param {object} param0.item - Object contenant toutes les propriétés
 * @param {string|Array} param0.text - Texte du dropdown
 * @param {import('react').ForwardedRef} containerRef - forwarded ref
 * @returns {JSX.Element}
 */
export const DropDown = forwardRef(function DropDown(
    { item, onUpdate, optionnalDatas },
    containerRef
) {
    item.text = Array.isArray(item.text) ? item.text : [item.text];

    const [element, setItem] = useState(item);

    const spanRef = useRef(null);
    const elementRef = useRef(null);

    const [contentHeight, setContentHeight] = useState(null);
    const [containerHeight, setContainerHeight] = useState(null);
    const [containerWidth, setContainerWidth] = useState(null);

    const id = useId();

    useEffect(() => {
        // Send the information to the reducer
        onUpdate(element);

        // Hide non active element
        // if (!element.active) {
        //     spanRef.current.style.display = 'none';
        // }
    }, [element]);

    const handleTransition = () => {
        // Hide non active element
        if (!element.active) {
            // spanRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            spanRef.current.style.display = 'none';

            // Save base height / width
            setContainerHeight(containerRef.current.offsetHeight);
            setContainerWidth(containerRef.current.offsetWidth);

            setItem(() => ({
                ...element,
                container: containerRef.current,
            }));

            // Set height property on the container to fluidify animation
            containerRef.current.style.setProperty('--height', '100%');
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            let newHeight;
            let start = containerHeight;
            switch (optionnalDatas.activeContents.length) {
                case 0:
                    // No active content
                    newHeight = containerHeight;
                    break;

                default:
                    // STACK BEHAVIOR by default on mobile/dekstop
                    optionnalDatas.activeContents.forEach((element) => {
                        start = element += start;
                    });
                    newHeight = start;

                    // If FLAT MODE ON DESKTOP
                    if (
                        optionnalDatas.layoutType === 'flat' &&
                        optionnalDatas.deviceType === 'desktop'
                    )
                        newHeight = contentHeight + containerHeight;
                    break;
            }
            if (
                optionnalDatas.deviceType === 'desktop' &&
                optionnalDatas.layoutType === 'flat'
            ) {
                // If a big content is opened and FLAT MODE ON DESKTOP
                if (newHeight < optionnalDatas.biggestContent) {
                    newHeight = optionnalDatas.biggestContent + containerHeight;
                }
            }

            // Updates new height
            containerRef.current.style.setProperty(
                '--height',
                `250px`
                // `${newHeight}px`
            );
            containerRef.current.style.setProperty(
                '--max-height',
                `350px`
                // `${newHeight}px`
            );
            // elementRef.current.style.setProperty('--height', `${newHeight}px`);
        }
    }, [element, optionnalDatas]);

    const handleClick = (e) => {
        if (!element.active) spanRef.current.style.display = 'block';

        setContentHeight(!element.active ? spanRef.current.offsetHeight : 0);

        // Save item state
        setItem(() => ({
            ...element,
            active: !element.active,
            height: !element.active ? spanRef.current.offsetHeight : 0,
            element: !element.active ? spanRef.current : null,
            containerWidth: containerWidth,
            containerHeight: containerHeight,
        }));

        // Plays button's animation
        e.currentTarget.classList.toggle('closed');
    };

    return (
        <div ref={elementRef} className="dropdown">
            <div
                className="dropdown_container open closed"
                onClick={handleClick}
            >
                <h2 className="dropdown__title">{element.title}</h2>
                <button aria-expanded={element.active} aria-controls={id}>
                    <img
                        alt="icône flêche du bouton"
                        className="dropdown__btn"
                        src={arrow}
                    />
                </button>
            </div>

            <span
                ref={spanRef}
                id={id}
                onTransitionEnd={handleTransition}
                className={element.active ? 'open' : 'closed'}
            >
                {element.text.map((text, index) => (
                    <p
                        key={id + index}
                        id={id + index}
                        className="dropdown__text"
                    >
                        {text}
                    </p>
                ))}
            </span>
        </div>
    );
});

DropDown.propTypes = {
    item: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    optionnalDatas: PropTypes.object.isRequired,
};
