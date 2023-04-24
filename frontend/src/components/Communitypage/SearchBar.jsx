import "./searchbar.scss";
import { useContext } from "react";
import { CommunityContext } from "../contexts/communityContext.js";

const SearchBar = () => {
  const { searchInput, search, setSearch } = useContext(CommunityContext);

  const onInputHandler = () => {
    const searchValue = searchInput.current.value;
    setSearch(searchValue);
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchValue),
    };

    fetch(`http://localhost:3000/community`, config)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        const output = result.map(item, (i) => (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ));
        const area = document.getElementsByClassName("search-section");
        area.createElement("div");
        area.classList.add("searchResult");
        area.appendChild(output);
      })
      .catch((err) => {
        console.log(err, "coming from catch SearchBar");
      });
  };
  const searchPostHandler = () => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search),
    };
    fetch(`http://localhost:3000/community`, config)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        const output = result.filter((item) => item === search);
        const area = document.getElementsByClassName("search-section");
        const outPut = area.createElement("div");
        outPut.classList.add("searchResult");
        outPut.appendChild(output);
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
    </div>
  );
};

export default SearchBar;
