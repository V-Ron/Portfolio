import React from 'react';
import images from './images.css';
import surf from 'assets/surf.jpg';
import code from 'assets/code.jpg';
import grandCanyon from 'assets/grand-canyon.jpg';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


const styles = {
  main: {
    display: 'flex',
  },
  card: {
    minWidth: 345,
    padding: '10px',
    margin: '10px'
  },
  media: {
    height: 200,
    paddingBottom: '0px',
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={surf}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Surf
          </Typography>
        </CardContent>
      </Card>


      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={code}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Code
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={grandCanyon}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Explore
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}


export default withStyles(styles)(SimpleMediaCard);
