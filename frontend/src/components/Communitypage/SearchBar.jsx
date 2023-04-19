import "./searchbar.scss";

const SearchBar = () => {
  // const config={
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(),
  // }
  const searchPostHandler = () => {};

  return (
    <div className="search-section">
      <div className="search-bar">
        <input id="search-input" placeholder="Type to search" />

        <button id="search-button" onClick={searchPostHandler}>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
