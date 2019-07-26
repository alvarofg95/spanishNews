import React, { Component } from 'react';
import Panel from '../components/Panel';
import postToAPI from '../utils/postToAPI';
import { GET_MEDIA_LIST } from '../utils/APIQueries';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: []
    };
    this.getMediaList = this.getMediaList.bind(this);
    this.onClickMedia = this.onClickMedia.bind(this);
  }

  componentWillMount() {
    if (!this.state.mediaList.length) {
      this.getMediaList();
    }
  }

  getMediaList() {
    postToAPI(GET_MEDIA_LIST).then(mediaList => {
      this.setState({ mediaList });
    });
  }

  onClickMedia(mediaKey) {
    const { mediaList } = this.state;
    const mediaIndex = mediaList.findIndex(media => media.nameKey === mediaKey);
    if (mediaIndex > -1) {
      this.setState({ mediaKey, sectionList: mediaList[mediaIndex].sections });
    } else {
      this.setState({ mediaKey, sectionList: null });
    }
  }

  render() {
    return (
      <div className="container">
        <Panel
          mediaList={this.state.mediaList}
          mediaKey={this.state.mediaKey}
          sectionList={this.state.sectionList}
          onClickMedia={this.onClickMedia}
        />
        <div>contenido</div>
      </div>
    );
  }
}
export default Home;
