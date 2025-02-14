import { Navigate, useParams } from "react-router";
import JSONDatas from "../../data/datas.json";
import { DropDown } from "../../components/dropdowns/Dropdown.jsx";
import { Profile } from "../../components/profile/Profile.jsx";
import { Rating } from "../../components/ratings/Ratings.jsx";
import { useDynamicStyles } from "../../hooks/useDynamicStyles.jsx";
import { useFetch } from "../../hooks/useFetch.jsx";
import { Carousel } from "../../components/carousel/Carousel.jsx";
import { Tags } from "../../components/tags/Tags.jsx";

export function RenderRoom() {
    const stylesToLoad = [
        "Tags.scss",
        "Profile.scss",
        "Room.scss",
        "Carousel.scss",
    ];

    const { id } = useParams();

    // TO REACTIVATE WHEN BACKEND IS UP
    // const { datas, isLoading, errors } = useFetch(
    //     "https://jssonplaceholder.typicode.com/todos/id"
    // );

    // TO DELETE WHEN BACKEND IS UP
    let { datas, isLoading, errors } = useFetch(
        "https://jsonplaceholder.typicode.com/todos/"
    );

    for (const data of JSONDatas) {
        if (data.id == id) {
            datas = data;
        }
    }
    // END TO DELETE

    useDynamicStyles(stylesToLoad);
    return (
        <>
            {isLoading && <div style={{ color: "black" }}>Chargement...</div>}
            {(errors || !datas) && <Navigate to={"/error/page"} replace />}
            {!isLoading && datas && (
                <section className="room_header carousel">
                    <Carousel images={datas.pictures} infinite={true} />
                </section>
            )}
            {!isLoading && datas && (
                <section className="room">
                    <div className="room__profile profile_container">
                        <Profile
                            name={datas.host.name}
                            picture={datas.host.picture}
                        />
                        <Rating rating={datas.rating} />
                    </div>
                    <div className="room__header-container">
                        <h1 className="room__title">{datas.title}</h1>
                        <h2 className="room__subtitle">{datas.location}</h2>
                        <Tags datas={datas.tags} />
                    </div>
                    <div className="dropdowns-container">
                        <DropDown
                            title="Description"
                            text={datas.description}
                        />
                        <DropDown title="Equipement" text={datas.equipments} />
                    </div>
                </section>
            )}
        </>
    );
}
