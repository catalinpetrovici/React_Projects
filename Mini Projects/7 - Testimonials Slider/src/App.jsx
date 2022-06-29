import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import Title from './Title';
import Button from './ButtonSlider';
import ArticleSlider from './ArticleSlider';

function App() {
  const [people, setPeople] = useState(data);
  const [indexSlider, setIndexSlider] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (indexSlider < 0) return setIndexSlider(lastIndex);

    if (indexSlider > lastIndex) return setIndexSlider(0);
  }, [indexSlider, people]);

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      setIndexSlider(indexSlider + 1);
    }, 3 * 1000);

    return () => clearInterval(sliderInterval);
  }, [indexSlider]);

  return (
    <section className='section'>
      <Title />
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;
          // more stuff coming up
          let position = 'nextSlide';

          if (personIndex === indexSlider) {
            position = 'activeSlide';
          }

          if (
            personIndex === indexSlider - 1 ||
            (indexSlider === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <ArticleSlider
              key={id}
              position={position}
              image={image}
              title={title}
              name={name}
              quote={quote}
            />
          );
        })}
        <Button
          onClick={() => setIndexSlider(indexSlider - 1)}
          icon={<FiChevronLeft />}
          className={'prev'}
        />
        <Button
          onClick={() => setIndexSlider(indexSlider + 1)}
          icon={<FiChevronRight />}
          className={'next'}
        />
      </div>
    </section>
  );
}

export default App;
