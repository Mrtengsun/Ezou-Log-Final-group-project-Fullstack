import NavigationBar from "../Frontpage/NavigationBar.jsx";
import SearchBar from "./SearchBar.jsx";
import AddPost from "./AddPost.jsx";
import "./community.scss";

const CommunityPage = () => {
  return (
    <div className="community">
      {/* <div>
        <NavigationBar />
      </div> */}

      <SearchBar />

      <AddPost />
    </div>
  );
};

export default CommunityPage;
