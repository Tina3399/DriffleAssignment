import CircularButton from '../Button/CircularButton';
import CircularPanel from '../CircularPanel/CircularPanel';
import style from './style.module.css';
const AboutUs = () => {
  return (
    <div className={style.wrapper}>
      <CircularPanel />
      <div className={style.textWrapper}>
        <div className={style.text}>
          <h1>
            Driffle is a <span className={style.spanTag}>one-stop shop</span>{' '}
            for all your gaming needs.
          </h1>
          <p>
            Not only do we sell games, but also offer gift cards, DLC's, and
            more. Driffle is a marketplace, so you can find a wide variety of
            items from different sellers in one place. We are committed to the
            future of gaming and strive to make our platform safe, affordable,
            and sustainable for all users. Whether you're looking for the latest
            releases or hard-to-find classics, you're sure to find what you're
            looking for on Driffle.
          </p>
          <CircularButton text='Visit Our Store' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
