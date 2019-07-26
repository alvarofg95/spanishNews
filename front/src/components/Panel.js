import React from 'react';
import Icon from './images/Icon';
import '../style/panel.css';

export default ({ mediaList, mediaKey, sectionList, sectionKey, onClickMedia, onClickSection }) => {
  return (
    <div className="panelDiv">
      <div className="mediaPanel">
        {mediaList.map(media => (
          <Icon
            key={media.nameKey}
            className={media.nameKey === mediaKey ? 'activeMedia' : ''}
            width="80"
            src={require('../assets/mediaIcons/logo.svg')}
            alt={media.name}
            onClick={() => onClickMedia(media.nameKey)}
          />
        ))}
      </div>
      <div className="sectionPanel">
        {sectionList.map(section => (
          <Icon
            key={section.nameKey}
            className={section.nameKey === sectionKey ? 'activeMedia' : ''}
            width="80"
            src={require('../assets/mediaIcons/logo.svg')}
            alt={}
            onClick={() => onClickSection(section.nameKey)}
          />
        ))}
      </div>
    </div>
  );
};
