import React from 'react'

const WriterPage = () => {
  return (
    <div>[directorId]</div>
  )
}

export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:3000/api/writers`);
    const writers = await response.json();
    const idList = writers.map((writer) => writer._id);
    const paths = idList.map((id) => ({ params: { writerId: id.toString() } }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async (context) => {
    const response = await fetch(`http://localhost:3000/api/writers`);
    const writers = await response.json();
    const writersQuery = context.params.writerId;
    const writersIdMatch = writers.filter((writer)=> writer._id.toString() === writersQuery)
    return {
      props: {
        actor: writersIdMatch[0],
      },
    };
  };

export default WriterPage