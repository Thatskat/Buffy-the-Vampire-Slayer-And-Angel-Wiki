import Head from "next/head"
const notFoundPage = () => {
  return (
    <div>
      <Head>
        <title>Page not Found | Buffy the Vampire Slayer + Angel Wiki</title>
      </Head>
        <h1>404 Error</h1>
        <p>The request URL could not be found</p>
    </div>
  )
}

export default notFoundPage