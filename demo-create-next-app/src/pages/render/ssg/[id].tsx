import { NextPage } from 'next';
import { GetStaticPaths, GetStaticProps } from 'next';

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
      <h3>Render SSG</h3>
      <p>{post?.name}</p>
    </>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch(`http://localhost:9080/api/users/${context.params?.id}`);
  const res = await fetch(`http://localhost:9080/api/users/${context.params?.id}`);
  const post: Post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true,
  };
};
