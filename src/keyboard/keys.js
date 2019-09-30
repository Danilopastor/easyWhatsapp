import React from 'react';
import { Key , KeyText } from './style';

const KeyMap = ({border, handleClick,value }) => <Key border={border} onPress={handleClick}><KeyText>{value}</KeyText></Key>

export default KeyMap