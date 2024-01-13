const LocationCard = ({location}) => {
  return (
    <article className="card__location">
        <h2 className="card__location__name">{location?.name}</h2>
        <ul className="card__location__info">
            <li><span className="card__location">Type</span><span>{location?.type}</span></li>
            <li><span>Dimension</span><span>{location?.dimension}</span></li>
            <li><span>Population</span><span></span>{location?.residents.length}</li>
        </ul>
    </article>
    )
}

export default LocationCard