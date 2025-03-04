import { Navigate, useParams } from 'react-router';
import JSONDatas from '../../data/datas.json';
import { DropDown } from '../../components/dropdowns/Dropdown.jsx';
import { Profile } from '../../components/profile/Profile.jsx';
import { Rating } from '../../components/ratings/Ratings.jsx';
import { useFetch } from '../../hooks/useFetch.jsx';
import { RenderCarousel } from '../../components/carousel/Carousel.jsx';
import { Tags } from '../../components/tags/Tags.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.jsx';
import 'assets/css/Tags.scss';
import 'assets/css/Profile.scss';
import 'assets/css/Room.scss';
import 'assets/css/Carousel.scss';
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { useDropDowns } from '../../hooks/reducer/reducer.js';

const dropdownTitles = {
    description: 'Description',
    equipments: 'Equipements',
};

export function Room() {
    let ids = useId();
    const { id } = useParams();
    const filteredData = JSONDatas.filter((room) => room.id === id);
    // let { filteredData, isLoading, errors } = useFetch(
    //     'https://jsonplaceholder.typicode.com/todos/1'
    // );
    const [errors, setErrors] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [fetchedData, setFetchData] = useState(null);
    const [deviceType, setDeviceType] = useState(
        window.innerWidth > 768 ? 'desktop' : 'mobile'
    );

    const containerRef = useRef(null);

    const {
        showElements,
        addElements,
        updateElements,
        biggestContent,
        activeContents,
    } = useDropDowns();

    useEffect(() => {
        if (filteredData[0]) {
            setFetchData(filteredData[0]);
            setErrors(false);
        } else {
            setFetchData(null);
            setErrors(true);
        }
    }, []);

    useEffect(() => {
        if (fetchedData) {
            let i = 0;
            for (const [item, value] of Object.entries(fetchedData)) {
                if (dropdownTitles[item]) {
                    addElements({
                        id: i <= 5 ? (i += 1) + ids : i,
                        title: dropdownTitles[item],
                        text: value,
                        active: false,
                        height: null,
                    });
                }
            }
            setLoading(false);
        }
    }, [fetchedData]);

    useEffect(() => {
        console.log(deviceType);
    }, [deviceType]);

    useLayoutEffect(() => {
        window.addEventListener('resize', (e) => {
            if (e.currentTarget.innerWidth > 768) setDeviceType('desktop');
            if (e.currentTarget.innerWidth < 768) setDeviceType('mobile');
        });
        return () => window.removeEventListener('resize', this);
    }, []);

    useDocumentTitle(fetchedData && fetchedData.title);

    if (isLoading && !errors) {
        return (
            <>
                <div style={{ color: 'black' }}>Chargement...</div>
            </>
        );
    }

    if (errors) {
        return <Navigate to={'/error/page'} replace />;
    }
    console.log('je render la room');
    return (
        <>
            {/* {isLoading && <div style={{ color: 'black' }}>Chargement...</div>} */}
            {/* {errors && <Navigate to={'/error/page'} replace />} */}
            {!isLoading && fetchedData && (
                <section className="room_header carousel">
                    <RenderCarousel
                        images={fetchedData.pictures}
                        infinite={true}
                    />
                </section>
            )}
            {!isLoading && fetchedData && (
                <section className="room">
                    <div className="room__profile profile_container">
                        <Profile
                            name={fetchedData.host.name}
                            picture={fetchedData.host.picture}
                        />
                        <Rating rating={fetchedData.rating} />
                    </div>
                    <div className="room__header-container">
                        <h1 className="room__title">{fetchedData.title}</h1>
                        <h2 className="room__subtitle">
                            {fetchedData.location}
                        </h2>
                        <Tags datas={fetchedData.tags} />
                    </div>
                    <div ref={containerRef} className="dropdowns-container">
                        {showElements.map((item, index) => (
                            <DropDown
                                key={ids + index}
                                item={item}
                                onUpdate={updateElements}
                                ref={containerRef}
                                optionnalDatas={{
                                    biggestContent: biggestContent,
                                    elementsOnDisplay: showElements.length,
                                    activeContents: activeContents,
                                    deviceType: deviceType,
                                    layoutType: 'flat',
                                }}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}
