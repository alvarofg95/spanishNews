import React, { Component } from 'react';
import Panel from '../components/Panel';
import postToAPI from '../utils/postToAPI';
import { GET_MEDIA_LIST, GET_MEDIA_NEWS } from '../utils/APIQueries';
import NewsList from '../components/NewsList';

const height = window.innerHeight;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: [],
      news: []
    };
    this.getMediaList = this.getMediaList.bind(this);
    this.onClickMedia = this.onClickMedia.bind(this);
    this.onClickSection = this.onClickSection.bind(this);
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

  onClickSection(mediaKey, mediaSection) {
    if (mediaKey && mediaSection) {
      postToAPI(GET_MEDIA_NEWS, `/${mediaKey}/${mediaSection}`).then(res => {
        this.setState({ news: res });
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Panel
          height={height}
          mediaList={this.state.mediaList}
          mediaKey={this.state.mediaKey}
          sectionList={this.state.sectionList}
          onClickMedia={this.onClickMedia}
          onClickSection={this.onClickSection}
        />
        <NewsList height={height} news={this.state.news} />
      </div>
    );
  }
}
export default Home;
