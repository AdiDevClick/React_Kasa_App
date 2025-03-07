import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { CarouselButton } from './CarouselButton.jsx';

/**
 * Crer un Carousel s'adaptant à au conteneur -
 * @param {object} param0 - props
 * @param {Array} param0.images - Un array d'images.
 * @param {boolean} [param0.infinite = false] - False par défaut - Active l'infinite slide.
 * @returns {JSX.Element}
 */
export function Carousel({ images, infinite = true }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef();

    const prevButton = (
        <CarouselButton
            key={'carousel__prev'}
            className="carousel__prev"
            name="prev"
            handleClick={() => onHandleClick(activeSlide - 1)}
        >
            Preview
        </CarouselButton>
    );

    const nextButton = (
        <CarouselButton
            key={'carousel__next'}
            className="carousel__next"
            name="next"
            handleClick={() => onHandleClick(activeSlide + 1)}
        >
            Next
        </CarouselButton>
    );

    /**
     * Manipule l'index pour déplacer le carousel
     * @param {PointerEvent} e - Click event
     * @param {number} index
     */
    const onHandleClick = (index) => {
        if (index < 0) {
            if (infinite) {
                index = images.length - 1;
            }
        } else {
            if (infinite) {
                if (images[index] === undefined) {
                    index = 0;
                }
            }
        }

        // Save actual slide
        setActiveSlide(index);

        // Translate
        translateToX(carouselRef, index * (-100 / images.length));
    };

    useEffect(() => {
        return () => {
            if (carouselRef.current) {
                setStyle(carouselRef, images);
            }
        };
    }, []);

    return (
        <>
            <div
                ref={carouselRef}
                style={{ overflow: 'hidden', height: '100%' }}
                className="carousel__container"
            >
                {images.map((img, index) => (
                    <figure key={index} style={{ height: '100%' }}>
                        <img src={img} alt={index}></img>
                    </figure>
                ))}
            </div>
            {displayButtons(
                infinite,
                prevButton,
                nextButton,
                activeSlide,
                images
            )}
            <div className="carousel__pagination">
                {images.length > 1 && `${activeSlide + 1} / ${images.length}`}
            </div>
        </>
    );
}

/**
 * Translate vers la droite ou la gauche les images du carousel
 * en fonction d'un pourcentage.
 * @param {HTMLElement} ref - Le container ref des images
 * @param {number} percent
 */
function translateToX(ref, percent) {
    if (ref.current)
        ref.current.style.transform = 'translate3d(' + percent + '%,  0, 0)';
}

/**
 * Calcul de la width du conteneur en fonction du nombre d'images
 * @param {React.RefObject} carouselRef - Carousel container ref
 * @param {Array} imagesArr
 */
function setStyle(carouselRef, imagesArr) {
    carouselRef.current.style.width = imagesArr.length * 100 + '%';
    carouselRef.current.childNodes.forEach((element) => {
        element.style.width = 100 / imagesArr.length + '%';
    });
}

/**
 * Affiche les boutons prev/next en fonction des options du slider
 * @param {Boolean} infinite - Infinite option
 * @param {JSX.Element} prevButton
 * @param {JSX.Element} nextButton
 * @param {Number} activeSlide
 * @param {Array} imagesArray
 * @returns
 */
function displayButtons(
    infinite,
    prevButton,
    nextButton,
    activeSlide,
    imagesArray
) {
    const activeButtons = [];
    // No display on first & last images
    if (!infinite) {
        if (activeSlide >= 1) {
            activeButtons.push(prevButton);
        }

        if (activeSlide < imagesArray.length - 1) {
            activeButtons.push(nextButton);
        }
    }
    // Display with more than 1 image only
    if (infinite && imagesArray.length > 1) {
        activeButtons.push(prevButton, nextButton);
    }
    return activeButtons;
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    infinite: PropTypes.bool,
};
