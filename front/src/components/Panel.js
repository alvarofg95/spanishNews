import React from 'react';
import Icon from './images/Icon';
import '../style/panel.css';

export default ({
  height,
  mediaList = [],
  mediaKey,
  sectionList,
  sectionKey,
  onClickMedia,
  onClickSection
}) => (
  <div className="panelDiv" style={{ height }}>
    <div className="mediaPanel">
      {mediaList &&
        mediaList.length &&
        mediaList.map(media => (
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
    {mediaKey ? (
      <div className="sectionPanel">
        {sectionList.map(section => (
          <p key={section.nameKey} onClick={() => onClickSection(mediaKey, section.nameKey)}>
            {section.name}
          </p>
        ))}
      </div>
    ) : null}
  </div>
);
