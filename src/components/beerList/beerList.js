import BeerItem from "../beerItem/beerItem";
import imageUrlNull from "../../image/keg.png";
import "./beerList.css";

export default function BeerList({ beers }) {
  return (
    <div>
      {beers.length > 0 && (
        <div className="cards">
          {beers.map((beer) => {
            return (
              <BeerItem
                key={beer.id}
                id={beer.id}
                name={beer.name}
                tagline={beer.tagline}
                first_brewed={beer.first_brewed}
                description={beer.description}
                brewers_tips={beer.brewers_tips}
                image_url={
                  beer.image_url != null ? beer.image_url : imageUrlNull
                }
              />
            );
          })}
        </div>
      )}
      {beers.length < 1 && (
        <div>
          <h2> not found... </h2>
        </div>
      )}
    </div>
  );
}
