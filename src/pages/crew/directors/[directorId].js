import React from 'react'

const DirectorPage = () => {
  return (
    <div>[directorId]</div>
  )
}

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:3000/api/directors`);
    const directors = await response.json();
    const idList = directors.map((director) => director._id);
    const paths = idList.map((id) => ({ params: { directorId: id.toString() } }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async (context) => {
    const response = await fetch(`http://localhost:3000/api/directors`);
    const directors = await response.json();
    const directorQuery = context.params.directorId;
    const directorsIdMatch = directors.filter((director)=> director._id.toString() === directorQuery)
    return {
      props: {
        actor: directorsIdMatch[0],
      },
    };
  };

export default DirectorPage