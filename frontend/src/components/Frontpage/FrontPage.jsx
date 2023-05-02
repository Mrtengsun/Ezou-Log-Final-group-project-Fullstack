
import styles from "./Frontpage.module.scss";

import HeroComponents from "./HeroComponents";
import CardComponents from "../Card/CardComponents";


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
