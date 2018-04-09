import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import profile from 'assets/profile.jpg';
import ocean from 'assets/ocean.jpg';
import styled from 'react-emotion';

const Image = styled('div')`
  background-image: url(${ocean});
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  `

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: '250px',
    height: '250px',
    float: 'left',
    margin: '3%',
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Image className={classes.row} >
      <Avatar
        alt="Profile Pic"
        src={profile}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <h1>Veronica Basch</h1>
      <h3>Web Developer</h3>
    </Image>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
