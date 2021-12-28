import Head from "next/head";

export default function DocumentHead({ title }) {
  return (
    <>
      <Head>
        <title>{title} - muhibullah</title>
        <meta name="description" content="muhibullah software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
