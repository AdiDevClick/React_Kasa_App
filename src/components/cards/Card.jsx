/**
 * Crer un élément ".card"
 * @param {string} className -
 * @param {object} datas
 * @returns {JSX.Element}
 */
export function RenderCard({ className, datas }) {
    return (
        <section className={className}>
            {datas.map((element) => (
                <a href={"#"} key={element.id}>
                    <figure className="card">
                        <img src={element.cover} alt={element.title} />
                        <figcaption>{element.title}</figcaption>
                    </figure>
                </a>
            ))}
        </section>
    );
}
