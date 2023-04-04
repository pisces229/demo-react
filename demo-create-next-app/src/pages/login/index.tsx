import Link from 'next/link';

console.log('Load Pages Login...');

const Index = () => {
  // const router = useRouter();
  // const { postId } = router.query;

  return (
    <>
      <Link href="/layout/first">First</Link>
      <Link href="/layout/second">Second</Link>
      <p>Login</p>
    </>
  );
};

export default Index;
