import NavigationBar from "../Frontpage/NavigationBar.jsx";
import SearchBar from "./SearchBar.jsx";
import AddPost from "./AddPost.jsx";
import "./community.scss";
import Footer from "../Frontpage/Footer.jsx";

const CommunityPage = () => {
  return (
    // <div className="communityPage">
    //   {/* <NavigationBar /> */}

    <div className="community">
      <SearchBar />
      <AddPost />
    </div>
  );
};

export default CommunityPage;
