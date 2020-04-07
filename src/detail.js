import React, { useState, useEffect } from 'react';



export default function Detail(props) {

  const [nom, setNom] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('')
  const [summary, setSummary] = useState('')

  useEffect(() => rechercheSingle(props.match.params.id), [])

  const rechercheSingle = (id) => {
    const requestAPI = "https://api.tvmaze.com/shows/"+id

    fetch(requestAPI)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setNom(result.name)
          setType(result.type)
          setGenre(result.genres)
          const regex = /(<([^>]+)>)/ig;
          const sum = result.summary.replace(regex, '');
          setSummary(sum)
        }
      )
  };

  return (
    <>
      <div>
        <p>Name :{nom}</p>
        <p>Type :{type}</p>
        <p>Rating :{type}</p>
        <p>Premiere :{type}</p>
        <p>Image :{type}</p>
        <p>Summary :{summary}</p>
        <p>Genre :{genre}</p>
      </div>
    </>
  );
}
