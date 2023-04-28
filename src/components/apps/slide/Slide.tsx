

import React from 'react';
import { Components } from '..';
import { LIST } from '../../../utils/List';

import cls from "./index.module.scss";
import { SliderButton } from './sliderButton/SliderButton';

export const Slide: React.FunctionComponent<any> = () => {

  const [ currentSlider, setCurrentSlider ] = React.useState(0);

  const nextSlide = () => {
    if(currentSlider !== LIST.SliderList.length - 1){
      setCurrentSlider(prev => prev + 1)
    }else {
      setCurrentSlider(0);
    }
  };


  const prevSlide = () => {
    if(currentSlider > 0){
      setCurrentSlider(prev => prev - 1)
    }else {
      setCurrentSlider(LIST.SliderList.length - 1);
    }
  };

  return (
    <React.Fragment>
      <Components.Container>
        <section className={cls.slider_wrapper}>
          {LIST.SliderList.map((el, i) => 
            <img 
              src={el.img} 
              alt="" 
              key={el.id}
              className={currentSlider === i ? cls.activeSlider : null}
            />

          )}

          <SliderButton  direct="prev" handleClick={prevSlide} />
          <SliderButton  direct="next" handleClick={nextSlide} />
        </section>
        
      </Components.Container>
    </React.Fragment>
  )
};
