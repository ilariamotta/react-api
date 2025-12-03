export default function Card({personaggio}) {
    const {name, image, birth_year, nationality, biography, awards} = personaggio;

    return (
  <div className="col">
    <div className="card mb-3 shadow-sm bg-dark text-white">
      <div className="row g-0">
        <div className="col-4">
          <img src={image} alt={name} className="img-fluid rounded-start"/>
        </div>
        <div className="col-8">
          <div className="card-body p-2 text-start">
            <h5 className="card-title fw-bold mb-2">{name}</h5>
            <p className="card-text m-0"><span className="fw-bold">Anno: {birth_year}</span></p>
            <p className="card-text m-0"><span className="fw-bold">Nazionalità: </span>{nationality}</p>
            <p className="card-text mt-2"><span className="fw-bold">Bio: </span>{biography}</p>
<p className="card-text text-end"><small className="text-white"><span className="fw-bold">Premi: </span>{awards}</small></p>
</div>
        </div>
      </div>
    </div>
  </div>
  )
}