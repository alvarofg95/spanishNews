import React from 'react';
import Icon from './images/Icon';
import '../style/panel.css'

const MEDIA_LIST = [{
  title: 'ABC'
}]

export default () => (
  <div className="panelDiv">
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
    <Icon width="80" src={require('../assets/mediaIcons/logo.svg')} alt="ABC" />
  </div>
);
