import Head from "next/head"
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
        <p>The request URL could not be found</p>
    </div>
  )
}

export default notFoundPage