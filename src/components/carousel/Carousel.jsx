import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

/**
 * Crer un Carousel s'adaptant à au conteneur -
 * @param {object} param0 - props
 * @param {Array} param0.images - Un array d'images.
 * @param {boolean} [param0.infinite = false] - False par défaut - Active l'infinite slide.
 * @returns {JSX.Element}
 */
export function RenderCarousel({ images, infinite = true }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef = useRef();
    const prevButton = (
        <button
            style={{ color: "transparent" }}
            type="button"
            name="prev"
            onClick={() => handleClick(activeSlide - 1)}
            className="carousel__prev"
        >
            Preview
            <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                    fill="white"
                />
            </svg>
        </button>
    );

    const nextButton = (
        <button
            style={{ color: "transparent" }}
            type="button"
            name="next"
            onClick={() => handleClick(activeSlide + 1)}
            className="carousel__next"
        >
            Next
            <svg
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                    fill="white"
                />
            </svg>
        </button>
    );
    const setStyle = () => {
        carouselRef.current.style.width = images.length * 100 + "%";
        carouselRef.current.childNodes.forEach((element) => {
            element.style.width = 100 / images.length + "%";
        });
    };

    /**
     * Manipule l'index pour déplacer le carousel
     * @param {PointerEvent} e - Click event
     * @param {number} index
     */
    const handleClick = (index) => {
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

        // Force Repaint
        carouselRef.offsetHeight;
        // End of Force Repaint
    };

    useEffect(() => {
        setStyle();
    });

    return (
        <>
            <div
                ref={carouselRef}
                style={{ overflow: "hidden", height: "100%" }}
                className="carousel__container"
            >
                {images.map((img, index) => (
                    <figure key={index} style={{ height: "100%" }}>
                        <img src={img} alt={index}></img>
                    </figure>
                ))}
            </div>
            {!infinite && activeSlide >= 1
                ? prevButton
                : infinite && images.length > 1 && prevButton}
            {!infinite && activeSlide < images.length - 1
                ? nextButton
                : infinite && images.length > 1 && nextButton}
            <div className="carousel__pagination">
                {images.length > 1 && `${activeSlide + 1} / ${images.length}`}
            </div>
        </>
    );
}

/**
 * Translate vers la droite ou la gauche les images du carousel
 * en fonction d'un pourcentage.
 * @param {HTMLElement} ref - Le container des images
 * @param {number} percent
 */
function translateToX(ref, percent) {
    ref.current.style.transform = "translate3d(" + percent + "%,  0, 0)";
}

RenderCarousel.propTypes = {
    images: PropTypes.array.isRequired,
    infinite: PropTypes.bool,
};
