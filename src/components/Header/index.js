import React from 'react';
import Main from './Main.css'

export default class Header extends React.Component {
  render() {
    return (
      <div>
      <a className="Header" href="www.google.com">My Story</a>
      <a className='Header' href="www.google.com">Contact</a>
      <a className='Header' href="www.google.com">Links</a>
      </div>
    );
  }
}
