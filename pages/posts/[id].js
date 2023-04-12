import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <Date dateString={postData.date} />
    </Layout>
  );
}
