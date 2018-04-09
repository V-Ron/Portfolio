import React from 'react';
import surf from 'assets/surf.jpg';
import code from 'assets/code.jpg';
import grandCanyon from 'assets/grand-canyon.jpg';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import ButtonBase from "material-ui/ButtonBase";
import Typography from 'material-ui/Typography';


const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    minWidth: 345,
    padding: '10px',
    margin: '10px'
  },
  cardButton: {
  display: "block",
  textAlign: "initial",
  width: "-webkit-fill-available",
  },
  media: {
    height: 200,
    paddingBottom: '0px',
  },
  caption: {
    textAlign: 'center',
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <Card className={classes.card}>
        <ButtonBase className={classes.cardButton}>
          <CardMedia
            className={classes.media}
            image={surf}
          />
          <CardContent>
            <Typography
              gutterBottom variant="headline"
              component="h2"
              className={classes.caption}
              >
              Surf
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>


      <Card className={classes.card}>
        <ButtonBase className={classes.cardButton}>
          <CardMedia
            className={classes.media}
            image={code}
          />
          <CardContent>
          <Typography
            gutterBottom variant="headline"
            component="h2"
            className={classes.caption}
            >
              Code
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>

      <Card className={classes.card}>
        <ButtonBase className={classes.cardButton}>
          <CardMedia
            className={classes.media}
            image={grandCanyon}
          />
          <CardContent>
          <Typography
            gutterBottom variant="headline"
            component="h2"
            className={classes.caption}
            >
              Explore
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    </div>
  );
}


export default withStyles(styles)(SimpleMediaCard);
