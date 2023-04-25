import NavigationBar from "./NavigationBar";
import HeroComponents from "./HeroComponents";
import CardComponents from "../Card/CardComponents";
import Footer from "./Footer";
import styles from "./Frontpage.module.scss";

const FrontPage = () => {
  return (
    <div>
      <div className={styles.frontpage}>
        {/* <div>
          <NavigationBar />
        </div> */}
        <div className={styles.hero__card}>
          <HeroComponents />
          <CardComponents />
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default FrontPage;
