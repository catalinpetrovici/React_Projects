import { useQuery, useMutation } from 'react-query';

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
  method: 'PATCH',
  data: { title: 'REACT QUERY FOREVER!!!!' },
};

async function updatePost(postId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    configInit
  );
  return response.json();
}

type Post = {
  id: string;
  title: string;
  body: string;
  userId?: string;
};

export function PostDetail({ post }: { post: Post }) {
  const { data, isLoading, isError } = useQuery(['comments', post.id], () =>
    fetchComments(post.id)
  );

  const deleteMutation = useMutation((post: Post) => deletePost(post.id));
  const updateMutation = useMutation((post: Post) => updatePost(post.id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error at fetching data</div>;

  return (
    <>
      <h3 style={{ color: 'blue' }}>{post.title}</h3>
      <button onClick={() => deleteMutation.mutate(post)}>Delete</button>
      {deleteMutation.isError && (
        <p style={{ color: 'red' }}>Error deleting the post</p>
      )}
      {deleteMutation.isLoading && (
        <p style={{ color: 'red' }}>Deleting the post</p>
      )}
      {deleteMutation.isSuccess && (
        <p style={{ color: 'green' }}>Post has (not) been deleted</p>
      )}

      <button onClick={() => updateMutation.mutate(post)}>Update title</button>
      {updateMutation.isError && (
        <p style={{ color: 'red' }}>Error updating the post</p>
      )}
      {updateMutation.isLoading && (
        <p style={{ color: 'red' }}>Updating the post</p>
      )}
      {updateMutation.isSuccess && (
        <p style={{ color: 'green' }}>Post has (not) been updating</p>
      )}
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
