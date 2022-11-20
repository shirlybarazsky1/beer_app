import "./navBar.css";

export default function NavBar({
  setPage,
  page,
  setIsLoading,
  setSearch,
  fetchData,
}) {
  const onChangeSearch = (value) => {
    if (value == null) setSearch("ALL");
    setSearch(value);
  };
  const onNext = () => {
    setIsLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);
    setSearch("ALL");
    fetchData(nextPage);
  };
  const onPrevious = () => {
    setIsLoading(true);
    const previousPage = page - 1;
    setPage(previousPage);
    setSearch("ALL");
    fetchData(previousPage);
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
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}
