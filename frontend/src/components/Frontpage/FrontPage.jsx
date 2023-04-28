
import NavigationBar from "./NavigationBar";
import HeroComponents from "./HeroComponents";
import CardComponents from "../Card/CardComponents";
import Footer from "./Footer";



const FrontPage = () => {
  return (
    <div>
      <div className={styles.frontpage}>

        <div className={styles.hero__card}>
          <HeroComponents />
          <CardComponents />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
