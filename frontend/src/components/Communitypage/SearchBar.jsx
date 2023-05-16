import "./searchbar.scss";
import { useContext, useEffect } from "react";
import { CommunityContext } from "../contexts/communityContext.js";
import { CreateaccountCTX } from "../contexts/CreateaccountCTX";

const SearchBar = () => {
  const { searchInput, search, setSearch, getSearchInput, setGetSearchInput } =
    useContext(CommunityContext);
  const { token } = useContext(CreateaccountCTX);

  const config = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const onInputHandler = () => {
    const searchValue = searchInput.current.value;
    setSearch(searchValue);

    fetch(`/api/community/`, config)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        const filterOut = result.filter((item) => item.topic.includes(search));
        setGetSearchInput(filterOut);

        console.log(filterOut);
      })
      .catch((err) => {
        console.log(err, "coming from catch SearchBar");
      });
  };
  const searchPostHandler = () => {
    fetch(`/api/community/`, config)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        const searchResult = result.filter((item) => item.topic === search);
        console.log(searchResult);
        setGetSearchInput(searchResult);
      })
      .catch((err) => {
        console.log(err, "coming from catch SearchBar");
      });
  };

  return (
    <div className="search-section">
      <div className="search-bar">
        <input
          id="search-input"
          placeholder="Type to search"
          ref={searchInput}
          onInput={onInputHandler}
        />

        <button id="search-button" onClick={searchPostHandler}>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
      </div>

      {getSearchInput && search
        ? getSearchInput.map((item, i) => (
            <div className="search-output" key={i}>
              <div>
                <h3>{item.topic}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default SearchBar;
