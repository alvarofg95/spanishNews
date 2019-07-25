import React, { Component } from 'react';
import Panel from '../components/Panel';
import postToAPI from '../utils/postToAPI';
import { GET_MEDIA_LIST } from '../utils/APIQueries';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: null
    };
    this.getMediaList = this.getMediaList.bind(this);
  }

  componentWillMount() {
    this.getMediaList();
  }

  getMediaList() {
    postToAPI(GET_MEDIA_LIST)
  }

  render() {
    return (
      <div className="container">
        <Panel />
        <div>contenido</div>
      </div>
    );
  }
}
export default Home
