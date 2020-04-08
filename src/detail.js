import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 900,
    width: 600
  },
  media: {
    height: 140
  },
});

export default function Detail(props) {
  const classes = useStyles();
  const [nom, setNom] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('')
  const [summary, setSummary] = useState('')
  const [urlImg, setUrlImg] = useState('')
  const [rating, setRating] = useState('')
  const [premiere, setPremiere] = useState('')

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
          setUrlImg(result.image?.medium)
          setRating(result.rating.average+'/10')
          setPremiere(result.premiered)
        }
      )
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlImg}
            title={nom}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
              <p>{nom}</p>
              <p>Type :{type}</p>
              <p>Rating :{rating}</p>
              <p>Premiere :{premiere}</p>
              <p>Summary :{summary}</p>
              <p>Genre :{genre}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
