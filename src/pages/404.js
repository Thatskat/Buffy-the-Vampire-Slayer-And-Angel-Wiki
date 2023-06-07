import Head from "next/head";
import Link from "next/link";

const notFoundPage = () => {
  return (
    <div>
      <Head>
        <title>Page not Found | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta
          name="description"
          content={`Oops! The page you were looking for has been moved or is no longer available - Error 404. Please click here to go back to our homepage.`}
        />
      </Head>
      <h1>404 Error</h1>
      <p className="subText">The request URL could not be found</p>
      <p>
        Oops! The page you were looking for has been moved or is no longer
        available - Error 404. Please click <Link href={'/'}>here</Link> to go back to our homepage.
      </p>
    </div>
  );
};

export default notFoundPage;
