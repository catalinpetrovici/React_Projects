import InfiniteScroll from 'react-infinite-scroller';
import { Species } from './Species';

import { useInfiniteQuery } from 'react-query';

type Species = {
  name: string;
  language: string;
  average_lifespan: string;
};

const initialUrl = 'https://swapi.dev/api/species/';
const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
  const {
    data,
    isError,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'if-species',
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    // return undefined if lastPage.next is falsy
    { getNextPageParam: (lastPage) => lastPage.next || undefined }
  );

  if (isLoading) return <div className='loading'>Loading...</div>;
  if (isError)
    return <div className='loading'>Error...${error.toString()}</div>;

  return (
    <>
      {isFetching && <div className='loading'>Fetching...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data?.pages.map((pageData) => {
          return pageData.results.map((species: Species) => {
            return (
              <Species
                key={species.name}
                name={species.name}
                language={species.language}
                averageLifespan={species.average_lifespan}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
}
