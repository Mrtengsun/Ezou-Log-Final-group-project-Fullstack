import HeroComponents from "./HeroComponents";
import CardComponents from "../Card/CardComponents";

import styles from "./Frontpage.module.scss";

const FrontPage = () => {
  return (
    <div>
      <div className={styles.frontpage}>
        <div></div>
        <div className={styles.hero__card}>
          <HeroComponents />
          <CardComponents />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
