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
    this.onClickSubSection = this.onClickSubSection.bind(this);
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
      this.setState({
        mediaKey,
        sectionList: mediaList[mediaIndex].sections,
        sectionKey: null,
        subSectionKey: null,
        subSectionList: null
      });
    } else {
      this.setState({ mediaKey, sectionList: null, sectionKey: null, subSectionKey: null });
    }
  }

  onClickSection(mediaKey, mediaSection) {
    if (mediaKey && mediaSection) {
      postToAPI(GET_MEDIA_NEWS, `/${mediaKey}/${mediaSection}/null`).then(res => {
        const { sectionList } = this.state;
        const sectionIndex = sectionList.findIndex(section => section.nameKey === mediaSection);
        this.setState({
          news: res,
          sectionKey: mediaSection,
          subSectionList: sectionIndex > -1 ? sectionList[sectionIndex].sections : []
        });
      });
    }
  }

  onClickSubSection(mediaKey, mediaSection, mediaSubSection) {
    if (mediaKey && mediaSection && mediaSubSection) {
      postToAPI(GET_MEDIA_NEWS, `/${mediaKey}/${mediaSection}/${mediaSubSection}`).then(res => {
        this.setState({
          news: res,
          subSectionKey: mediaSubSection
        });
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
          sectionKey={this.state.sectionKey}
          sectionList={this.state.sectionList}
          subSectionKey={this.state.subSectionKey}
          subSectionList={this.state.subSectionList}
          onClickMedia={this.onClickMedia}
          onClickSection={this.onClickSection}
          onClickSubSection={this.onClickSubSection}
        />
        <NewsList height={height} news={this.state.news} />
      </div>
    );
  }
}
export default Home;
