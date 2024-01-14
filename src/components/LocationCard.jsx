import "./styles/LocationCard.css"
const LocationCard = ({location}) => {
  return (
    <article className="card__location">
        <h2 className="card__location__name">{location?.name}</h2>
        <ul className="card__location__info">
            <li className="card__location__item"><span className="card__location__label">Dimension:</span><span className="card__location__value">{location?.dimension}</span></li>
            <li className="card__location__item"><span className="card__location__label">Type:</span><span className="card__location__value">{location?.type}</span></li>
            <li className="card__location__item"><span className="card__location__label">Population:</span><span className="card__location__value">{location?.residents.length}</span></li>
        </ul>
    </article>
    )
}

export default LocationCard