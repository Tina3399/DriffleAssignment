import { useState } from 'react';
import style from './style.module.css';
import Card from '../Card/Card';
import cardData from './cardData.js';

const initState = {
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
  item6: false,
  item7: false,
  item8: false,
};

const CircularPanel = () => {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [
    { item1, item2, item3, item4, item5, item6, item7, item8 },
    setHoverImages,
  ] = useState(initState);

  const handleMouseEnter = (item) => {
    setStopAnimation(true);
    setHoverImages((prev) => {
      return { ...prev, [item]: true };
    });
  };

  const handleMouseExit = (item) => {
    setStopAnimation(false);
    setHoverImages((prev) => {
      return { ...prev, [item]: false };
    });
  };

  const animationState = stopAnimation
    ? style.pauseAnimation
    : style.runAnimation;

  return (
    <div className={style.wrapper}>
      <div className={style.orbitWrapper}>
        <div className={style.orbits}>
          <div className={style.orbit1}>
            <div
              className={`${style.item1} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item1')}
              onMouseEnter={() => handleMouseEnter('item1')}
            >
              {item1 ? (
                <Card {...cardData.minecraft} />
              ) : (
                <span className={style.image1}></span>
              )}
            </div>
            <div
              className={`${style.item2} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item2')}
              onMouseEnter={() => handleMouseEnter('item2')}
            >
              {item2 ? (
                <Card {...cardData.mortalkombat} />
              ) : (
                <span className={style.image2}></span>
              )}
            </div>
            <div
              className={`${style.item3} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item3')}
              onMouseEnter={() => handleMouseEnter('item3')}
            >
              {item3 ? (
                <Card {...cardData.xbox} />
              ) : (
                <span className={style.image3}></span>
              )}
            </div>
          </div>
        </div>

        <div className={style.orbits}>
          <div className={style.orbit2}>
            <div
              className={`${style.item4} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item4')}
              onMouseEnter={() => handleMouseEnter('item4')}
            >
              {item4 ? (
                <Card {...cardData.batman} />
              ) : (
                <span className={style.image4}></span>
              )}
            </div>
            <div
              className={`${style.item5} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item5')}
              onMouseEnter={() => handleMouseEnter('item5')}
            >
              {item5 ? (
                <Card {...cardData.fifa} />
              ) : (
                <span className={style.image5}></span>
              )}
            </div>
            <div
              className={`${style.item6} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item6')}
              onMouseEnter={() => handleMouseEnter('item6')}
            >
              {item6 ? (
                <Card {...cardData.spiderman} />
              ) : (
                <span className={style.image6}></span>
              )}
            </div>
          </div>
        </div>

        <div className={style.orbits}>
          <div className={style.orbit3}>
            <div
              className={`${style.item7} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item7')}
              onMouseEnter={() => handleMouseEnter('item7')}
            >
              {item7 ? (
                <Card {...cardData.gta} />
              ) : (
                <span className={style.image7}></span>
              )}
            </div>
            <div
              className={`${style.item8} ${animationState}`}
              onMouseLeave={() => handleMouseExit('item8')}
              onMouseEnter={() => handleMouseEnter('item8')}
            >
              {item8 ? (
                <Card {...cardData.steam} />
              ) : (
                <span className={style.image8}></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularPanel;
