import "./navBar.css";

export default function NavBar({ setPage, page, setIsLoading, setSearch }) {
  const onChangeSearch = (value) => {
    if (value == null) setSearch("ALL");
    setSearch(value);
  };
  const onNext = () => {
    setIsLoading(true);
    setPage(page + 1);
    setSearch("ALL");
  };
  const onPrevious = () => {
    setIsLoading(true);
    setPage(page - 1);
    setSearch("ALL");
  };

  return (
    <div className="navBar">
      <div className="page">
        {page > 1 && (
          <button className="button" onClick={onPrevious}>
            {" "}
            ‹{" "}
          </button>
        )}
        <h2 className="h2">{page}/5</h2>
        {page < 5 && (
          <button className="button" onClick={onNext}>
            {" "}
            ›{" "}
          </button>
        )}
      </div>
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => onChangeSearch(e.target.value)}
          className="searchBar__input"
        />
        <button type="submit" className="searchBar__button">
          <i class="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}
