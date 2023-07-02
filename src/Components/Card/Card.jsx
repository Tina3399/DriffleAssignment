import style from './style.module.css';
const Card = ({ heading, imgSrc, tag, tagImgSrc }) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img className={style.img} src={imgSrc} alt='img' />
        <h5 className={style.text}>{heading}</h5>
        <div className={style.flex}>
          <span>
            <img className={style.tagImgSrc} src={tagImgSrc} alt='tag' />
          </span>
          <h5 className={style.text}>{tag}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
