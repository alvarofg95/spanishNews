import React from 'react';
import Icon from './images/Icon';
import '../style/panel.css';

export default ({
  height,
  mediaList = [],
  mediaKey,
  sectionList,
  subSectionList = [],
  sectionKey,
  subSectionKey,
  onClickMedia,
  onClickSection,
  onClickSubSection
}) => {
  console.log({ mediaKey, sectionKey, subSectionKey });
  const subSectionSelected = subSectionList && subSectionList.length ? true : false;
  return (
    <div className={`panelDiv${subSectionSelected ? ' width-30' : ''}`} style={{ height }}>
      <div className={`mediaPanel${subSectionSelected ? ' width-30' : ''}`}>
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
        <div className={`sectionPanel${subSectionSelected ? ' width-40' : ''}`}>
          {sectionList.map(section => (
            <p
              key={section.nameKey}
              className={sectionKey === section.nameKey ? 'activeSection' : ''}
              onClick={() => onClickSection(mediaKey, section.nameKey)}
            >
              {section.name}
            </p>
          ))}
        </div>
      ) : null}
      {sectionKey && subSectionList.length ? (
        <div className={`subSectionPanel${subSectionSelected ? ' width-40' : ''}`}>
          {subSectionList.map(section => (
            <p
              key={section.nameKey}
              className={subSectionKey === section.nameKey ? 'activeSubSection' : ''}
              onClick={() => onClickSubSection(mediaKey, sectionKey, section.nameKey)}
            >
              {section.name}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
