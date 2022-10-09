import InfiniteScroll from 'react-infinite-scroller';
import { Person } from './Person';

type Person = {
  name: string;
  hair_color: string;
  eye_color: string;
};

import { useInfiniteQuery } from 'react-query';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    error,
    isError,
  } = useInfiniteQuery(
    'sw-people',
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
          console.log(pageData.results);
          return pageData.results.map((person: Person) => {
            return (
              <Person
                key={person.name}
                name={person.name}
                hairColor={person.hair_color}
                eyeColor={person.eye_color}
              />
            );
          });
        })}
      </InfiniteScroll>
    </>
  );
}
