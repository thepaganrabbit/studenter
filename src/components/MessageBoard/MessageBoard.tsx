import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { ThemeContext } from '../../theme';
import { ThemeBuilder } from '../../utils/ThemeBuilder';
import './messageboard.scss';
import MessageCard from '../MessageCard/MessageCard';

const MessageBoard = () => {
  const messages = useSelector(
    (state: RootState) => state.message_mod.messages,
  );
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);

  return (
    <div
      className="message-container"
      style={{
        backgroundColor: themeCtx.getColorsByMode().background,
        color: themeCtx.getTextColor(),
      }}
    >
      <div className="message-head">
        <h2 style={{ color: themeCtx.getTextColor() }}>Message Board</h2>
      </div>
      <div className="messages">
        {messages.map((msg) => {
          return <MessageCard key={msg._id} {...msg} />;
        })}
      </div>
    </div>
  );
};

export default MessageBoard;
