import { useEffect, useState } from "react";
import axios from "axios";
import BeerList from "../beerList/beerList";
import NavBar from "../navBar/navBar";
import "./homePage.css";

export default function HomePage() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "https://api.punkapi.com/v2/beers?";
  const per_page = 72;

  useEffect(() => {
    axios
      .get(`${API_URL}page=${page}&per_page=${per_page}`)
      .then((response) => {
        setBeers(response.data);
        setIsLoading(false);
      });
  });

  return (
    <div>
      {isLoading && <h2 className="homePage"> LOADING... </h2>}
      {!isLoading && (
        <div>
          <div className="logo">
            <div className="big-logo">
              <h1>
                <span className="tilt-left">O</span>
                <span className="tilt-right">U</span>
                <span className="tilt-left">R</span>
              </h1>
              <h1>
                <span className="tilt-right">B</span>
                <span className="tilt-left">E</span>
                <span className="tilt-right">E</span>
                <span className="tilt-left">R</span>
              </h1>
            </div>
          </div>
          <NavBar
            page={page}
            setPage={setPage}
            setIsLoading={setIsLoading}
            setSearch={setSearch}
          />
          <BeerList
            beers={beers.filter(
              (beer) =>
                search === "ALL" ||
                beer.name.toLowerCase().startsWith(search.toLowerCase())
            )}
          />
        </div>
      )}
      <link
        rel="stylesheet"
        href="https://fontawesome.com/icons/arrow-up?s=solid&f=sharp"
      />
      <a class="go_top_btn" href="#">
        ⬆
      </a>
    </div>
  );
}
