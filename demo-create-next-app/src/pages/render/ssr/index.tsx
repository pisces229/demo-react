import { NextPage } from 'next';
import { GetServerSideProps } from 'next';

interface Post {
  id: string;
  name: string;
}

interface IndexProps {
  post: Post;
}

const Index: NextPage<IndexProps> = ({ post }: IndexProps) => {
  return (
    <>
      <h3>Render SSR</h3>
      <p>{post?.name}</p>
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  // const res = await fetch("http://localhost:9080/api/users/1");
  const res = await fetch('https://localhost:9443/api/users/1');
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};
