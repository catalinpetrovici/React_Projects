import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useGlobalContext();

  let languages = repos.reduce((accTotal, currItem) => {
    const { language, stargazers_count } = currItem;
    if (!language) return accTotal;

    if (!accTotal[language]) {
      accTotal[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      accTotal[language] = {
        ...accTotal[language],
        value: accTotal[language].value + 1,
        stars: accTotal[language].stars + stargazers_count,
      };
    }

    return accTotal;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // most stars per language

  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)
    .map((item) => {
      return { ...item, value: item.stars };
    });
  console.log(mostPopular);

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={languages} />
        <div></div>
        <Doughnut2D data={mostPopular} />
        <div></div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
