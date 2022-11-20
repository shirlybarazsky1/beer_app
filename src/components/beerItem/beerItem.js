import "./beerItem.css";

export default function BeerItem({
  id,
  name,
  tagline,
  first_brewed,
  description,
  brewers_tips,
  image_url,
}) {
  return (
    <div>
      <div className="container">
        <div className="card">
          <img src={image_url} alt={image_url} className="image_url" />
          <div>
            <h2>
              {name} | {id}
            </h2>
            <h2>{tagline}</h2>
          </div>
          <div className="card_back">
            <div className="card_beer">
              <div>
                <div className="header">
                  <img src={image_url} alt={image_url} />
                  <div>
                    <h1>
                      {name} | {id}
                    </h1>
                    <h2>{tagline}</h2>
                  </div>
                </div>
                <div>
                  <div className="body">
                    <p className="title">First Brewed</p>
                    <p className="date">{first_brewed}</p>
                  </div>
                  <div>
                    <p className="title">Description</p>
                    <p className="info">{description}</p>
                  </div>
                  <div>
                    <p className="title">Brewers Tips</p>
                    <p className="info">{brewers_tips}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
