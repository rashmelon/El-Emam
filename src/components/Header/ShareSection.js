import React, { Component } from 'react';

class ShareSection extends Component {

  render() {
    return (
      <div id="share-eng">
        <img id="share" src={require("../../resources/share.png")}/>
        <p id="english">EN</p>
      </div>
    );
  }
}

export default ShareSection;
