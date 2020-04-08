import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 200,
    width: 400
  },
  media: {
    height: 140
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <button onClick={() => window.location.href='/detail/'+props.keyy} className="unstyled-button">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.url}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </button>
  );
}
