import Layout from '../../components/layout';

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    return [
      {
        params: {
          // Statically Generates /posts/a/b/c
          id: ['a', 'b', 'c'],
        },
      },
      //...
    ];
}

export async function getStaticProps({ params }) {
// Fetch necessary data for the blog post using params.id
}