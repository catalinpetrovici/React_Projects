import { useQuery } from 'react-query';

async function fetchComments(postId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: 'DELETE' }
  );
  return response.json();
}

const configInit = {
  method: 'GET',
  data: { title: 'REACT QUERY FOREVER!!!!' },
};

async function updatePost(postId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    configInit
  );
  return response.json();
}

export function PostDetail({
  post,
}: {
  post: { id: string; title: string; body: String };
}) {
  const { data, isLoading, isError } = useQuery(['comments', post.id], () =>
    fetchComments(post.id)
  );
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error at fetching data</div>;

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment: any) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
