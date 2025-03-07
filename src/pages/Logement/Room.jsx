import { Navigate, useParams } from 'react-router';
import JSONDatas from '../../data/datas.json';
import { DropDown } from '../../components/dropdowns/Dropdown.jsx';
import { Profile } from '../../components/profile/Profile.jsx';
import { Rating } from '../../components/ratings/Ratings.jsx';
import { useFetch } from '../../hooks/useFetch.jsx';
import { Carousel } from '../../components/carousel/Carousel.jsx';
import { TagsContainer } from '../../components/tags/TagsContainer.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.jsx';
import 'assets/css/Tags.scss';
import 'assets/css/Profile.scss';
import 'assets/css/Room.scss';
import 'assets/css/Carousel.scss';
import 'assets/css/Loader.scss';
import { useEffect, useId, useState } from 'react';

const dropdownTitles = {
    description: 'Description',
    equipments: 'Equipements',
};

/**
 * Affiche la page d'appartements
 * @returns {JSX.Element}
 */
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
    const [drawerItems, setDrawerItem] = useState([]);

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
            // Transform description/equipments into
            // an array title/text
            for (const [item, value] of Object.entries(fetchedData)) {
                if (dropdownTitles[item]) {
                    setDrawerItem((prevItems) => [
                        ...prevItems,
                        {
                            id: i <= 5 ? (i += 1) + ids : i,
                            title: dropdownTitles[item],
                            text: value,
                        },
                    ]);
                }
            }
            setLoading(false);
        }
    }, [fetchedData]);

    useDocumentTitle(fetchedData && fetchedData.title);

    if (isLoading && !errors) {
        return (
            <>
                <div
                    className="loader"
                    style={{ placeSelf: 'center', color: 'orange' }}
                ></div>
            </>
        );
    }

    if (errors) {
        return <Navigate to={'/error/page'} replace={true} />;
    }

    return (
        <>
            {/* {!isLoading && fetchedData && ( */}
            <section className="room_header carousel">
                <Carousel images={fetchedData.pictures} />
            </section>
            {/* )} */}
            {/* {!isLoading && fetchedData && ( */}
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
                    <h2 className="room__subtitle">{fetchedData.location}</h2>
                    <TagsContainer datas={fetchedData.tags} />
                </div>
                <div className="dropdowns-container">
                    {drawerItems.map((item) => (
                        <DropDown key={item.id} item={item} />
                    ))}
                </div>
            </section>
            {/* )} */}
        </>
    );
}
