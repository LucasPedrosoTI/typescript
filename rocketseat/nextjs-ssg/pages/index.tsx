import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function Home({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.bio}</h3>

      <p>Repos: {user.public_repos}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/lucaspedrosoti');
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 10,
  };
};
